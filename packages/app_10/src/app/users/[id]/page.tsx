import Link from 'next/link';

import User from '@/components/page/User';

const Page = ({ params }: { params: { id: string } }) => (
  <>
    <h1>ユーザー詳細</h1>
    <User id={params.id} />
    <Link href="/users">戻る</Link>
  </>
);

export default Page;
