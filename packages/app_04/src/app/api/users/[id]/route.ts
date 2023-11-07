import { headers, cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  console.log({
    url: new URL(request.url),
    headers: headers(),
    cookies: cookies(),
    params,
  });

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  return NextResponse.json(await response.json());
};
