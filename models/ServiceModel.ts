export interface Picture {
  _id: string;
  name: string;
  url: string;
  size: number;
  height: number;
  ext: string;
  createdAt: string;
  updatedAt: string;
}
export interface ServiceModel {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  pictures: Picture;
}

interface SingleId {
  params: { id: string };
}
export type IdsList = Array<SingleId>;

export interface ParamId {
  id: string;
}
