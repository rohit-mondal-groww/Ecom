import {Pressable, StyleSheet, Text} from 'react-native';
import {IButtonProps} from './types';

const PrimaryButton = ({title, onPress, containerStyle}: IButtonProps) => (
  <Pressable
    onPress={onPress}
    style={[styles.primaryBtnContainer, containerStyle]}>
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  primaryBtnContainer: {
    backgroundColor: '#2A4BA0',
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default PrimaryButton;
