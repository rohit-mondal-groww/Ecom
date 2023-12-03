import {Pressable, StyleSheet} from 'react-native';
import {$TSFixNavigation} from '../common/screenTypes';
import {Badge} from '../components/Badge';
import {Icon} from '../components/icon';

export interface ICartWithBadgeProps {
  navigation: $TSFixNavigation;
  badgeValue: number;
  iconColor: string;
}

const CartWithBadge = (props: ICartWithBadgeProps) => {
  const {navigation, badgeValue, iconColor} = props;
  const goToCart = () => navigation.navigate('CartDetail');

  return (
    <Pressable onPress={goToCart} style={styles.cartBadge}>
      <Icon
        iconPack="Ionicons"
        name="bag-outline"
        style={styles.bagIcon}
        size={'lg'}
        color={iconColor}
      />
      {badgeValue > 0 ? <Badge value={badgeValue} /> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bagIcon: {
    height: 24,
    width: 24,
  },
  cartBadge: {position: 'relative'},
});

export default CartWithBadge;
