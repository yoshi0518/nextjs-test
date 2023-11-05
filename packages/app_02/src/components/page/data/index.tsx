import Posts from '@/components/usecase/Posts';
import Users from '@/components/usecase/Users';

const Data = () => (
  <>
    <h1>Dataページ</h1>
    <h2 className="mt-4">ユーザー一覧</h2>
    <Users />
    <h2 className="mt-4">投稿一覧</h2>
    <Posts />
  </>
);

export default Data;
