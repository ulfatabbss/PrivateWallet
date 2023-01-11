import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {AllCategories} from '../utilis/catData';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useState} from 'react';

const History = ({navigation}) => {
  const {userFormData, totalAmount, categoryList} = useSelector(
    state => state.root.user,
  );

  const myCategories = ({item}) => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.categoryCard}
        onPress={() =>
          navigation.navigate('HistoryDetails', {cat: item.category})
        }>
        <View style={{flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            style={{height: 30, width: 30, marginRight: 20}}
            source={{uri: item.image}}></Image>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
            }}>
            {item.category}
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
            }}>
            {item.value}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        text={'Recent Transaction'}
        color={'#233A6B'}
        navigation={navigation}
      />
      <FlatList renderItem={myCategories} data={categoryList} />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 20,
  },
  categoryCard: {
    height: 60,
    width: Dimensions.get('window').width - 40,
    backgroundColor: 'white',
    margin: 8,
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
