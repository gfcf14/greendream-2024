import { NextResponse } from 'next/server';
import openDb from '@/utils/db';

export async function GET() {
  const db = openDb();
  const games = db.prepare('SELECT * FROM games ORDER BY id ASC').all();

  return NextResponse.json(games);
}
