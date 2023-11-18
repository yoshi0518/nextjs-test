import axios, { isAxiosError } from 'axios';
import useSWR from 'swr';

import type { Post } from '@/types';

const cacheKey = ['posts', 'detail'];

const getPost = async (id: string) => {
  console.log('getPost');
  try {
    const { data, headers, status } = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return { data, headers, status };
  } catch (e: unknown) {
    if (isAxiosError(e) && e.response) {
      throw new Error(e.message);
    }
  }
};

const usePostRead = (id: string) => {
  const { data, error, mutate } = useSWR([...cacheKey, id], () => getPost(id));

  return {
    data,
    error,
    reload: () => mutate(),
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default usePostRead;
