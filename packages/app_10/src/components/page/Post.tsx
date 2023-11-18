'use client';

import usePostRead from '@/hooks/fetch/posts/usePostRead';

const Post = ({ id }: { id: string }) => {
  const { data: response, error, isLoading, isError } = usePostRead(id);

  if (isError) return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading ...</div>;

  return (
    <>
      <div>ID：{response?.data.id}</div>
      <div>UserId：{response?.data.userId}</div>
      <div>Title：{response?.data.title}</div>
      <div>Body：{response?.data.body}</div>
    </>
  );
};

export default Post;
