import { headers, cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { User } from '@/types';

const getUsers = async (keyword: string | null) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  if (!keyword) return users;

  return users.filter((user) => user.name.includes(keyword));
};

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const params: { [key: string]: string | null } = {};
  for (const key of searchParams.keys()) params[key] = searchParams.get(key);

  console.log({
    params,
    headers: headers(),
    cookies: cookies(),
  });

  return NextResponse.json(await getUsers('keyword' in params ? params.keyword : null));
};

export const POST = async (request: Request) => {
  const body = await request.json();

  console.log({
    body,
    headers: headers(),
    cookies: cookies(),
  });

  return NextResponse.json({ body });
};
