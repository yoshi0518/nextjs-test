import Link from 'next/link';
import { Suspense } from 'react';

import User from '@/components/usecase/User';

const UserDetail = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <h1>ユーザー詳細</h1>
      <Suspense fallback={<div>Loading ...</div>}>
        <User id={params.id} />
      </Suspense>
      <div>
        <Link href="/data">戻る</Link>
      </div>
    </>
  );
};

export default UserDetail;
