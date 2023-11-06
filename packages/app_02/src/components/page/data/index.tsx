import { Suspense } from 'react';

import Posts from '@/components/usecase/Posts';
import Users from '@/components/usecase/Users';

import Loading from './loading';

const Data = () => (
  <>
    <h1>Dataページ</h1>
    <h2 className="mt-4">ユーザー一覧</h2>
    <Suspense fallback={<Loading />}>
      <Users />
    </Suspense>

    <h2 className="mt-4">投稿一覧</h2>
    <Suspense fallback={<div>Loading ...</div>}>
      <Posts />
    </Suspense>
  </>
);

export default Data;
