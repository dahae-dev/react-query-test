import { useQuery } from 'react-query';

import api from 'services/api';
import { IAsset } from 'types/model';

export interface IParams {
  assetContractAddress: string;
  tokenId: string;
}

const getAsset = async ({
  assetContractAddress,
  tokenId,
}: IParams): Promise<IAsset> => {
  const { data } = await api.get(`/asset/${assetContractAddress}/${tokenId}`);
  return data;
};

const useAsset = (params: IParams) => {
  const {
    assetContractAddress,
    tokenId,
  } = params;
  return useQuery(
    ['Asset', assetContractAddress, tokenId],
    () => getAsset({
      assetContractAddress,
      tokenId,
    }),
  );
};

export { useAsset };


 