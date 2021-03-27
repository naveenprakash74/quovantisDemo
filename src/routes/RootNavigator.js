import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ApprovedFoodListScreen, HomeScreen} from '../screens';

const Stack = createStackNavigator();
/**
 *
 * @returns root stack navigation which handles root navigation
 */
const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="list" component={ApprovedFoodListScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
