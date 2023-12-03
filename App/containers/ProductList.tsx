import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {IAllProducts, IProductDetail} from '../common/networkTypes';
import ProductCard from '../components/ProductCard/ProductCard';
import {IGlobalState} from '../redux/types';
import {FlashList} from '@shopify/flash-list';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {$TSFixNavigation, $TSFixRoute} from '../common/screenTypes';
import {toggleFavoriteActionCreator} from '../redux/actionCreator';

interface IProductListProps {
  products: IAllProducts;
  navigation: $TSFixNavigation;
  route: $TSFixRoute;
  isProductListLoading: boolean;
}

const ProductList = (props: IProductListProps) => {
  const {products, isProductListLoading} = props;
  const onProductCardPress = (id: number) =>
    props.navigation.navigate('ProductDetail', {itemId: id});
  const renderItem = ({item}: {item: IProductDetail}) => {
    return (
      <ProductCard product={item} onProductCardPress={onProductCardPress} />
    );
  };
  if (isProductListLoading) {
    return <ActivityIndicator size="large" color="#2A4BA0" />;
  } else {
    return (
      <FlashList
        keyExtractor={(item: IProductDetail) => item.id.toString()}
        data={products || []}
        renderItem={renderItem}
        // onEndReached={onEndReached} // for pagination
        alwaysBounceVertical={false}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={100}
        style={styles.listContainer}
        numColumns={2}
      />
    );
  }
};

const mapStateToProps = (state: IGlobalState) => {
  return {
    products: state.common.products.data || [],
    isProductListLoading: state.common.isFetchingAllProducts,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    toggleFavorite: (product: IProductDetail) =>
      dispatch(toggleFavoriteActionCreator(product)),
  };
};
const styles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
