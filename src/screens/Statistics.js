import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import DonutChart from '../components/DonutChart';
import React, {useState} from 'react';
import EarningSpendList from '../components/EarningSpendList';
import {ScrollView} from 'react-native-virtualized-view';
import Header from '../components/Header';
import Graph from '../components/Graph';
const Width = Dimensions.get('window').width;
const Statistics = ({navigation}) => {
  const [selected, setSelected] = useState('Day');
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header
          navigation={navigation}
          text={'Summary Report '}
          color={'#233A6B'}
        />
        <View
          style={{
            height: 400,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 10,
            shadowColor: 'darkblue',
          }}>
          <Text
            style={[
              styles.h1,
              {alignSelf: 'center', fontSize: 20, marginTop: 10},
            ]}>
            Balance Trend
          </Text>
          <View
            style={{
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
            }}>
            <TouchableOpacity
              onPress={() => setSelected('Day')}
              style={{
                height: 40,
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,

                backgroundColor: selected == 'Day' ? 'white' : '#5176C2',
              }}>
              <Text style={{color: selected == 'Day' ? 'black' : 'white'}}>
                Day
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected('Month')}
              style={{
                height: 40,
                width: '30%',
                borderRadius: 5,

                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: selected == 'Month' ? 'white' : '#5176C2',
              }}>
              <Text style={{color: selected == 'Month' ? 'black' : 'white'}}>
                Month
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected('year')}
              style={{
                height: 40,
                width: '30%',
                borderRadius: 5,

                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: selected == 'year' ? 'white' : '#5176C2',
              }}>
              <Text style={{color: selected == 'year' ? 'black' : 'white'}}>
                year
              </Text>
            </TouchableOpacity>
          </View>
          <Graph set={selected} />
        </View>
        <View style={styles.graphContainer}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '900',
              alignSelf: 'center',
              marginBottom: 10,
              color: '#233A6B',
            }}>
            Statistics
          </Text>
          <DonutChart />
          <View
            style={{
              height: 30,
              width: Width - 40,
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={[styles.dots, {backgroundColor: '#5176C2'}]}></View>
            <Text style={styles.lightText}>Earning</Text>
            <View style={[styles.dots, {backgroundColor: '#FFB841'}]}></View>
            <Text style={styles.lightText}>Spend</Text>
            <View style={[styles.dots, {backgroundColor: '#EC4747'}]}></View>
            <Text style={styles.lightText}>Available</Text>
          </View>
          <View
            style={{
              width: Width - 40,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text style={{fontSize: 16, color: '#1A2337'}}>1232.43</Text>
            <Text style={{fontSize: 16, color: '#1A2337'}}>972.32</Text>
            <Text style={{fontSize: 16, color: '#1A2337'}}>873.34</Text>
          </View>
        </View>

        <EarningSpendList />
      </View>
    </ScrollView>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  graphContainer: {
    flex: 1,
    width: Width - 20,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  dots: {
    height: 20,
    width: 20,
    borderRadius: 25,
    marginLeft: 25,
  },
  lightText: {
    color: '#BFC0C2',
    marginLeft: 5,
    fontWeight: '600',
  },
  h1: {
    color: '#233A6B',
    fontSize: 16,
    fontWeight: '900',
  },
});
