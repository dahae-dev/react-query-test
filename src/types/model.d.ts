export interface IUser {
  username: string;
  user?: IUser;
  profile_img_url?: string;
  address?: string;
  config?: string;
}

export interface IAssetContract {
  address: string;
  [x: string]: any;
}

export interface IAsset {
  id: number;
  token_id: string;
  asset_contract: IAssetContract;
  name: string;
  description: string;
  image_preview_url: string;
  permalink: string;
  last_sale: string;
  owner: IUser;
  creator: IUser;
  [x: string]: any;
}
