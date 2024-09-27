// src/pages/api/delete-done-tickets.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../db/supabase';

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