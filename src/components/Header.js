import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
const Header = ({navigation, text, color}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.header}>
        <View style={{width: '10%'}}>
          <Image
            resizeMode="contain"
            style={[styles.icon, {tintColor: color}]}
            source={require('../assets/backErrow.png')}
          />
        </View>

        <View style={{width: '90%', alignItems: 'center'}}>
          <Text
            style={{
              color: color,
              marginRight: 50,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
    marginRight: 50,
  },
});