import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const POST: APIRoute = async () => {
  try {
    const { error } = await supabase
      .from('tickets')
      .delete()
      .eq('state', 9);

    if (error) throw error;

    return new Response(JSON.stringify({
      success: true,
      message: "All done tickets have been deleted."
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error deleting done tickets:', error);
    return new Response(JSON.stringify({
      success: false,
      message: "There was an error deleting done tickets. Please try again."
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};