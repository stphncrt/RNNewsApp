import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {NewsDetailCard} from '../components/NewsDetailCard';

const NewsDetail = (props) => {
  const dataArray = props.route.params.dataArray;
  const renderComponent = ({item}) => (
    <NewsDetailCard
      title={item.title}
      ImgUrl={item.urlToImage}
      desc={item.description}
    />
  );

  return (
    <View>
      <FlatList data={dataArray} renderItem={renderComponent} />
    </View>
  );
};

export default NewsDetail;
