import Link from 'next/link';
import { Suspense } from 'react';

import Post from '@/components/usecase/Post';

const PostDetail = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <h1>投稿詳細</h1>
      <Suspense fallback={<div>Loading ...</div>}>
        <Post id={params.id} />
      </Suspense>
      <div>
        <Link href="/data">戻る</Link>
      </div>
    </>
  );
};

export default PostDetail;
