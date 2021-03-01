import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const NewsDetailCard = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
      <Image style={styles.img} source={{uri: props.ImgUrl}} />
      <Text style={styles.desc}>{props.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
export {NewsDetailCard};
