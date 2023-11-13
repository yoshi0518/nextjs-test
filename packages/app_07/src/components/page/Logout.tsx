import { useSession, signOut } from 'next-auth/react';
import React from 'react';

const Logout = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        <button
          onClick={() => signOut()}
          className="rounded bg-gray-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-500/50 hover:opacity-80 active:bg-gray-500 active:opacity-100 active:shadow-none"
        >
          ログアウト
        </button>
      </>
    );
  }
};

export default Logout;
