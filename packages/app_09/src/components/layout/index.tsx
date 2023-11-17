'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import clsx from 'clsx';
import { Noto_Sans_JP } from 'next/font/google';

import Header from './header';

import type { Metadata } from 'next';
import './globals.css';

const queryClient = new QueryClient();

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' });

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Next.js practice...',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="jp" className={clsx(notoSansJp.variable, 'font-sans')}>
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
