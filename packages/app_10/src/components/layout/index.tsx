'use client';

import clsx from 'clsx';
import { Noto_Sans_JP } from 'next/font/google';
import { SWRConfig } from 'swr';

import Header from './header';

import type { Metadata } from 'next';
import type { SWRConfiguration } from 'swr';
import './globals.css';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans-jp' });

const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false, // 画面フォーカス時の再検証
  revalidateIfStale: false, // マウント時の再検証
  errorRetryInterval: 30000, // エラー再試行の間隔
  errorRetryCount: 3, // 最大エラー再試行回数
};

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Next.js practice...',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="jp" className={clsx(notoSansJp.variable, 'font-sans')}>
      <SWRConfig value={swrConfig}>
        <body>
          <Header />
          {children}
        </body>
      </SWRConfig>
    </html>
  );
};

export default RootLayout;
