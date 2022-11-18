import {StyleSheet, Text, View} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

import React from 'react';

const radius = 70;
const circleCircumference = 2 * Math.PI * radius;
// Yellow
const groceries = 241;
// red
const bills = 150;
// blue
const regular = 300;
const total = groceries + bills + regular;

const groceriesPercentage = (groceries / total) * 100;
const billsPercentage = (bills / total) * 100;
const regularPercentage = (regular / total) * 100;

const groceriesStrokeDashoffset =
  circleCircumference - (circleCircumference * groceriesPercentage) / 100;
const billsStrokeDashoffset =
  circleCircumference - (circleCircumference * billsPercentage) / 100;
const regularStrokeDashoffset =
  circleCircumference - (circleCircumference * regularPercentage) / 100;

const groceriesAngle = (groceries / total) * 360;
const billsAngle = (bills / total) * 360;
const regularAngle = groceriesAngle + billsAngle;
const DonutChart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="200" width="200" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            {total === 0 ? (
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#F1F6F9"
                fill="transparent"
                strokeWidth="40"
              />
            ) : (
              <>
                <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#FFB841"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={groceriesStrokeDashoffset}
                  rotation={0}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                />
                <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#EC4747"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={billsStrokeDashoffset}
                  rotation={groceriesAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                />
                <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#5176C2"
                  fill="transparent"
                  strokeWidth="40"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={regularStrokeDashoffset}
                  rotation={regularAngle}
                  originX="90"
                  originY="90"
                  strokeLinecap="round"
                />
              </>
            )}
          </G>
        </Svg>
        <Text
          style={{
            fontSize: 11,
            color: '#BFC0C2',
            position: 'absolute',
            top: 70,
            fontWeight: '700',
          }}>
          Available Balance
        </Text>
        <Text style={styles.label}>Rs {total}</Text>
      </View>
    </View>
  );
};

export default DonutChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '900',
    color: '#263238',
    fontSize: 24,
  },
});
