import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const NewsCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image source={{uri: props.ImageUrl}} style={styles.img} />
        <Text style={styles.text}>{props.title}</Text>

        {/* <Text style={styles.desc}>{props.desc}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    fontWeight: 'bold',
    margin: 10,
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
