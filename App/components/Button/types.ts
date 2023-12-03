import {GestureResponderEvent} from 'react-native';

export type PressableFunc = null | ((event: GestureResponderEvent) => void);

export interface IButtonProps {
  title: string;
  onPress: PressableFunc;
  containerStyle: any;
}
