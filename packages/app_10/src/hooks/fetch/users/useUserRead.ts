import axios, { isAxiosError } from 'axios';
import useSWR from 'swr';

import type { User } from '@/types';

const cacheKey = ['users', 'detail'];

const getUser = async (id: string) => {
  console.log('getUser');
  try {
    const { data, headers, status } = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
    return { data, headers, status };
  } catch (e: unknown) {
    if (isAxiosError(e) && e.response) {
      throw new Error(e.message);
    }
  }
};

const useUserRead = (id: string) => {
  const { data, error, mutate } = useSWR([...cacheKey, id], () => getUser(id));

  return {
    data,
    error,
    reload: () => mutate(),
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useUserRead;
