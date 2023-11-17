'use client';

import Link from 'next/link';

import useUserReads from '@/hooks/fetch/users/useUserReads';

const Users = () => {
  const { data: users, isLoading, isError } = useUserReads();

  if (isLoading) return <div>Loading ...</div>;

  if (isError) return <div>Error</div>;

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{`ID：${user.id} Name：${user.name}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Users;
