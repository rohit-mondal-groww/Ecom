import React, {Dispatch} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Image, View} from 'react-native';
import {connect} from 'react-redux';
import {ICartItem} from '../../common/dataTypes';
import {IProductDetail} from '../../common/networkTypes';
import ToggleFavorite from '../../containers/ToggleFavorite';
import {addProductToCartActionCreator} from '../../redux/actionCreator';
import Icon from '../icon/icon';

export interface IProductCardProps {
  onProductCardPress: (id: number) => void;
  addToCart: (cartItem: ICartItem) => void;
  product: IProductDetail;
}

const ProductCard = (props: IProductCardProps) => {
  const {onProductCardPress, product, addToCart} = props;
  const {thumbnail, price, title, id} = product;

  const onPress = () => onProductCardPress(id);
  const onAddToCart = () => addToCart({...product, quantity: 1});
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.favIconContainer}>
        <ToggleFavorite product={product} iconSize="sm" />
      </View>
      <Image source={{uri: thumbnail}} style={styles.thumbnailImage} />
      <View style={styles.productConciseData}>
        <Text style={styles.price}>${price}</Text>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.addIcon}>
        <Icon
          size="sm"
          iconPack="MaterialCommunityIcons"
          name="plus"
          color="#FFFFFF"
          onPress={onAddToCart}
        />
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    addToCart: (cartItem: ICartItem) =>
      dispatch(addProductToCartActionCreator(cartItem)),
  };
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 180,
    width: 160,
    backgroundColor: '#F8F9FB',
    borderRadius: 10,
    margin: 16,
  },
  thumbnailImage: {
    height: 68,
    width: 68,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  favIconContainer: {
    position: 'absolute',
    top: 10,
    left: 15,
  },
  price: {
    color: '#1E222B',
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
  },
  title: {
    color: '#616A7D',
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 4,
  },
  productConciseData: {
    padding: 16,
    paddingTop: 20,
    // position:'relative',
    width: 140,
  },
  addIcon: {
    backgroundColor: '#2A4BA0',
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    bottom: 50,
  },
});

export default connect(null, mapDispatchToProps)(ProductCard);
