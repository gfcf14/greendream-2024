import { NextResponse } from 'next/server';
import openDb from '@/utils/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const db = openDb();
  const { id } = params;
  const game = db.prepare('SELECT * FROM games WHERE id = ?').get(id);

  if (!game) {
    return NextResponse.json({ error: 'Game not found' }, { status: 404 });
  }

  return NextResponse.json(game);
}
