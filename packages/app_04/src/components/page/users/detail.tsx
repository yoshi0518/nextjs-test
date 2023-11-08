'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import type { User } from '@/types';

const getUser = async (id: string): Promise<User> => {
  const response = await fetch(`http://localhost:3000/api/users/${id}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
};

const PageUserDetail = ({ id }: { id: string }) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const execGetUser = async () => {
      setUser(await getUser(id));
    };

    execGetUser();
  }, [id]);

  return (
    <>
      <h1>ユーザー詳細</h1>
      <div>ID：{user.id}</div>
      <div>Name：{user.name}</div>
      <div>Username：{user.username}</div>
      <div>Email：{user.email}</div>
      <div>Phone：{user.phone}</div>
      <div>Web：{user.website}</div>
      <div>
        <Link href="/users" className="underline">
          戻る
        </Link>
      </div>
    </>
  );
};

export default PageUserDetail;
