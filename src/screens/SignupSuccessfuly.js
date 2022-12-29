import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import Header from '../components/Header';
import {button} from '../utilis/style';
import {StatusBar} from 'react-native';

const SignupSuccessfuly = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'white'} />
      <Header navigation={navigation} text={''} color={'#222433'} />
      <ImageBackground
        style={{height: 400, width: '100%'}}
        source={require('../assets/signupSuccess.png')}
        resizeMode={'contain'}></ImageBackground>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 24,
          color: '#5176C2',
          fontWeight: '900',
          marginTop: 30,
        }}>
        Sign Up Successfully
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          color: '#898E9A',
          fontWeight: '500',
          fontSize: 14,
          margin: 20,
        }}>
        Everything will be ok!
      </Text>
      <TouchableOpacity
        style={button}
        onPress={() => navigation.replace('Login')}>
        <Text style={{color: '#fff', fontSize: 20}}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupSuccessfuly;

const styles = StyleSheet.create({});
