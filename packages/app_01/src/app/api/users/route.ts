import { headers, cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name');
  const headersList = headers();
  const cookieStore = cookies();

  console.log({ request, url, name, headersList, cookieStore });

  console.log('=== Send Request ===');

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return NextResponse.json(await response.json());
};
