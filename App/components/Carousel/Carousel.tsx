import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {ICarouselProps} from './carouselTypes';

const Carousel = ({containerStyle, noOfItems, children}: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChanged = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View style={containerStyle}>
      <Swiper
        showsPagination={false}
        loop={false}
        showsButtons={true}
        onIndexChanged={handleIndexChanged}>
        {children}
      </Swiper>
      <View style={styles.carouselIndicatorContainer}>
        {[...Array(noOfItems)].map((_, i) => {
          const indicatorStyleBasedOnState =
            i === currentIndex
              ? styles.activeIndicator
              : styles.inactiveIndicator;
          return (
            <View
              key={i}
              style={{
                ...styles.indicator,
                ...indicatorStyleBasedOnState,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  indicator: {
    borderWidth: 1,
    margin: 3,
  },
  activeIndicator: {
    backgroundColor: '#F9B023',
    borderColor: '#F9B023',
    width: 19,
  },
  inactiveIndicator: {
    backgroundColor: '#E4E4E4',
    borderColor: '#E4E4E4',
    width: 17,
  },
});

export default Carousel;
