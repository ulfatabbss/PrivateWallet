import {
<<<<<<< HEAD
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
      <Image resizeMode='contain' style={{height: 24, width: 24, margin: 20}} source={item.icons} />
      <View
        style={{
          width: Width - 90,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.text}>{item.names}</Text>
        <Text style={styles.text}>{item.rate}</Text>
      </View>
    </TouchableOpacity>
  );
  
  const EarningSpendList = () => {
    return (
      <SafeAreaView style={styles.container}>
       <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 80,
            marginTop: 10,
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
        <FlatList data={earningList} numColumns={1} renderItem={MyCategories} />
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 80,
            marginTop: 10,
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
            Spend
          </Text>
        </View>
        <FlatList data={spendList} numColumns={1} renderItem={MyCategories} />
      </SafeAreaView>
    );
  };
  
  export default EarningSpendList;
  
  const styles = StyleSheet.create({
    container: {},
    categoryList: {
      height: 60,
      width: Width - 20,
      alignSelf: 'center',
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 5,
      backgroundColor: '#fff',
      borderRadius: 10,
    },text:{
        color:'#1A2337'
    }
  });
=======
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
>>>>>>> c70baaa12c005c63a155451ca3832997846f665d
