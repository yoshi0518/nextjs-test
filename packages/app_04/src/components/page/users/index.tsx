'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import type { User } from '@/types';

const getUsers = async (keyword: string | undefined = undefined): Promise<User[]> => {
  const response = await fetch(`http://localhost:3000/api/users${keyword ? '?keyword=' + keyword : ''}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
};

const PageUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [keyword, setKeyword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

  const handleSearch = async () => {
    console.log({ keyword });
    setUsers(await getUsers(keyword));
  };

  const handleReset = async () => {
    setKeyword('');
    setUsers(await getUsers());
  };

  useEffect(() => {
    const execGetUsers = async () => {
      setUsers(await getUsers());
    };

    execGetUsers();
  }, []);

  return (
    <>
      <h1>ユーザー一覧</h1>
      <div>
        <label>キーワード：</label>
        <input value={keyword} onChange={handleChange} className="border" />
        <button onClick={handleSearch}>検索</button>
        <button onClick={handleReset}>解除</button>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>{`ID：${user.id} Name：${user.name}`}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PageUsers;
