import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    try {
      const ticket = req.body;
      ticket.state = 0;  // Set initial state to 0 for new tickets

      const { data, error } = await supabase
        .from('tickets')
        .insert([ticket])
        .select();

      if (error) throw error;

      res.status(200).json({
        success: true,
        message: "Your ticket has been sent successfully!",
        ticket: data ? data[0] : null
      });
    } catch (error) {
      console.error('Error submitting ticket:', error);
      res.status(500).json({
        success: false,
        message: "There was an error submitting your ticket. Please try again."
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}