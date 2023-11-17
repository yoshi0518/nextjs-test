import Link from 'next/link';

import Post from '@/components/page/Post';

const Page = ({ params }: { params: { id: string } }) => (
  <>
    <h1>投稿詳細</h1>
    <Post id={params.id} />
    <Link href="/posts">戻る</Link>
  </>
);

export default Page;
