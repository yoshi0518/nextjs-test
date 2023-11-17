'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { User } from '@/types';

const getUsers = async () => {
  const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    // キャッシュ保持する際のキー
    queryKey: ['user', 'list'],
    // データ取得関数
    queryFn: getUsers,
  });

  if (isLoading) return <div>Loading ...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>
          [{user.id}] {user.name} {user.email}
        </li>
      ))}
    </ul>
  );
};

export default Users;
