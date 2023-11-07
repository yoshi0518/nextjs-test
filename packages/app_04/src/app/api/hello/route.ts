import { NextResponse } from 'next/server';

export const GET = () => NextResponse.json({ name: 'John Doe' });
