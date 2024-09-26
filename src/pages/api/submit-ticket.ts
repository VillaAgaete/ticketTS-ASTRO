// src/pages/api/submit-ticket.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../db/supabase';

// Define the Ticket interface
interface Ticket {
  id: number;
  name: string;
  department: string;
  description: string;
  importance: string;
  status: string;
  created_at: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const ticket: Omit<Ticket, 'id'> = {
      name: formData.get('name') as string,
      department: formData.get('department') as string,
      description: formData.get('description') as string,
      importance: formData.get('importance') as string,
      status: 'new',
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('tickets')
      .insert([ticket])
      .select() as { data: Ticket[] | null, error: any };

    if (error) throw error;

    return new Response(JSON.stringify({
      success: true,
      message: "Your ticket has been sent successfully!"
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