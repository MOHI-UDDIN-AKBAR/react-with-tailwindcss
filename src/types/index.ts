export type NavLinksType = {
  href: string;
  label: string;
};

export type Statistic = {
  value: string;
  label: string;
};

export type ShoeType = {
  thumbnail: string;
  bigShoe: string;
};

export type Product = {
  imgURL: string;
  name: string;
  price: string;
};

export type Service = {
  imgURL: string;
  label: string;
  subtext: string;
};

export type Review = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};
