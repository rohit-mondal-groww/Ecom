import {Icon} from '../icon';
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {ISearchBarProps} from './searchBarTypes';

const SearchBar = ({
  autofocus,
  onChangeText,
  onClearInput,
  onPressIn,
  onSubmitInput,
  placeholderText,
  searchString,
}: ISearchBarProps) => {
  return (
    <View style={styles.container}>
      <Icon
        iconPack="MaterialCommunityIcons"
        name="magnify"
        style={styles.magnifyIcon}
        size={'md'}
      />
      <TextInput
        onPressIn={onPressIn}
        placeholder={placeholderText}
        placeholderTextColor={'#8891A5'}
        value={searchString}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitInput}
        autoFocus={autofocus}
      />
      {searchString.length ? (
        <Icon
          iconPack="MaterialIcons"
          name="cancel"
          style={styles.cancelIcon}
          size={'md'}
          onPress={onClearInput}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#153075',
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  magnifyIcon: {
    color: '#F8F9FB',
    marginLeft: 20,
    marginRight: 8,
  },
  cancelIcon: {
    marginRight: 16,
    color: '#F8F9FB',
  },
});

export default SearchBar;
