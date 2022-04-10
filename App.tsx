/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const QTravelLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2164a6',
    secondary: '#0a1c2e',
    tertiary: '#dfb877',
    background: '#f2f3f4',
    info: '#dfb877'
  },
};


const App = () => {

  return (
    <NavigationContainer theme={QTravelLightTheme} >
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
