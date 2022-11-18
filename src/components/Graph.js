import {Dimensions} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
<<<<<<< HEAD
const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun'],
=======
import {DarkTheme} from '@react-navigation/native';
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat', 'Sun'],
>>>>>>> c70baaa12c005c63a155451ca3832997846f665d
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(81, 118, 194, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '5',
    strokeWidth: '2',
    stroke: '#5176C2',
  },
};
const Graph = () => {
  return (
<<<<<<< HEAD
    <View style={{height: 300,marginTop:10}}>
      <BarChart
=======
    <View style={{height: 280, paddingVertical: 10}}>
      <LineChart
>>>>>>> c70baaa12c005c63a155451ca3832997846f665d
        style={{marginRight: -20}}
        data={barData}
        width={screenWidth - 40}
<<<<<<< HEAD
        height={300}

=======
        height={256}
>>>>>>> c70baaa12c005c63a155451ca3832997846f665d
        chartConfig={chartConfig}
        withVerticalLines={false}
        withShadow={false}
      />
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({});
