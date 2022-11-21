import {Dimensions, StyleSheet, Text, View} from 'react-native';
import DonutChart from '../components/DonutChart';
import React from 'react';
import EarningSpendList from '../components/EarningSpendList';
import {ScrollView} from 'react-native-virtualized-view';
import Header from '../components/Header';
const Width = Dimensions.get('window').width;
const Statistics = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header navigation={navigation} text={'Summary Report '} color={'#233A6B'}/>
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

        <EarningSpendList/>
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
});