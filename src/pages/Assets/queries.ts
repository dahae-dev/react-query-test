import { useInfiniteQuery } from 'react-query';

import api from 'services/api';
import { IAsset } from 'types/model';

export interface IResult {
  assets: Array<IAsset>;
  next: string | null;
  previous: string | null;
}

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


 