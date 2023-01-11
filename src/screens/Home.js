import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Modal from 'react-native-modal';
import {useState} from 'react';
import {button} from '../utilis/style';
import Graph from '../components/Graph';

import {AllCategories, ExpenseCategories} from '../utilis/catData';
import {useSelector} from 'react-redux';
import {getAmount} from '../shared/services/UserService';
import {toastMessage} from '../shared/utils/constants';
import {ActivityIndicator} from 'react-native';
import {
  setCategoriesList,
  setExpenceList,
  setIncomeList,
  setTotalAmount,
  store,
} from '../shared/redux';
import {categoriesList} from '../shared/services/AppServices';
import {ScrollView} from 'react-native-virtualized-view';
const Home = ({navigation}) => {
  const {userFormData, totalAmount, categoryList, expenceList, incomeList} =
    useSelector(state => state.root.user);
  const [loading, setLoading] = useState(false);
  const id = userFormData?.data?._id;
  const handleAmount = async () => {
    await getAmount(id)
      .then(({data}) => {
        // console.log(data, 'dataaaaaaaaaaaaaaaaaaaaaaaaaa');
        store.dispatch(setTotalAmount(data.data));
      })
      .catch(err => {
        toastMessage('error', err?.response?.data?.message);
      });
  };
  const handleList = async () => {
    await categoriesList()
      .then(({data}) => {
        // console.log(data, 'categoryyyyyyyyyyyyyyyyyyyyy list');
        store.dispatch(setCategoriesList(data.data));
      })
      .catch(err => {
        toastMessage('error', err?.response?.data?.message);
      });
  };
  useEffect(() => {
    setLoading(true);
    handleAmount();
    handleList().finally(() => setLoading(false));
    data = categoryList
      .filter(item => item.type == 'Income')
      .map(({id, category, type, amount, image}) => ({
        id,
        category,
        type,
        amount,
        image,
      }));
    store.dispatch(setIncomeList(data));
    console.log(data, 'incomeeeeeeeeee');
    data1 = categoryList
      .filter(item => item.type == 'Expence')
      .map(({id, category, type, amount, image}) => ({
        id,
        category,
        type,
        amount,
        image,
      }));
    store.dispatch(setExpenceList(data1));
    console.log(data, 'expenceeeeeeeeeeeeee');
    // console.log(categoriesList?.data, 'lissssssssssttttttttttttttt');
  }, []);

  const total = totalAmount ? totalAmount[0]?.amount : 0;
  const [selected, setSelected] = useState('Day');
  const myCategories = ({item}) => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.categoryCard}
        onPress={() =>
          navigation.navigate('HistoryDetails', {cat: item.category})
        }>
        <Image
          resizeMode="contain"
          style={{height: 30, width: 30}}
          source={{uri: item.image}}></Image>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '600',
          color: 'black',
        }}>
        {item.category}
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    );
  }
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'#5176C2'} />
      <View style={styles.card}>
        <ImageBackground
          style={styles.dashbordcard}
          source={require('../assets/dashbordCard.png')}>
          <View style={{padding: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1673263018~exp=1673263618~hmac=8fc521eab22d00bb4e922c880f2189ec08f350ab3e364bfcd1239d24b7f136d6',
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  marginLeft: 12,
                  fontWeight: '600',
                }}>
                {userFormData.data.name}
              </Text>
            </View>
            <Text style={{color: 'white', marginTop: 30}}>
              Available Balance
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'white',
                  marginTop: 10,
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                Rs. {total}
              </Text>

              <View style={{flex: 1}}></View>
            </View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={styles.incomeExpenseCard}
                onPress={() => {
                  navigation.navigate('AddRecord', {
                    cat: null,
                    resource: 'Income',
                  });
                }}>
                <Text style={styles.addIncomeExpense}>+ Add income</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.incomeExpenseCard,
                  {backgroundColor: total == 0 ? '#a9a9a9' : 'white'},
                ]}
                onPress={() => {
                  navigation.navigate('AddRecord', {
                    cat: null,
                    resource: 'Expense',
                  });
                }}
                disabled={total == 0 ? true : false}>
                <Text style={styles.addIncomeExpense}>+ Add Expence</Text>
              </TouchableOpacity>
            </View>
            {total == 0 ? (
              <Text
                style={{
                  alignSelf: 'flex-end',
                  top: 2,
                  fontSize: 16,
                  color: '#a9a9a9',
                  fontWeight: '500',
                }}>
                *Insufficient Balance*
              </Text>
            ) : null}
          </View>
        </ImageBackground>
      </View>
      <View style={styles.balanceTrendCard}>
        <Text
          style={[
            styles.h1,
            {alignSelf: 'center', fontSize: 20, marginTop: 10},
          ]}>
          Balance Trend
        </Text>
        <View style={styles.dayMonthYearMain}>
          <TouchableOpacity
            onPress={() => setSelected('Day')}
            style={[
              styles.shiftCards,
              {backgroundColor: selected == 'Day' ? 'white' : '#5176C2'},
            ]}>
            <Text style={{color: selected == 'Day' ? 'black' : 'white'}}>
              Day
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected('Month')}
            style={[
              styles.shiftCards,
              {
                backgroundColor: selected == 'Month' ? 'white' : '#5176C2',
              },
            ]}>
            <Text style={{color: selected == 'Month' ? 'black' : 'white'}}>
              Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected('year')}
            style={[
              styles.shiftCards,
              {backgroundColor: selected == 'year' ? 'white' : '#5176C2'},
            ]}>
            <Text style={{color: selected == 'year' ? 'black' : 'white'}}>
              year
            </Text>
          </TouchableOpacity>
        </View>
        <Graph set={selected} />
      </View>
      <Text
        style={{
          margin: 22,
          fontSize: 24,
          color: '#233A6B',
          fontWeight: 'bold',
        }}>
        Expense Category
      </Text>

      <View style={{flex: 1, width: '94%', alignSelf: 'center', bottom: 20}}>
        <FlatList renderItem={myCategories} data={expenceList} numColumns={4} />
      </View>
      <Text
        style={{
          margin: 22,
          fontSize: 24,
          color: '#233A6B',
          fontWeight: 'bold',
        }}>
        Income Category
      </Text>
      <View style={{flex: 1, width: '94%', alignSelf: 'center', bottom: 20}}>
        <FlatList renderItem={myCategories} data={incomeList} numColumns={4} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 250,
    width: Dimensions.get('window').width - 20,
    marginTop: 20,
    marginVertical: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  dashbordcard: {
    height: '100%',
    width: '100%',
  },
  h1: {
    color: '#233A6B',
    fontSize: 16,
    fontWeight: '900',
  },
  categoryCard: {
    height: 80,
    width: Dimensions.get('window').width / 4 - 20,
    backgroundColor: 'white',
    margin: 8,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  incomeExpenseCard: {
    backgroundColor: 'white',
    height: 40,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  editIcon: {
    backgroundColor: 'white',
    height: 20,
    marginLeft: 10,
    marginTop: 5,
    width: 20,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    height: 250,
    width: Dimensions.get('window').width - 40,
    borderRadius: 25,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  addIncomeExpense: {color: '#233A6B', fontSize: 16, fontWeight: '900'},
  balanceTrendCard: {
    height: 400,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    shadowColor: 'darkblue',
  },
  dayMonthYearMain: {
    flexDirection: 'row',
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#5176C2',
    borderRadius: 5,
    marginTop: 14,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shiftCards: {
    height: 40,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
