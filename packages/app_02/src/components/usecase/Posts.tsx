import Link from 'next/link';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async () => {
  // 確認用に8秒待機
  await new Promise((resolve) => setTimeout(resolve, 8000));

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();
  return posts;
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/data/posts/${post.id}`}>{`PostId：${post.id} Title：${post.title}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
