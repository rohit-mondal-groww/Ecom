import {Pressable, StyleSheet} from 'react-native';
import {$TSFixNavigation} from '../../common/screenTypes';
import Icon from '../icon/icon';

const BackButton = ({navigation}: {navigation: $TSFixNavigation}) => {
  const goBack = () => navigation.goBack();
  return (
    <Pressable onPress={goBack} style={styles.backBtnContainer}>
      <Icon name="chevron-left" iconPack="MaterialCommunityIcons" size="md" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backBtnContainer: {
    height: 40,
    width: 40,
    backgroundColor: '#F8F9FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default BackButton;
