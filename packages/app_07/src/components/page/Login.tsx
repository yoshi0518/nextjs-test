import { useSession, signIn } from 'next-auth/react';
import React from 'react';

const Login = () => {
  const { status } = useSession();

  if (status === 'loading') return <div>Loading ...</div>;

  if (status !== 'authenticated') {
    return (
      <>
        <p>あなたはログインしていません</p>
        <button onClick={() => signIn('google', {}, { prompt: 'login' })}>Googleでログイン</button>
      </>
    );
  }

  return null;
};

export default Login;
