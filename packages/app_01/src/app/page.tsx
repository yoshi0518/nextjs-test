import Link from 'next/link';

import Counter from './Counter';
// import UserList from './users/UserList';
import File from './file/page';

const Home: React.FC = () => (
  <div className="flex flex-col items-center">
    <Link href="/about" className="underline">
      About
    </Link>
    <Link href="/users" className="underline">
      Users
    </Link>
    <h1 className="text-2xl">Home</h1>
    <Counter>
      <h1>ユーザー一覧</h1>
      {/* <UserList /> */}
    </Counter>
    <File />
  </div>
);

export default Home;
