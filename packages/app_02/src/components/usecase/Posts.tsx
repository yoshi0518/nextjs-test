type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async () => {
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
          <li key={post.id}>{`PostId：${post.id} Title：${post.title}`}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
