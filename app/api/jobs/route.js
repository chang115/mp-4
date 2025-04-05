import { NextResponse } from 'next/server';

const JOOBLE_API_URL = 'https://jooble.org/api/';
const JOOBLE_API_KEY = process.env.JOOBLE_API_KEY;

export async function POST(req) {
  const { keywords, location } = await req.json();

  try {
    const response = await fetch(`${JOOBLE_API_URL}${JOOBLE_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keywords, location }),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      return NextResponse.json(
        { error: data.error || 'Failed to fetch jobs' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: 'API is unavailable. Please try again later.' },
      { status: 500 }
    );
  }
}
