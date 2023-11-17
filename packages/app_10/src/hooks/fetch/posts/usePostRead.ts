import axios from 'axios';
import useSWR from 'swr';

import type { Post } from '@/types';

const cacheKey = ['posts', 'detail'];

const getPost = async (id: string) => {
  const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
};

const usePostRead = (id: string) => {
  const { data, error, mutate } = useSWR([...cacheKey, id], () => getPost(id));

  return {
    data,
    reload: () => mutate(),
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default usePostRead;
