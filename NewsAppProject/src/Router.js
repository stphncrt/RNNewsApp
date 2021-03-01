// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import News from './pages/News';
import NewsDetail from './pages/NewsDetail';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{gestureEnabled: true}}>
        <Stack.Screen name="news" component={News} />
        <Stack.Screen name="details" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
