import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import {Input, Button} from './components';

const Login = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#b2dfdb'}}>
      <Image source={require('./assets/react.png')} style={styles.logoStyle} />
      <Input holder="E posta adresinizi girin" />
      <Input holder="Parolanızı Giriniz" />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  logoStyle: {
    resizeMode: 'contain',
    tintColor: 'black',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
  },
});
