import { NextResponse } from 'next/server';
import openDb from '@/utils/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const db = openDb();
  const { id } = params;
  const program = db.prepare('SELECT * FROM programs WHERE id = ?').get(id);

  if (!program) {
    return NextResponse.json({ error: 'Program not found' }, { status: 404 });
  }

  return NextResponse.json(program);
}
