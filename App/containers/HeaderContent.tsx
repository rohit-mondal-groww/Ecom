import {Image, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import BAG_IMG from '../assets/bag.jpg';
import { Icon } from '../components/icon';
const HeaderContent = () => {
  return (
    <>
      <View style={styles.topHeader} >
      <Text style={styles.headerText}>Hey, Rahul</Text>
      <Icon
        iconPack="Ionicons"
        name="bag-outline"
        style={styles.bagIcon}
        size={'md'}
      />
      </View>
      <SearchBar searchString="" />
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: '#F8F9FB',
    fontFamily: 'Manrope',
    fontSize: 22,
    fontWeight: '600',
    fontStyle: 'normal',
  },
  bagIcon: {
    height: 24,
    width: 24,
  },
  topHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
});

export default HeaderContent;
