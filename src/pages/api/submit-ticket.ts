// src/pages/api/submit-ticket.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../db/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    const ticket = await request.json();
    
    // Add the state field
    ticket.state = 0;  // Set initial state to 0 for new tickets

    const { data, error } = await supabase
      .from('tickets')
      .insert([ticket])
      .select();

    if (error) throw error;

    return new Response(JSON.stringify({
      success: true,
      message: "Your ticket has been sent successfully!",
      ticket: data ? data[0] : null
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error submitting ticket:', error);
    return new Response(JSON.stringify({
      success: false,
      message: "There was an error submitting your ticket. Please try again."
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};