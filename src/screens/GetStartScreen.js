import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
const height = Dimensions.get('window').height;
const GetStartScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Image
        source={require('../assets/getstart.png')}
        style={{
          height: height / 2,
          width: '100%',
          resizeMode: 'stretch',
          marginTop: 10,
        }}
      />
      <Text
        style={{
          fontSize: 26,
          color: '#233A6B',
          marginLeft: 30,
          width: '90%',
          fontWeight: 'bold',
        }}>
        Easy way to manage your e-wallet
      </Text>
      <Image
        resizeMode="contain"
        style={{height: 50, width: 200, alignSelf: 'center'}}
        source={require('../assets/line.png')}
      />

      <Text
        style={{color: '#233A6B', width: '90%', fontSize: 16, marginLeft: 30}}>
        Manage your every penny and transaction with the ease
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SelectPage')}
        style={styles.buttonStart}>
        <Text style={{fontSize: 16, color: '#fff'}}>Get Started</Text>
        <Image
          style={{height: 15, width: 15, marginHorizontal: 10}}
          source={require('../assets/forwardarrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GetStartScreen;

const styles = StyleSheet.create({
  buttonStart: {
    height: 50,
    width: '70%',
    alignSelf: 'center',
    backgroundColor: '#5176C2',
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
