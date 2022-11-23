import {Dimensions} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun'],
}


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
const Graph = ({set}) => {
  // {console.log(set)}

  const Days = {
    labels: ["Mon", "Tus","Wen", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [20, 45, 28,40, 80, 99, 43],
        strokeWidth: 2 // optional
      }
    ],
  };
 
  const mon = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        data: [40, 60, 28, 40, 55, 35],
        strokeWidth: 2 // optional
      }
    ],
  };
  const yer = {
    labels: ["2017", "2018", "2010", "2020", "2021", "2022"],
    datasets: [
      {
        data: [10, 25, 45, 40, 55, 60],
        strokeWidth: 2 // optional
      }
    ],
  };
  return (
    <View style={{height: 280, paddingVertical: 10}}>
      <LineChart
        style={{marginRight: -20}}
        // yAxisLabel="K"
        yAxisSuffix="k"
        data={set=='Day'?Days:set=='Month'?mon:yer}
        width={screenWidth - 40}
        height={256}
        chartConfig={chartConfig}
        withVerticalLines={false}
        withShadow={false}
        bezier
      />
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({});
