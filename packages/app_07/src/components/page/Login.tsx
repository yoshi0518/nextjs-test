'use client';

import { useSession, signIn } from 'next-auth/react';
import React from 'react';

import { getSessionInfo } from '@/libs/auth/acctions';

const Login = () => {
  const { status } = useSession();

  const handleLogin = () => signIn('google', { callbackUrl: '/' }, { prompt: 'login' });

  const handleGetServerSession = async () => {
    console.log({ session: await getSessionInfo() });
  };

  if (status === 'loading') return <div>Loading ...</div>;

  return (
    <>
      <h1 className="mb-2">Googleログイン</h1>
      <div className="mb-2">
        <button
          onClick={handleLogin}
          className="rounded bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-500/50 hover:opacity-80 active:bg-blue-500 active:opacity-100 active:shadow-none"
        >
          ログイン
        </button>
      </div>
      <div>
        <button
          onClick={handleGetServerSession}
          className="rounded bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-500/50 hover:opacity-80 active:bg-blue-500 active:opacity-100 active:shadow-none"
        >
          セッション情報取得
        </button>
      </div>
    </>
  );
};

export default Login;
