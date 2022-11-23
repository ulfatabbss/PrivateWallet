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
import {ScrollView} from 'react-native-virtualized-view';
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
      <Text style={{color: '#000'}}>{item.names}</Text>
      <Text style={{color: '#000'}}>{item.rate}</Text>
    </View>
  </TouchableOpacity>
);

const EarningSpendList = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
            paddingVertical: 10,
          }}>
          <View
            style={{
              backgroundColor: '#5176C2',
              borderRadius: 25,
              height: 15,
              width: 15,
              margin: 15,
            }}></View>
          <Text style={{fontSize: 22, fontWeight: '700', color: '#5176C2'}}>
            Earning
          </Text>
        </View>
        <FlatList
          data={earningList}
          numColumns={1}
          renderItem={MyCategories}
          listKey={(item, index) => `_key${index.toString()}`}
          keyExtractor={(item, index) => `_key${index.toString()}`}
        />
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
            paddingVertical: 10,
          }}>
          <View
            style={{
              backgroundColor: '#FFB841',
              borderRadius: 25,
              height: 15,
              width: 15,
              marginHorizontal: 15,
            }}></View>
          <Text style={{fontSize: 22, fontWeight: '700', color: '#FFB841'}}>
            Spend
          </Text>
        </View>
        <FlatList
          data={spendList}
          numColumns={1}
          renderItem={MyCategories}
          listKey={(item, index) => `_key${index.toString()}`}
          keyExtractor={(item, index) => `_key${index.toString()}`}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default EarningSpendList;

const styles = StyleSheet.create({
  container: {},
  categoryList: {
    height: 60,
    borderWidth: 0.5,
    borderColor: '#5176C2',
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