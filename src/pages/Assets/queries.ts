import { useQuery } from 'react-query';

import api from 'services/api';

import type { IResult } from './types';

const getAssets = async (): Promise<IResult> => {
  const { data } = await api.get('/assets');
  return data;
};

const useAssets = () => {
  return useQuery('Assets', getAssets);
};

export { useAssets };


 