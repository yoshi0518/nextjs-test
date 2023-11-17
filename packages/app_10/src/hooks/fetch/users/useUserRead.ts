import axios from 'axios';
import useSWR from 'swr';

import type { User } from '@/types';

const cacheKey = ['users', 'detail'];

const getUser = async (id: string) => {
  const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.data;
};

const useUserRead = (id: string) => {
  const { data, error, mutate } = useSWR([...cacheKey, id], () => getUser(id));

  return {
    data,
    reload: () => mutate(),
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useUserRead;
