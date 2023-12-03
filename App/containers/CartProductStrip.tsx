import {Dispatch, useState} from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';
import {Image, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ICartItem} from '../common/dataTypes';
import Icon from '../components/icon/icon';
import {
  decreaseCartItemQuantityActionCreator,
  increaseCartItemQuantityActionCreator,
  removeItemFromCartActionCreator,
} from '../redux/actionCreator';

interface ICartProductStripProps {
  product: ICartItem;
  increaseCartItem: (id: number) => void;
  decreaseCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
}

const CartProductStrip = (props: ICartProductStripProps) => {
  const {product, increaseCartItem, decreaseCartItem, removeCartItem} = props;
  const {thumbnail, title, price, quantity, id} = product;
  const decreaseItem = () =>
    quantity > 1 ? decreaseCartItem(id) : handleRemove();
  const increaseItem = () => increaseCartItem(id);

  const [fadeOutAnim] = useState(new Animated.Value(1)); // Initial opacity value

  const handleRemove = () => {
    Animated.timing(fadeOutAnim, {
      toValue: 0,
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start(() => {
      // Callback after animation completes
      removeCartItem(id); // Call the function to remove the product from the screen or state
      fadeOutAnim.setValue(1);
    });
  };

  return (
    <Animated.View
      id={id.toString()}
      style={[styles.productStripContainer, {opacity: fadeOutAnim}]}>
      <Image style={styles.thumbnailImage} source={{uri: thumbnail}} />
      <View style={styles.productTitleNPrice}>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Pressable onPress={decreaseItem} style={styles.bubble}>
          <Icon
            name="minus"
            iconPack="MaterialCommunityIcons"
            size="sm"
            color="#130F26"
          />
        </Pressable>
        <Text style={styles.quantity}>{quantity}</Text>
        <Pressable onPress={increaseItem} style={styles.bubble}>
          <Icon
            name="plus"
            iconPack="MaterialCommunityIcons"
            size="sm"
            color="#130F26"
          />
        </Pressable>
      </View>
    </Animated.View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    increaseCartItem: (id: number) =>
      dispatch(increaseCartItemQuantityActionCreator(id)),
    decreaseCartItem: (id: number) =>
      dispatch(decreaseCartItemQuantityActionCreator(id)),
    removeCartItem: (id: number) =>
      dispatch(removeItemFromCartActionCreator(id)),
  };
};

const styles = StyleSheet.create({
  thumbnailImage: {
    height: 25,
    width: 25,
    borderRadius: 10,
  },
  productStripContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#EBEBFB',
    paddingVertical: 16,
  },
  productTitleNPrice: {
    flexDirection: 'column',
    marginLeft: 28,
  },
  bubble: {
    height: 40,
    width: 40,
    backgroundColor: '#F8F9FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  quantity: {
    fontFamily: 'Manrope',
    fontSize: 14,
    lineHeight: 19,
    marginHorizontal: 12,
    color: '#1E222B',
    fontWeight: '500',
  },
  productTitle: {
    color: '1E222B',
  },
  productPrice: {
    color: '1E222B',
    marginTop: 2,
  },
});

export default connect(null, mapDispatchToProps)(CartProductStrip);
