export interface IProductDetail {
  id: boolean;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export type IAllProducts = Array<IProductDetail>;

export interface IAllProductsResponse {
  products: IAllProducts;
  total: number;
  skip: number;
  limit: number;
}

export interface NetworkResponse={}