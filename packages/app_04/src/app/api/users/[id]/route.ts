import { headers, cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { User } from '@/types';

export const GET = async (_: undefined, { params }: { params: { id: string } }) => {
  console.log({
    id: params.id,
    headers: headers(),
    cookies: cookies(),
  });

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user: User = await response.json();
  return NextResponse.json(user);
};
