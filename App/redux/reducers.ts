import {combineReducers} from 'redux';
import {cartReducer} from './cartReducer';
import {favoritesReducer} from './favoritesReducer';
import {productReducer} from './productReducer';

export const combinedReducers = combineReducers({
  common: productReducer,
  order: cartReducer,
  favorites: favoritesReducer,
});
