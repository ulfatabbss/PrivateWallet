import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AllCategories} from '../utilis/catData';
import Header from './Header';


const Catagories = ({navigation}) => {

  const myCategories = ({item}) => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
      onPress={()=>{navigation.navigate('AddRecord'),{cat:item.name}}} style={styles.categoryCard}>
        <View style={{flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            style={{height: 30, width: 30, marginHorizontal: 20}}
            source={item.img}></Image>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
            }}>
            {item.name}
          </Text>
        </View>
  
        <View>
          <Image
            resizeMode="contain"
            style={{height: 16, width: 16, tintColor: '#898E9A', marginRight: 20}}
            source={require('../assets/forwordArrow.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
  const [data, setData] = useState(AllCategories);
  useEffect(() => {
    const searchedCat = data.filter(item => item.name.toLowerCase());
    setData(searchedCat);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header navigation={navigation} text={'Categories'} color={'#233A6B'} />
      <View
        style={{
          height: 50,
          borderRadius: 25,
          borderWidth: 1,
          borderColor: 'grey',
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          alignSelf: 'center',
        }}>
        <Image
          style={{height: 15, width: 15, marginRight: 5}}
          source={require('../assets/search.png')}
        />
        <TextInput
          placeholder="Search"
          color="black"
          placeholderTextColor={'#898E9A'}
          style={{width: '85%'}}></TextInput>
      </View>
      <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}>
        <Text
          style={{
            color: '#233A6B',
            fontSize: 20,
            fontWeight: '700',
            marginLeft: 20,
            padding: 5,
          }}>
          All Categories
        </Text>
      </View>
      <FlatList renderItem={myCategories} data={data} />
    </View>
  );
};

export default Catagories;

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
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
