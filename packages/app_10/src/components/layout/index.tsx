import clsx from 'clsx';
import { Noto_Sans_JP } from 'next/font/google';

import Header from './header';

import type { Metadata } from 'next';
import './globals.css';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' });

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Next.js practice...',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="jp" className={clsx(notoSansJp.variable, 'font-sans')}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
