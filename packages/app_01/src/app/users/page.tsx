import Link from 'next/link';
import { Suspense } from 'react';

import Loading from './loading';
import UserList from './UserList';

const Page = async () => {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザー一覧</h1>
      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
      <div>
        <Link href="/" className="underline">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
