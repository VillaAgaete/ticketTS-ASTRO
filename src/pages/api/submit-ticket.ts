// src/pages/api/submit-ticket.ts
import type { APIRoute } from 'astro';
import { insertTicket } from '../../lib/db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const ticket = {
      name: formData.get('name') as string,
      department: formData.get('department') as string,
      description: formData.get('description') as string,
      importance: formData.get('importance') as string,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    insertTicket(ticket);

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