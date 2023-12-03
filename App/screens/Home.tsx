import React, {useEffect, Dispatch} from 'react';
import {Animated, View, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {IHomeScreenProps} from '../common/screenTypes';
import HeaderContent from '../containers/HeaderContent';
import ProductList from '../containers/ProductList';
import {getAllProductsActionCreator} from '../redux/actionCreator';

const Home = (props: IHomeScreenProps) => {
  // const headerHeight = Dimensions.get('screen').height / 4; // Adjust this as per your header's height
  // const scrollOffset = useRef(new Animated.Value(0)).current;

  // const onScroll = Animated.event(
  //   [{nativeEvent: {contentOffset: {y: scrollOffset}}}],
  //   {useNativeDriver: true},
  // );

  // const headerTranslateY = scrollOffset.interpolate({
  //   inputRange: [0, headerHeight],
  //   outputRange: [0, -headerHeight],
  //   extrapolate: 'clamp',
  // });

  useEffect(() => {
    props.getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {/* improvements:- scroll up header while scrolling the list. Need to check why its not working */}
      <Animated.View
        style={[
          styles.header,
          // {
          //   transform: [{translateY: headerTranslateY}],
          // },
        ]}>
        <HeaderContent navigation={props.navigation} />
      </Animated.View>
      <Animated.ScrollView
        style={styles.scrollView}
        // scrollEventThrottle={16}
        // onScroll={onScroll}
        contentContainerStyle={styles.contentContainer}>
        <ProductList navigation={props.navigation} route={props.route} />
      </Animated.ScrollView>
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    getAllProducts: () => dispatch(getAllProductsActionCreator()),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Dimensions.get('screen').height / 3.5,
    backgroundColor: '#2A4BA0',
    zIndex: 1000,
    elevation: 3, // Android elevation
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  scrollView: {
    flex: 1,
    marginTop: Dimensions.get('screen').height / 3.5, // Adjust based on header height
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    marginTop: 12,
  },
});

export default connect(null, mapDispatchToProps)(Home);
