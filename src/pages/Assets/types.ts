export interface IUser {
  username: string;
  user?: IUser;
  profile_img_url?: string;
  address?: string;
  config?: string;
}

export interface IAsset {
  id: number;
  token_id: string;
  name: string;
  permalink: string;
  image_preview_url: string;
  owner: IUser;
  creator: IUser;
  [x: string]: any;
}

export interface IResult {
  assets: Array<IAsset>;
  next: string | null;
  previous: string | null;
}