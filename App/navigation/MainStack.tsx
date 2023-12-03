import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {useInitialRoute} from './hooks/useInitialRoute';
import ProductDetail from '../screens/ProductDetail';
import CartDetails from '../screens/CartDetails';

export const Stack = createNativeStackNavigator();

export const MainStack = () => {
  const {screenName} = useInitialRoute();
  return (
    <Stack.Navigator initialRouteName={screenName}>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartDetail"
        component={CartDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
