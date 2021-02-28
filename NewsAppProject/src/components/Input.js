import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
  return (
    <View style={styles.input}>
      <TextInput placeholder={props.holder} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
export {Input};
