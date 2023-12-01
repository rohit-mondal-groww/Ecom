import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {useInitialRoute} from './hooks/useInitialRoute';

export const Stack = createNativeStackNavigator();

export const MainStack = () => {
  const {screenName} = useInitialRoute();
  return (
    <Stack.Navigator initialRouteName={screenName}>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};
