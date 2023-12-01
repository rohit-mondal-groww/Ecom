import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Badge = ({value}: {value: number}) => {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: 'red', // Badge background color
    borderRadius: 12, // Adjust as needed for the badge shape
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 24, // Minimum width to ensure content visibility
    height: 24, // Height of the badge
  },
  badgeText: {
    color: 'white', // Text color
    fontSize: 12, // Font size of the badge text
    fontWeight: 'bold',
  },
});

export default Badge;
