import { NextResponse } from 'next/server';

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  const url = new URL(request.url);

  console.log({
    request,
    url,
    params,
  });

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  return NextResponse.json(await response.json());
};
