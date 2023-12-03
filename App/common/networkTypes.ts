export interface IProductDetail {
  id: number;
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

// need to set network response type
export interface NetworkResponse={}