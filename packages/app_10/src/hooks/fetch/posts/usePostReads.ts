import axios, { isAxiosError } from 'axios';
import useSWR from 'swr';

import type { Post } from '@/types';

const cacheKey = ['posts', 'list'];

const getPosts = async () => {
  console.log('getPosts');
  try {
    const { data, headers, status } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return { data, headers, status };
  } catch (e: unknown) {
    if (isAxiosError(e) && e.response) {
      throw new Error(e.message);
    }
  }
};

const usePostReads = () => {
  const { data, error, mutate } = useSWR(cacheKey, getPosts);

  return {
    data,
    error,
    reload: () => mutate(),
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default usePostReads;
