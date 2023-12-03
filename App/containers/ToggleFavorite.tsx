import {Dispatch} from 'react';
import {connect} from 'react-redux';
import {IProductDetail} from '../common/networkTypes';
import {Icon} from '../components/icon';
import {toggleFavoriteActionCreator} from '../redux/actionCreator';
import {IGlobalState} from '../redux/types';

interface IToggleFavorite {
  toggleFavorite: (product: IProductDetail) => void;
  favorites: Array<IProductDetail>;
  product: IProductDetail;
  iconSize: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg';
}

const ToggleFavorite = (props: IToggleFavorite) => {
  const {toggleFavorite, favorites, product, iconSize} = props;
  const {id} = product;

  const isAddedToFav = favorites?.findIndex(item => item.id === id) !== -1;
  const onToggleFav = () => toggleFavorite(product);

  return (
    <Icon
      size={iconSize}
      iconPack="MaterialCommunityIcons"
      name={isAddedToFav ? 'heart' : 'heart-outline'}
      color={isAddedToFav ? '#FF8181' : '#323743'}
      onPress={onToggleFav}
    />
  );
};

const mapStateToProps = (state: IGlobalState) => {
  return {
    favorites: state.favorites.items || [],
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    toggleFavorite: (product: IProductDetail) =>
      dispatch(toggleFavoriteActionCreator(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavorite);
