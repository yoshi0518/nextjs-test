import { notFound } from 'next/navigation';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPost = async (id: string) => {
  // 確認用に8秒待機
  await new Promise((resolve) => setTimeout(resolve, 8000));

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await response.json();

  if (!post.id) notFound();
  return post;
};

const Post = async ({ id }: { id: string }) => {
  const post = await getPost(id);

  return (
    <>
      <div>id：{post.id}</div>
      <div>userId{post.userId}</div>
      <div>title：{post.title}</div>
      <div>body：{post.body}</div>
    </>
  );
};

export default Post;
