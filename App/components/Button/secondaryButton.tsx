import {Pressable, StyleSheet, Text} from 'react-native';
import {IButtonProps} from './types';

const SecondaryButton = ({title, onPress, containerStyle}: IButtonProps) => (
  <Pressable
    onPress={onPress}
    style={[styles.primaryBtnContainer, containerStyle]}>
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  primaryBtnContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 56,
    borderColor: '#2A4BA0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  title: {
    color: '#2A4BA0',
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default SecondaryButton;
