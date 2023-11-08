import { headers, cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = () => {
  console.log({
    headers: headers(),
    cookies: cookies(),
  });

  NextResponse.json({ hello: 'world', hoo: 'bar' });
};

export const POST = async (request: Request) => {
  const body = await request.json();

  const headerList = headers();
  const contentType = headerList.get('content-type');
  const header1 = headerList.get('header1');
  const header2 = headerList.get('header2');

  const cookieList = cookies();
  const ga = cookieList.get('_ga');

  console.log({
    body,
    contentType,
    header1,
    header2,
    ga,
  });

  return NextResponse.json({
    body,
    contentType,
    header1,
    header2,
    ga,
  });
};
