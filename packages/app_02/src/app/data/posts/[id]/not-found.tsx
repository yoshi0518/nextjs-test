import Link from 'next/link';

const NotFound = () => (
  <>
    <div className="p-2">IDが存在しません。</div>
    <div>
      <Link href="/data">戻る</Link>
    </div>
  </>
);

export default NotFound;
