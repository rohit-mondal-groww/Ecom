import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {IGlobalState} from '../redux/types';
import {connect} from 'react-redux';
import {ICartItem} from '../common/dataTypes';
import {$TSFixNavigation} from '../common/screenTypes';
import CartWithBadge from './CartWithBadge';
import Icon from '../components/icon/icon';

interface IHeaderContentProps {
  cart: Array<ICartItem>;
  navigation: $TSFixNavigation;
}

const HeaderContent = (props: IHeaderContentProps) => {
  const {cart, navigation} = props;
  return (
    <>
      <View style={styles.topHeader}>
        <Text style={styles.headerText}>Hey, Rahul</Text>
        <CartWithBadge
          badgeValue={cart.length}
          navigation={navigation}
          iconColor="#FFFFFF"
        />
      </View>
      <SearchBar
        searchString=""
        placeholderText="Search products or store"
        onChangeText={() => {}}
        onClearInput={() => {}}
        onPressIn={() => {}}
        onSubmitInput={() => {}}
      />
      <View style={styles.deliveryDetailsContainer}>
        <View>
          {/* can add these copies to a centralised file */}
          <Text style={styles.subHeaderKey}>DELIVERY TO</Text>
          <View style={styles.subHeaderValueContainer}>
            {/* can drive the data through store */}
            <Text style={styles.subHeaderValue}>Green Way 3000, Sylhet</Text>
            <Icon
              iconPack="MaterialCommunityIcons"
              name="chevron-down"
              color="#B2BBCE"
              size="sm"
            />
          </View>
        </View>
        <View>
          {/* can add these copies to a centralised file */}
          <Text style={styles.subHeaderKey}>WITHIN</Text>
          <View style={styles.subHeaderValueContainer}>
            {/* can drive the data through store */}
            <Text style={styles.subHeaderValue}>1 hour</Text>
            <Icon
              iconPack="MaterialCommunityIcons"
              name="chevron-down"
              color="#B2BBCE"
              size="sm"
            />
          </View>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => {
  return {
    cart: state.order.cart.items || [],
  };
};

const styles = StyleSheet.create({
  headerText: {
    color: '#F8F9FB',
    fontFamily: 'Manrope',
    fontSize: 22,
    fontWeight: '600',
    fontStyle: 'normal',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  subHeaderKey: {
    color: '#F8F9FB',
    fontSize: 11,
    fontWeight: '800',
    lineHeight: 15,
    fontFamily: 'Manrope',
    opacity: 0.5,
  },
  subHeaderValue: {
    color: '#F8F9FB',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 15,
    fontFamily: 'Manrope',
    marginRight: 4,
  },
  subHeaderValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  deliveryDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});

export default connect(mapStateToProps, null)(HeaderContent);
