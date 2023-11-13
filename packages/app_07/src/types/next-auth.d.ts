import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: {
      sub?: string | null;
      iat?: number | null;
      exp?: number | null;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    sub?: string | null;
    iat?: number | null;
    exp?: number | null;
  }
}
