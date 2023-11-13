import { Noto_Sans_JP } from 'next/font/google';

import NextAuthProvider from '@/libs/auth/NextAuthProvider';

import type { Metadata } from 'next';


import './globals.css';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Next.js practice...',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="jp">
      <body className={notoSansJp.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
