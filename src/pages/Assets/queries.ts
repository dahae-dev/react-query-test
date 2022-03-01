import { useInfiniteQuery } from 'react-query';

import api from 'services/api';

import type { IResult } from './types';

const getAssets = async ({ pageParam = '' }): Promise<IResult> => {
  const { data } = await api.get(`/assets?cursor=${pageParam}`);
  return data;
};

const useAssets = () => {
  return useInfiniteQuery('Assets', getAssets, {
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export { useAssets };


 