'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Login from './Login';
import Logout from './Logout';

const Home = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {status === 'authenticated' ? (
        <div>
          <p>セッション期限：{session.expires}</p>
          <p>ようこそ、{session.user?.name}さん</p>
          <Image src={session.user?.image ?? ``} alt="image" width={100} height={100} className="rounded-full" />
          <div>
            <Logout />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
