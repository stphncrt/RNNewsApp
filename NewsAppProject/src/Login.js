import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

const Login = () => {
  return (
    <View>
      <Image source={require('./assets/react.png')} style={styles.logoStyle} />
      <Text style={{fontSize: 40}}>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoStyle: {
    backgroundColor: 'red',
    resizeMode: 'contain',
    tintColor: 'black',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
  },
});
