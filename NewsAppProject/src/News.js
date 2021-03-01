import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {NewsCard} from './components';

const myArray = Array.from(Array(15000).keys());
const newsArray = [
  {
    author: 'Fred Lambert',
    title:
      'Tesla’s controversial ‘yoke’ steering wheel spotted in the wild for the first time',
    description:
      'Tesla’s controversial ‘yoke’ steering wheel in the new and updated Model S has spotted in the wild for the first time. Last month, Tesla officially unveiled the new Model S and Model X refresh.  The unveiling of the new vehicle was somewhat strangely on the s…',
    url:
      'https://electrek.co/2021/02/28/tesla-controversial-yoke-steering-wheel-spotted-the-wild-first-time/',
    urlToImage:
      'https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/02/Tesla-Model-S-yoke-steering-wheel.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1',
    publishedAt: '2021-02-28T22:29:59Z',
    content:
      'Tesla’s controversial ‘yoke’ steering wheel in the new and updated Model S has spotted in the wild for the first time.\r\nLast month, Tesla officially unveiled the new Model S and Model X refresh. \r\nTh… [+1866 chars]',
  },
  {
    author: 'Wong Pei Ting',
    title:
      'The Big Read: After a decade of fits and starts, it’s all systems go for Singapore’s electric vehicle dream',
    description:
      "The Government’s earlier start-stop approach to EV adoption for more than a decade has left some industry players and prospective buyers wondering about its future amid announcements of ambitious targets in Singapore's Green Plan 2030.",
    url:
      'https://www.channelnewsasia.com/news/singapore/electric-vehicle-ev-adoption-budget-2021-battery-charging-14300510',
    urlToImage:
      'https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/14300544/16x9/991/557/e18c48cdca0267c86cc6c20055cd0a5a/OC/electric-vehicle--1-.jpg',
    publishedAt: '2021-02-28T22:00:38Z',
    content:
      'SINGAPORE: When contractor and part-time Grab driver Koh Jie Meng started driving an electric vehicle (EV) in 2019, he had to make special trips to a flatted factory in Ang Mo Kio every two to three … [+25517 chars]',
  },
  {
    author: 'Brad Anderson',
    title: 'King Of The Memes: Are Tesla Shares Impacted By Reddit Posts?',
    description:
      'A study suggests there is at least some relationship between attention on Wall Street Bets and Tesla returns.',
    url:
      'https://www.carscoops.com/2021/02/king-of-the-memes-are-tesla-shares-impacted-by-reddit-posts/',
    urlToImage:
      'https://www.carscoops.com/wp-content/uploads/2020/11/tesla-to-make-ev-chargers-in-china-2.jpg',
    publishedAt: '2021-02-28T21:44:04Z',
    content:
      'A study has found that there could be a connection between Reddit posts and the performance of Tesla shares.\r\nEager to see how much online chatter about the electric automaker impacts its share price… [+1397 chars]',
  },
  {
    author: null,
    title: 'Bitcoin extends retreat from record high to hit lowest in 20 days',
    description:
      "Bitcoin dropped 6.39% to $43,165.78 on Sunday, losing $2,944.20 from its previous close. Bitcoin, the world's biggest and best-known cryptocurrency, has fallen 26% from the year's high of$58,354.14 on Feb. 21 when it soared amid increasing confidence that it …",
    url:
      'https://japantoday.com/category/business/update-1-bitcoin-extends-retreat-from-record-high-to-hit-lowest-in-20-days',
    urlToImage: null,
    publishedAt: '2021-02-28T21:38:03Z',
    content:
      "Bitcoin dropped 6.39% to $43,165.78 on Sunday, losing $2,944.20 from its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, has fallen 26% from the year's high of$58,354.14 … [+478 chars]",
  },
  {
    author: 'Reuters',
    title: 'Bitcoin extends retreat from record high to hit lowest in 20 days',
    description:
      'Bitcoin dropped 6.39% to $43,165.78 on Sunday, losing $2,944.20 from its previous close.',
    url:
      'https://www.business-standard.com/article/markets/bitcoin-extends-retreat-from-record-high-to-hit-lowest-in-20-days-121022800698_1.html',
    urlToImage:
      'https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/01/full/1606832917-5137.jpeg',
    publishedAt: '2021-02-28T21:19:00Z',
    content:
      "(Reuters) - Bitcoin dropped 6.39% to $43,165.78 on Sunday, losing $2,944.20 from its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, has fallen 26% from the year's high o… [+1931 chars]",
  },
  {
    author: 'Cointelegraph By Sam Bourgi',
    title:
      'Google Finance adds dedicated ‘crypto’ tab featuring Bitcoin, Ether, Litecoin',
    description:
      'Crypto continues to enter mainstream usage. Google Finance users can now get a quick rundown of the top cryptocurrency prices with just one click.',
    url:
      'https://cointelegraph.com/news/google-finance-adds-dedicated-crypto-tab-featuring-bitcoin-ether-litecoin',
    urlToImage:
      'https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvOWFhMmM4MWUtZGNkZi00Y2NmLTlmZjMtOTAxY2MzZjkxODU0LmpwZw==.jpg',
    publishedAt: '2021-02-28T21:15:59Z',
    content:
      'Google Finance has added crypto prices to the finance.google.com domain. The section, titled Crypto, now appears in the Compare Markets category alongside conventional stock and currency markets. The… [+1644 chars]',
  },
  {
    author: 'Ian Verrender',
    title:
      'Money market madness: How the RBA and every central bank have been left humiliated',
    description:
      "For the past year, across the globe, central banks have acted in unison, throwing everything at their disposal at an unseen enemy in a desperate effort to stave off the most serious economic collapse in more than a century. Suddenly, they've been left bruised…",
    url:
      'https://www.abc.net.au/news/2021-03-01/why-interest-rates-are-soaring-and-what-it-means-for-you/13201602',
    urlToImage: 'https://www.abc.net.au/cm/rimage/12858034-16x9-large.jpg?v=2',
    publishedAt: '2021-02-28T20:00:58Z',
    content:
      "As if there wasn't enough uncertainty and chaos in the world.\r\nThe past 18 months have seen a global pandemic that has taken the lives of millions and created hardship and misery for many more. Add t… [+9039 chars]",
  },
  {
    author: 'Jonathan Bell',
    title: 'Porsche Taycan Turbo shows the seductive side of EVs',
    description:
      'The Porsche Taycan is the electric car du jour, the Tesla challenger that just happens to be a debut foray into full electrification by the world’s most famous sports car manufacturer. Can Porsche keep its fabled ethos and image alive by eschewing the interna…',
    url: 'https://www.wallpaper.com/transport/porsche-taycan-turbo',
    urlToImage:
      'https://cdn.wallpaper.com/main/styles/fp_1540x944/s3/2021/02/taycan_turbo_porsche_exclusive_manufaktur_2020_porsche_ag.jpg',
    publishedAt: '2021-02-28T20:00:00Z',
    content:
      'The Porsche Taycan is the electric car du jour, the Tesla challenger that just happens to be a debut foray into full electrification by the world’s most famous sports car manufacturer. Can Porsche ke… [+4326 chars]',
  },
  {
    author:
      'Tom Aspray, Contributor, \n Tom Aspray, Contributor\n https://www.forbes.com/sites/tomaspray/',
    title: 'Have Stocks Dropped Enough?',
    description:
      'The stock market was rattled last week by the spike in yields and the selling in the tech sector. In last week’s article the Viper Report’s Tom Aspray commented that a deeper decline was needed to reduce the high level of bullishness and complacency. So where…',
    url:
      'https://www.forbes.com/sites/tomaspray/2021/02/28/have-stocks-dropped-enough/',
    urlToImage:
      'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F603bedd49f9d63ad2522c509%2F0x0.jpg',
    publishedAt: '2021-02-28T19:32:45Z',
    content:
      "3D Rendered Abstract Background of one hundred dollar bill with stock market chart\r\ngetty\r\nIt was a rough week for stocks around the world. Even before the U.S. market opened on Friday, Hong Kong's H… [+6368 chars]",
  },
];
const News = () => {
  // const renderData = (data) => <Text style={{fontSize: 30}}>{data.item}</Text>;
  const renderData = ({item}) => (
    <NewsCard
      title={item.title}
      ImageUrl={item.urlToImage}
      desc={item.description}
    />
    // <Text style={{fontSize: 15}}>{item.title}</Text>
  );
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
      <FlatList data={newsArray} renderItem={renderData} />
    </View>
  );
};

export default News;
