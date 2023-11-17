'use client';

import useUserRead from '@/hooks/fetch/users/useUserRead';

const User = ({ id }: { id: string }) => {
  const { data: user, isLoading, isError } = useUserRead(id);

  if (isLoading) return <div>Loading ...</div>;

  if (isError) return <div>Error</div>;

  if (!user) return <div>Not Found</div>;

  return (
    <>
      <div>ID：{user.id}</div>
      <div>Name：{user.name}</div>
      <div>Username：{user.username}</div>
      <div>Email：{user.email}</div>
      <div>Phone：{user.phone}</div>
      <div>Web：{user.website}</div>
    </>
  );
};

export default User;
