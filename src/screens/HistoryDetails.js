import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {categoriesList, getRecordRequest} from '../shared/services/AppServices';
import {useSelector} from 'react-redux';
import {setRecord, store} from '../shared/redux';

const HistoryDetails = ({navigation, route}) => {
  const {cat} = route.params;
  const [loading, setLoading] = useState(false);
  const [newList, setNewList] = useState(null);
  const {userFormData, record} = useSelector(state => state.root.user);

  const Check = async () => {
    setLoading(true);
    // totalAmount;
    const id = userFormData?.data?._id;
    // console.log(total);
    await getRecordRequest(id, cat)
      .then(async ({data}) => {
        // console.log(data.data, 'dataaaaaaaaaaaaaaaaaaaaaaaaaa');
        const set = await data?.data;
        store.dispatch(setRecord(set));
      })
      .catch(err => {
        toastMessage('error', err?.response?.data?.message);
      })
      .finally(() => setLoading(false));

    data = record
      .filter(item => item.category == cat)
      .map(({amount}) => ({amount}));
    console.log(data, 'filterrrrrrrrrrrrrrr');
    const sum = await record.reduce(function (prev, current) {
      return prev + +current.amount;
    }, 0);
    console.log(sum);
  };

  useEffect(() => {
    Check();
    let cloneList = record.map(a => ({...a}));
    // console.log(cloneList, 'cloneeeeeeeeee');

    let sortedCars1 = cloneList.sort(
      (a, b) =>
        b.date
          .split('/')
          .reverse()
          .join()
          .localeCompare(a.date.split('/').reverse().join()) ||
        b.Time.split('/')
          .reverse()
          .join()
          .localeCompare(a.Time.split('/').reverse().join()),
    );
    setNewList(sortedCars1);
    console.log(sortedCars1, 'sorttttttttttttttttttt');
  }, []);

  const categories = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 80,
          width: 300,
          marginVertical: 10,
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 10,
          alignSelf: 'center',
          elevation: 5,
          alignItems: 'center',
        }}>
        {item.resource == 'Expense' ? (
          <Image
            style={{height: 40, width: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3121/3121773.png',
            }}
          />
        ) : (
          <Image
            style={{height: 40, width: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1011/1011528.png',
            }}
          />
        )}

        <View>
          <Text style={{alignSelf: 'center', fontWeight: '800', color: '#000'}}>
            {item.category}
          </Text>
          <Text style={{color: '#000', fontWeight: '300'}}>{item.date}</Text>
          <Text style={{color: '#000', fontWeight: '300'}}>{item.Time}</Text>
        </View>
        <Text style={{color: 'green', fontWeight: '500'}}>
          Rs: {item.amount}
        </Text>
      </View>
    );
  };
  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    );
  }
  if (record.length == 0) {
    return (
      <>
        <Header navigation={navigation} text={'History'} color={'blue'} />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../assets/nodata.png')}
            resizeMode={'contain'}
          />
        </View>
      </>
    );
  }
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} text={'History'} color={'blue'} />
      <FlatList renderItem={categories} data={newList} />
    </View>
  );
};

export default HistoryDetails;

const styles = StyleSheet.create({});
