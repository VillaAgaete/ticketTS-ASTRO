//lib/db.ts

import Database from 'better-sqlite3';
import type { Database as DatabaseType } from 'better-sqlite3';
import path from 'path';

let db: DatabaseType;

export function getDb() {
  if (!db) {
    const dbPath = path.resolve(process.cwd(), 'tickets.db');
    db = new Database(dbPath);
    db.exec(`
      CREATE TABLE IF NOT EXISTS tickets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        department TEXT,
        description TEXT,
        importance TEXT,
        status TEXT,
        createdAt TEXT
      )
    `);
  }
  return db;
}

export interface Ticket {
  id: number;
  name: string;
  department: string;
  description: string;
  importance: string;
  status: string;
  createdAt: string;
}

export function insertTicket(ticket: Omit<Ticket, 'id'>) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO tickets (name, department, description, importance, status, createdAt)
    VALUES (@name, @department, @description, @importance, @status, @createdAt)
  `);
  return stmt.run(ticket);
}

export function getAllTickets(): Ticket[] {
  const db = getDb();
  return db.prepare('SELECT * FROM tickets').all() as Ticket[];
}

export function updateTicketStatus(id: number, status: string) {
  const db = getDb();
  const stmt = db.prepare('UPDATE tickets SET status = ? WHERE id = ?');
  return stmt.run(status, id);
}