import Snackbar from 'react-native-snackbar';

export const showSnackbar = (text: string) => {
  Snackbar.show({
    text,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: '#A9B4BC',
    textColor: '#1B262E',
    numberOfLines: 2,
  });
};
