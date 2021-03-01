import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const NewsCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Image source={{uri: props.ImageUrl}} style={styles.img} />

      <Text style={styles.desc}>{props.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#514848',
  },
  text: {
    fontWeight: 'bold',
    margin: 5,
  },
  desc: {
    margin: 5,
  },
  img: {
    // width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.35,
    marginVertical: 0,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
export {NewsCard};
