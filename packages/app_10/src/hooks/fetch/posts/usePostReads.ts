import axios from 'axios';
import useSWR from 'swr';

import type { Post } from '@/types';

const cacheKey = ['posts', 'list'];

const getPosts = async () => {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const usePostReads = () => {
  const { data, error, mutate } = useSWR(cacheKey, getPosts);

  return {
    data,
    reload: () => mutate(),
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default usePostReads;
