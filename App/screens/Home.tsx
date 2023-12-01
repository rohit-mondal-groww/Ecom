import React, {useState, useRef, useEffect, Dispatch} from 'react';
import {Animated, ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import HeaderContent from '../containers/HeaderContent';
import {getAllProductsActionCreator} from '../redux/actionCreator';

const Home = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const headerHeight = 100; // Adjust this as per your header's height
  const scrollOffset = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollOffset}}}],
    {useNativeDriver: true},
  );

  const headerTranslateY = scrollOffset.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp',
  });

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            transform: [{translateY: headerTranslateY}],
          },
        ]}>
        <HeaderContent />
      </Animated.View>
      <ScrollView
        style={styles.scrollView}
        scrollEventThrottle={16}
        onScroll={onScroll}
        contentContainerStyle={styles.contentContainer}>
        {/* Your scrollable content */}
        <View style={styles.content}>{/* ... */}</View>
      </ScrollView>
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
    height: Dimensions.get('screen').height / 3,
    backgroundColor: '#2A4BA0',
    zIndex: 1000,
    elevation: 3, // Android elevation
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 12,
  },
  scrollView: {
    flex: 1,
    marginTop: 100, // Adjust based on header height
  },
  contentContainer: {
    paddingTop: 20, // Padding to show content below the fixed header
  },
  content: {
    // Your scrollable content styles
  },
});

export default connect(null, mapDispatchToProps)(Home);
