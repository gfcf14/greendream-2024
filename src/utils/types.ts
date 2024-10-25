export interface Article {
  description: string;
  image: string;
  title: string;
  url: string;
}

export interface Asset {
  description: string;
  details: string;
  icon: string;
  id: number;
  name: string;
  link: string;
}

export interface LatestAsset {
  icon: string;
  id?: number;
  link?: string;
  name: string;
  type: 'program' | 'game' | 'article';
}
