import axios, { isAxiosError } from 'axios';
import useSWR from 'swr';

import type { User } from '@/types';

const cacheKey = ['users', 'list'];

const getUsers = async () => {
  console.log('getUsers');
  try {
    const { data, headers, status } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return { data, headers, status };
  } catch (e: unknown) {
    if (isAxiosError(e) && e.response) {
      throw new Error(e.message);
    }
  }
};

const useUserReads = () => {
  const { data, error, mutate } = useSWR(cacheKey, getUsers);

  return {
    data,
    error,
    reload: () => mutate(),
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useUserReads;
