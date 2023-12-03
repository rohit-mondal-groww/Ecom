import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '../icon/icon';
import {IRatingProps} from './types';

const Rating = ({rating, onRatingPress, containerStyle}: IRatingProps) => {
  const renderStars = () => {
    const stars = [];
    const maxRating = 5; // Maximum rating value (adjust as needed)
    const fraction = rating - Math.floor(rating); // Decimal part of the rating

    for (let i = 1; i <= maxRating; i++) {
      let iconName = 'star-outline';
      let iconColor = '#1E222B';

      if (i <= Math.floor(rating)) {
        iconName = 'star';
        iconColor = '#F9B023';
      } else if (i === Math.ceil(rating) && fraction > 0) {
        iconName = 'star-half';
        iconColor = '#F9B023';
      }

      stars.push(
        <TouchableOpacity
          style={styles.eachStar}
          key={i}
          onPress={() => onRatingPress(i)}>
          <Icon
            iconPack="Ionicons"
            name={iconName}
            size="sm"
            color={iconColor}
          />
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  return (
    <View style={[styles.ratingContainer, containerStyle]}>
      {renderStars()}
      <Text style={styles.rating}>{rating.toFixed(1)}/5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eachStar: {
    marginRight: 4,
  },
  ratingContainer: {flexDirection: 'row', alignItems: 'center'},
  rating: {
    marginLeft: 6,
    color: '#A1A1AB',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Rating;
