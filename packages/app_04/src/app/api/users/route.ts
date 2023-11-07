import { NextResponse } from 'next/server';

export const GET = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return NextResponse.json(await response.json());
};
