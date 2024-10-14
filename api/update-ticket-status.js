import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { ticketId, newState } = req.body;

    const { data, error } = await supabase
      .from('tickets')
      .update({ state: newState })
      .eq('id', ticketId)
      .select();

    if (error) throw error;

    if (data && data.length > 0) {
      // Fetch all tickets after update
      const { data: allTickets, error: fetchError } = await supabase
        .from('tickets')
        .select('*')
        .order('id', { ascending: false });

      if (fetchError) throw fetchError;

      return res.status(200).json({
        success: true,
        message: `Ticket ${ticketId} updated to state ${newState}`,
        updatedTicket: data[0],
        allTickets: allTickets
      });
    } else {
      throw new Error('Ticket not found or not updated');
    }
  } catch (error) {
    console.error('Error updating ticket status:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Unknown error'
    });
  }
}