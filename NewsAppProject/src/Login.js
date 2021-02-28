import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Input, Button} from './components';

const Login = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#b2dfdb'}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView style={{flex: 1}} bounces={false}>
        <View style={{flex: 1}}>
          <Image
            source={require('./assets/react.png')}
            style={styles.logoStyle}
          />
          <Input holder="E posta adresinizi girin" />
          <Input holder="Parolanızı Giriniz" />
          <Button text="Giriş" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
