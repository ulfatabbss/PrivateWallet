import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import MyWrapper from '../components/MyWrapper';
import {button, inputText} from '../utilis/style';
import Header from '../components/Header';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ConfirmPassword = ({navigation}) => {
  return (
    <MyWrapper>
      <SafeAreaView
        style={{
          height: Height,
          width: Width,
          backgroundColor: '#fff',
        }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} /> 
        <Header navigation={navigation} text={'Confirm Password'} color={'#5176C2'}/>
        <View
          style={{
            height: '40%',
            width: Width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={{height: '100%', width: Width}}
            source={require('../assets/changepassword.png')}
            resizeMode={'contain'}></ImageBackground>
        </View>
        <Text style={{color: '#000', alignSelf: 'center', marginTop: 20}}>
          Please enter your Email Address to
        </Text>
        <Text style={{color: '#000', alignSelf: 'center'}}>
          Recieve a verification code.
        </Text>
        <View style={[inputText, {marginTop: 40}]}>
          <Text
            style={{
              bottom: 10,
              backgroundColor: 'white',
              width: 100,
              marginLeft: 5,
              color: '#5176C2',
              fontWeight: '600',
              textAlign: 'center',
            }}>
            New Password
          </Text>
          <TextInput
            style={{bottom: 16, height: 40, color: '#000'}}
            autoCapitalize={'none'}
            placeholderTextColor={'#BFC0C2'}
            secureTextEntry
          />
        </View>
        <View style={[inputText, {marginTop: 20}]}>
          <Text
            style={{
              bottom: 10,
              backgroundColor: 'white',
              width: 150,
              marginLeft: 5,
              color: '#5176C2',
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Confirm New Password
          </Text>
          <TextInput
            style={{bottom: 16, height: 40, color: '#000'}}
            autoCapitalize={'none'}
            placeholderTextColor={'#BFC0C2'}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={[button, {height: '6%', margin: 40, alignItems: 'center'}]}>
          <Text style={{fontSize: 20, color: '#fff',fontWeight:'600'}}>Sent</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </MyWrapper>
  );
};
export default ConfirmPassword;

const styles = StyleSheet.create({
  boldText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#5176C2',
    alignSelf: 'center',
  },
});
