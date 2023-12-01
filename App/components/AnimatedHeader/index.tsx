import React, {useState, useRef} from 'react';
import {Animated, ScrollView, View, Text, StyleSheet} from 'react-native';

const AnimatedHeader = () => {
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

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            transform: [{translateY: headerTranslateY}],
          },
        ]}>
        {/* Your header content */}
        <Text style={styles.headerText}>Animated Header</Text>
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
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    elevation: 3, // Android elevation
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
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

export default AnimatedHeader;
