export interface ImageIF {
  name: string;
  src: string;
  price: string;
}

export interface SizesIF {
  [key: string]: number;
}

export interface CartIF {
  name: string;
  price: string;
  sizes: SizesIF;
  src: string;
}
