'use client';

import useUserRead from '@/hooks/fetch/users/useUserRead';

const User = ({ id }: { id: string }) => {
  const { data: response, error, isLoading, isError } = useUserRead(id);

  if (isError) return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading ...</div>;

  return (
    <>
      <div>ID：{response?.data.id}</div>
      <div>Name：{response?.data.name}</div>
      <div>Username：{response?.data.username}</div>
      <div>Email：{response?.data.email}</div>
      <div>Phone：{response?.data.phone}</div>
      <div>Web：{response?.data.website}</div>
    </>
  );
};

export default User;
