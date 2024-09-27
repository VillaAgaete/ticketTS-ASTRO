import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { ticketId, newState } = req.body;

    try {
      const { data, error } = await supabase
        .from('tickets')
        .update({ state: newState })
        .eq('id', ticketId)
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        res.status(200).json({ 
          success: true, 
          message: `Ticket ${ticketId} updated to state ${newState}`,
          updatedTicket: data[0]
        });
      } else {
        throw new Error('Ticket not found or not updated');
      }
    } catch (error) {
      console.error('Error updating ticket status:', error);
      res.status(500).json({ 
        success: false, 
        error: (error as Error).message 
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}