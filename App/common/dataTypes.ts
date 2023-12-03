import {IProductDetail} from './networkTypes';

export interface ICartItem extends IProductDetail {
  quantity: number;
}
