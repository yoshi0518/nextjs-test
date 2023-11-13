'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';

const NextAuthCheck = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => router.push('/login'),
  });

  if (status === 'loading') return 'loading ...';

  return children;
};

export default NextAuthCheck;
