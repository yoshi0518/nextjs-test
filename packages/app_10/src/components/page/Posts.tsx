'use client';

import Link from 'next/link';

import usePostReads from '@/hooks/fetch/posts/usePostReads';

const Posts = () => {
  const { data: posts, isLoading, isError } = usePostReads();

  if (isLoading) return <div>Loading ...</div>;

  if (isError) return <div>Error</div>;

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{`ID：${post.id} Title：${post.title}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
