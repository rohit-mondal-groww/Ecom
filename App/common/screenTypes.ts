import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Route} from '@react-navigation/native';
import {ICartState} from '../redux/types';
import {IProductDetail} from './networkTypes';
import {ICartItem} from './dataTypes';

export type $TSFixNavigation<Params extends {} = {}> =
  NativeStackNavigationProp<Params>;

export type $TSFixRoute<Params extends {} | undefined = {}> = Route<
  string,
  Params
>;

export interface ICartDetailScreenProps {
  navigation: $TSFixNavigation;
  route: $TSFixRoute;
  cart: ICartState;
}

export interface IHomeScreenProps {
  navigation: $TSFixNavigation;
  route: $TSFixRoute;
  getAllProducts: () => void;
}

export interface IProductDetailScreenProps {
  navigation: $TSFixNavigation;
  route: $TSFixRoute;
  getProductDetailsById: (itemId: number) => void;
  currentProductDetail: IProductDetail;
  cart: Array<ICartItem>;
  addToCart: (cartItem: ICartItem) => void;
  isProductDetailLoading: boolean;
}
