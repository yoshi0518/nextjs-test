import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.sub = token.sub;
        session.user.iat = token.iat;
        session.user.exp = token.exp;
      }
      return session;
    },
    signIn: ({ user }) => {
      // メールアドレスが指定ドメインではない場合はリダイレクト
      if (user.email && user.email.includes('@n-asset.com')) {
        return true;
      } else {
        return 'http://example.com';
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
