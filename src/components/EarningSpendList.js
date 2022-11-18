import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {earningList, spendList} from '../utilis/data';
const Width = Dimensions.get('window').width;

const MyCategories = ({item}) => (
  <TouchableOpacity style={styles.categoryList}>
    <Image style={{height: 20, width: 20, margin: 20}} source={item.icons} />
    <View
      style={{
        width: Width - 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text>{item.names}</Text>
      <Text>{item.rate}</Text>
    </View>
  </TouchableOpacity>
);

const EarningSpendList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={earningList} numColumns={1} renderItem={MyCategories} />
      <FlatList data={spendList} numColumns={1} renderItem={MyCategories} />
    </SafeAreaView>
  );
};

export default EarningSpendList;

const styles = StyleSheet.create({
  container: {},
  categoryList: {
    height: 50,
    width: Width - 20,
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
