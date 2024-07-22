// src/pages/api/delete-done-tickets.ts
import type { APIRoute } from 'astro';
import { getDb } from '../../lib/db';

export const POST: APIRoute = async () => {
  try {
    const db = getDb();
    const stmt = db.prepare('DELETE FROM tickets WHERE status = ?');
    const result = stmt.run('done');

    return new Response(JSON.stringify({
      success: true,
      message: `${result.changes} done tickets have been deleted.`
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