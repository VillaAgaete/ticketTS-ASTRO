// src/pages/api/update-ticket-status.ts
import type { APIRoute } from 'astro';
import { updateTicketStatus } from '../../lib/db';

export const POST: APIRoute = async ({ request }) => {
  const { ticketId, newStatus } = await request.json();

  try {
    updateTicketStatus(ticketId, newStatus);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: (error as Error).message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};