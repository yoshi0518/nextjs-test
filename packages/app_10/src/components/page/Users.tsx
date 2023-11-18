'use client';

import Link from 'next/link';

import useUserReads from '@/hooks/fetch/users/useUserReads';

const Users = () => {
  const { data: response, error, isLoading, isError } = useUserReads();

  console.log({
    response,
    error,
    isLoading,
    isError,
  });

  if (isError) return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading ...</div>;

  return (
    <ul>
      {response?.data.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{`ID：${user.id} Name：${user.name}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Users;
