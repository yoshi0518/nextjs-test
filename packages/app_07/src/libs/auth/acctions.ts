'use server';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const getSessionInfo = async () => await getServerSession(authOptions);
