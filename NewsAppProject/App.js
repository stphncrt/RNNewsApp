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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {} from 'react-native';

export const App = () => {
  const myObj = {
    url: 'www.google.com',
    data: [1, 2, 3],
    config: 'Empty',
  };
  const {config} = myObj;
  console.log(config);
  const pressFunction = () => {
    alert('oldu');
    console.log('oldu oldu');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello World</Text>
      <Button title="Log" onPress={pressFunction} />
    </View>
  );
};

export default App;
