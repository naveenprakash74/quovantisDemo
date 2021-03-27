/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/routes';
import {Provider} from 'react-redux';
import store from './src/store';

const App = props => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <RootNavigator {...props} />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
