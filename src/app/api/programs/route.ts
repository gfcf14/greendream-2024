import { NextResponse } from 'next/server';
import openDb from '@/utils/db';

export async function GET() {
  const db = openDb();
  const programs = db.prepare('SELECT * FROM programs ORDER BY id ASC').all();

  return NextResponse.json(programs);
}
