'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

import type { Post } from '@/types';

const getPosts = async () => {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const createPost = async (post: Post) => {
  const response = await axios.post<Post>('https://jsonplaceholder.typicode.com/posts', post, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log({ response });
};

const Posts = () => {
  const [post, setPost] = useState<Post>({ id: 100, userId: 20, title: '', body: '' });

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    // キャッシュ保持する際のキー
    queryKey: ['post', 'list'],
    // データ取得関数
    queryFn: getPosts,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createPost(post);
  };

  if (isLoading) return <div>Loading ...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            [{post.id}] {post.title} {post.userId}
          </li>
        ))}
      </ul>
      <div>
        <h2>新規追加</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title：</label>
            <input name="title" value={post.title} onChange={handleChange} className="border" />
          </div>
          <div>
            <label>Body：</label>
            <input name="body" value={post.body} onChange={handleChange} className="border" />
          </div>
          <div>
            <button type="submit">追加</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Posts;
