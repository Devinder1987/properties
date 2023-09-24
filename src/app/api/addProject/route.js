import { NextResponse } from 'next/server';
export async function POST(request) {
  const data = await request.json();
  return NextResponse.json({ message: data }, { status: 201 });
}
