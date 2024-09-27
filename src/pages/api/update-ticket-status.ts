// src/pages/api/update-ticket-status.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../db/supabase';

export const POST: APIRoute = async ({ request }) => {
  const { ticketId, newState } = await request.json();

  try {
    const { data, error } = await supabase
      .from('tickets')
      .update({ state: newState })
      .eq('id', ticketId)
      .select();

    if (error) throw error;

    if (data && data.length > 0) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: `Ticket ${ticketId} updated to state ${newState}`,
        updatedTicket: data[0]
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      throw new Error('Ticket not found or not updated');
    }
  } catch (error) {
    console.error('Error updating ticket status:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: (error as Error).message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};