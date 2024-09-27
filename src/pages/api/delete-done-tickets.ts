import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    try {
      const { error } = await supabase
        .from('tickets')
        .delete()
        .eq('state', 9);

      if (error) throw error;

      res.status(200).json({
        success: true,
        message: "All done tickets have been deleted."
      });
    } catch (error) {
      console.error('Error deleting done tickets:', error);
      res.status(500).json({
        success: false,
        message: "There was an error deleting done tickets. Please try again."
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}