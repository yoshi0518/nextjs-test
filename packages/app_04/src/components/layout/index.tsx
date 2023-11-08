import { Noto_Sans_JP } from 'next/font/google';

import Header from './header';

import type { Metadata } from 'next';

import './globals.css';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Next.js practice...',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="jp">
    <body className={notoSansJp.className}>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
