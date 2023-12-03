import {IProductDetail} from '../common/networkTypes';
import {showSnackbar} from '../helper/uiHelpers';
import {ACTION_TYPES} from './actionTypes';
import {FavActionTypes, IFavoritesState} from './types';

const favoritesState: IFavoritesState = {
  items: [],
};

const toggleFavorite = (state: IFavoritesState, payload: IProductDetail) => {
  const itemIndex = state.items.findIndex(item => item.id === payload.id);
  if (itemIndex !== -1) {
    // If the item is already in favorites, remove it
    const updatedFavoriteItems = [...state.items];
    updatedFavoriteItems.splice(itemIndex, 1);
    showSnackbar(`${payload.title} removed from favorites`);
    return {
      ...state,
      items: updatedFavoriteItems,
    };
  } else {
    // If the item is not in favorites, add it
    showSnackbar(`${payload.title} added to favorites`);
    const newItem = payload;
    return {
      ...state,
      items: [...state.items, newItem],
    };
  }
};

export const favoritesReducer = (
  initialState = favoritesState,
  action: FavActionTypes,
) => {
  const {type, payload} = action;
  switch (type) {
    // add to cart
    case ACTION_TYPES.TOGGLE_FAV_ITEM:
      return toggleFavorite(initialState, payload);
    default:
      return initialState;
  }
};
