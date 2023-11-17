'use client';

import usePostRead from '@/hooks/fetch/posts/usePostRead';

const Post = ({ id }: { id: string }) => {
  const { data: post, isLoading, isError } = usePostRead(id);

  if (isLoading) return <div>Loading ...</div>;

  if (isError) return <div>Error</div>;

  if (!post) return <div>Not Found</div>;

  return (
    <>
      <div>ID：{post.id}</div>
      <div>UserId：{post.userId}</div>
      <div>Title：{post.title}</div>
      <div>Body：{post.body}</div>
    </>
  );
};

export default Post;
