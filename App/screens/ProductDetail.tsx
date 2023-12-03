import {Dispatch, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {ICartItem} from '../common/dataTypes';
import {IProductDetailScreenProps} from '../common/screenTypes';
import {BackButton} from '../components/BackButton';
import {PrimaryButton, SecondaryButton} from '../components/Button';
import {Carousel} from '../components/Carousel';
import Rating from '../components/Rating/rating';
import CartWithBadge from '../containers/CartWithBadge';
import ToggleFavorite from '../containers/ToggleFavorite';
import {
  addProductToCartActionCreator,
  getProductDetailsByIdActionCreator,
} from '../redux/actionCreator';
import {IGlobalState} from '../redux/types';

const ProductDetail = (props: IProductDetailScreenProps) => {
  const {
    navigation,
    route,
    cart,
    currentProductDetail,
    addToCart,
    isProductDetailLoading,
    getProductDetailsById,
  } = props;
  const {itemId} = route.params || {};
  const onAddToCart = () => addToCart({...currentProductDetail, quantity: 1});

  const {
    images = [],
    title,
    price,
    discountPercentage,
    description,
    rating,
  } = currentProductDetail || {};
  const discountAmount = ((discountPercentage * price) / 100).toFixed(2);
  const CustomHeader = () => {
    return (
      <View style={styles.header}>
        <BackButton navigation={navigation} />
        <CartWithBadge
          navigation={navigation}
          badgeValue={cart.length}
          iconColor={'black'}
        />
      </View>
    );
  };

  useEffect(() => {
    getProductDetailsById(itemId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isProductDetailLoading) {
    return (
      <ActivityIndicator size="large" color="#2A4BA0" style={styles.loading} />
    );
  }
  return (
    <>
      <CustomHeader />
      <ScrollView style={styles.container}>
        <Text style={styles.productTitle}>{title}</Text>
        {rating ? (
          <Rating
            rating={rating}
            onRatingPress={() => {}}
            containerStyle={styles.ratingContainer}
          />
        ) : null}
        {images.length > 0 ? (
          <Carousel
            containerStyle={styles.carouselContainer}
            noOfItems={images?.length || 0}>
            {images.map((item: string) => {
              return (
                <View style={styles.slide}>
                  <Image source={{uri: item}} style={styles.image} />
                  <View style={styles.productDetailFavIconContainer}>
                    <ToggleFavorite
                      product={currentProductDetail}
                      iconSize="md"
                    />
                  </View>
                </View>
              );
            })}
          </Carousel>
        ) : null}
        <View style={styles.otherDetails}>
          <View style={styles.priceDetails}>
            <Text style={styles.price}>${price}</Text>
            <View style={styles.discountPill}>
              <Text style={styles.discountAmount}>${discountAmount} OFF</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <SecondaryButton
              title="Add to Cart"
              onPress={onAddToCart}
              containerStyle={[styles.btn, styles.secondaryBtn]}
            />
            <PrimaryButton
              title="Buy now"
              onPress={() => {}}
              containerStyle={styles.btn}
            />
          </View>
          <Text style={styles.detailTextHeader}>Details</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => {
  return {
    currentProductDetail: state.common.currentProductDetail || {},
    cart: state.order.cart.items || [],
    isProductDetailLoading: state.common.isFetchingProductDetailsById,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    getProductDetailsById: (itemId: number) =>
      dispatch(getProductDetailsByIdActionCreator(itemId)),
    addToCart: (cartItem: ICartItem) =>
      dispatch(addProductToCartActionCreator(cartItem)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
    backgroundColor: '#ffffff',
  },
  carouselContainer: {
    height: 207,
    position: 'relative',
    marginTop: 32,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FB',
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  productDetailFavIconContainer: {
    position: 'absolute',
    height: 58,
    width: 58,
    borderRadius: 30,
    right: 20,
    top: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTitle: {
    color: '#1E222B',
    fontWeight: '800',
    fontSize: 50,
    fontFamily: 'Manrope',
    marginLeft: 20,
    marginTop: 20,
  },
  price: {
    color: '#2A4BA0',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Manrope',
    lineHeight: 24,
  },
  otherDetails: {
    marginHorizontal: 20,
    marginVertical: 24,
  },
  btnContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  btn: {
    flex: 1,
  },
  secondaryBtn: {
    marginRight: 20,
  },
  detailTextHeader: {
    color: '#1E222B',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Manrope',
    lineHeight: 24,
  },
  description: {
    color: '#8891A5',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Manrope',
    lineHeight: 24,
    marginTop: 12,
  },
  discountPill: {
    backgroundColor: '#2A4BA0',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 70,
    marginLeft: 8,
  },
  discountAmount: {
    fontSize: 12,
    fontFamily: 'Manrope',
    fontWeight: '400',
    lineHeight: 16,
    color: '#ffffff',
  },
  priceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingContainer: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  loading: {
    alignSelf: 'center',
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
