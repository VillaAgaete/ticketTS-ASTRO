import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { error } = await supabase
      .from('tickets')
      .delete()
      .eq('state', 9);

    if (error) throw error;

    return res.status(200).json({
      success: true,
      message: "All done tickets have been deleted."
    });
  } catch (error) {
    console.error('Error deleting done tickets:', error);
    return res.status(500).json({
      success: false,
      message: "There was an error deleting done tickets. Please try again.",
      error: error.message
    });
  }
}