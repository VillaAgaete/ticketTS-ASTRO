// src/pages/api/get-tickets.ts
import type { APIRoute } from 'astro';
import { getAllTickets } from '../../lib/db';

export const GET: APIRoute = async () => {
  try {
    const allTickets = getAllTickets();
    return new Response(JSON.stringify(allTickets), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error getting tickets:', error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};