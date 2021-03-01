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
    width: Dimensions.get('window').width * 0.47,
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
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
    // marginHorizontal: 5,
    borderRadius: 5,
    // margin: 5,
  },
});
export {NewsCard};
