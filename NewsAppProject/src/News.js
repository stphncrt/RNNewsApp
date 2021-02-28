import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';

const myArray = Array.from(Array(15000).keys());

const News = () => {
  return (
    // <ScrollView>
    //   {/* <View>
    //     {myArray.map((u) => (
    //       <Text style={{fontSize: 30}}>{u}</Text>
    //     ))}
    //   </View> */}
    //   <FlatList>
    //     data={myArray}
    //     renderItem={(data) => <Text style={{fontSize: 30}}>{data.item}</Text>}
    //   </FlatList>
    // </ScrollView>
    <View>
      <FlatList
        data={myArray}
        renderItem={(data) => <Text style={{fontSize: 30}}>{data.item}</Text>}
      />
    </View>
  );
};

export default News;
