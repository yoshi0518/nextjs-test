import axios from 'axios';
import useSWR from 'swr';

import type { User } from '@/types';

const cacheKey = ['users', 'list'];

const getUsers = async () => {
  const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

const useUserReads = () => {
  const { data, error, mutate } = useSWR(cacheKey, getUsers);

  return {
    data,
    reload: () => mutate(),
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useUserReads;
