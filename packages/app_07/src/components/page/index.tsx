'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';


import { getSessionInfo } from '@/libs/auth/acctions';
import NextAuthCheck from '@/libs/auth/NextAuthCheck';

import Logout from './Logout';

const Home = () => {
  const { data: session, status } = useSession();

  const handleGetServerSession = async () => {
    console.log({ session: await getSessionInfo() });
  };

  return (
    <NextAuthCheck>
      {status === 'authenticated' ? (
        <div>
          <h1 className="mb-2">ログイン後ページ</h1>
          <div className="mb-2">
            <Image
              src={session.user?.image ?? ``}
              alt="image"
              width={100}
              height={100}
              className="rounded-full"
              priority
            />
          </div>
          <div className="mb-2">
            <p>セッション期限：{session.expires}</p>
            <p>名前：{session.user?.name}さん</p>
            <p>メールアドレス：{session.user?.email}</p>
          </div>
          <div className="mb-2">
            <Logout />
          </div>
          <div>
            <button
              onClick={handleGetServerSession}
              className="rounded bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-500/50 hover:opacity-80 active:bg-blue-500 active:opacity-100 active:shadow-none"
            >
              セッション情報取得
            </button>
          </div>
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </NextAuthCheck>
  );
};

export default Home;
