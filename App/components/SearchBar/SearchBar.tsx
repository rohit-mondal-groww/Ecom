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
        placeholder={'Search products or store'}
        placeholderTextColor={'#8891A5'}
        value={searchString}
        onChangeText={onChangeText}
        style={styles.searchInput}
        onSubmitEditing={onSubmitInput}
        autoFocus={autofocus}
        // onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
        // editable={isClickable}
        // selectTextOnFocus={isClickable}
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
    height:56,
    width:'100%',
    paddingLeft:28,
    paddingVertical:19,
    backgroundColor:'#153075',
    borderRadius:50,
    flexDirection:'row'
  },
  magnifyIcon: {
    
  },
  searchInput: {
    // height:56,
    // width:'100%',
    // paddingLeft:28,
    // paddingVertical:19,
    // backgroundColor:'#153075',
    // borderRadius:50
    zIndex:110
  },
  cancelIcon: {},
});


export default SearchBar;
