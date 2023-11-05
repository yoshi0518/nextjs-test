import { writeFile } from 'fs/promises';

import { NextResponse } from 'next/server';

export const GET = () => NextResponse.json({ name: 'John Doe' });

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const filePath = `./public/${file.name}`;
  await writeFile(filePath, buffer);

  console.log({ filePath, formData, file });

  return NextResponse.json({ message: 'success' });
};
