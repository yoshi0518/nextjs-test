import { useSession, signOut } from 'next-auth/react';
import React from 'react';

const Logout = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        <button onClick={() => signOut()}>ログアウト</button>
      </>
    );
  }
};

export default Logout;
