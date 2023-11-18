'use client';

import Link from 'next/link';

import usePostReads from '@/hooks/fetch/posts/usePostReads';

const Posts = () => {
  const { data: response, error, isLoading, isError } = usePostReads();

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
      {response?.data.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{`ID：${post.id} Title：${post.title}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
