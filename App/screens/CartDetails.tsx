import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ICartDetailScreenProps} from '../common/screenTypes';
import CartProductStrip from '../containers/CartProductStrip';
import {IGlobalState} from '../redux/types';
import {BackButton} from '../components/BackButton';
import {PrimaryButton} from '../components/Button';
import {ICartItem} from '../common/dataTypes';

const CartDetails = (props: ICartDetailScreenProps) => {
  const {cart, navigation} = props;
  const {items} = cart;
  const CustomHeader = () => (
    <View style={styles.headerContainer}>
      <BackButton navigation={navigation} />
      <Text style={styles.headerText}>Shopping cart ({cart.items.length})</Text>
    </View>
  );
  const renderItem = ({item}: {item: ICartItem}) => {
    return <CartProductStrip product={item} />;
  };
  const renderEmptyCart = () => (
    <Text style={styles.emptyText}>Add Items to your cart to proceed</Text>
  );

  const CartAmountContainer = () => {
    // can convert this into a 'Row' component
    return (
      <View style={styles.cartAmountContainer}>
        <View style={styles.cartAmountDetails}>
          <View style={styles.row}>
            <Text style={styles.firstCell}>Subtotal</Text>
            <Text style={styles.secondCell}>${cart.subTotalAmount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.firstCell}>Delivery</Text>
            <Text style={styles.secondCell}>${cart.deliveryCharge}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.firstCell}>Total</Text>
            <Text style={styles.secondCell}>${cart.totalAmount}</Text>
          </View>
        </View>
        <View>
          <PrimaryButton
            title="Proceed to checkout"
            containerStyle={styles.btnContainer}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.cartScreenContainer}>
      <CustomHeader />
      <FlashList
        data={items || []}
        renderItem={renderItem}
        estimatedItemSize={100}
        ListEmptyComponent={renderEmptyCart}
      />
      {items.length > 0 ? <CartAmountContainer /> : null}
    </View>
  );
};

const mapStateToProps = (state: IGlobalState) => {
  return {
    cart: state.order.cart,
  };
};

const styles = StyleSheet.create({
  cartScreenContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 24,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Manrope',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    marginLeft: 20,
    color: '#1E222B',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cartAmountContainer: {
    backgroundColor: '#F8F9FB',
    borderRadius: 30,
    padding: 20,
    marginHorizontal: 10,
  },
  btnContainer: {
    marginTop: 30,
    marginBottom: 12,
  },
  firstCell: {
    color: '#616A7D',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Manrope',
    lineHeight: 20,
  },
  secondCell: {
    color: '#1E222B',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Manrope',
    lineHeight: 20,
  },
  cartAmountDetails: {
    paddingHorizontal: 20,
  },
  emptyText: {
    margin: 20,
    alignSelf: 'center',
  },
});

export default connect(mapStateToProps, null)(CartDetails);
