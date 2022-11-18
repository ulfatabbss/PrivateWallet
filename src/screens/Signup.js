import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {button, inputText} from '../utilis/style';
import MyWrapper from '../components/MyWrapper';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Signup = ({navigation}) => {
  return (
    <MyWrapper>
      <SafeAreaView
        style={{
          height: Height,
          width: Width,
          backgroundColor: '#84A0DD',
        }}>
        <StatusBar backgroundColor={'#84A0DD'} />
        <View
          style={{
            height: '40%',
            width: Width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={{height: '110%', width: Width}}
            source={require('../assets/back2.png')}
            resizeMode={'contain'}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{height: 20, width: 20, marginTop: 60, marginLeft: 20}}
                source={require('../assets/back.png')}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            width: Width,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              fontSize: 24,
              color: '#5176C2',
              fontWeight: '900',
              alignSelf: 'center',
              margin: 12,
            }}>
            Create new Account
          </Text>
          <View
            style={{
              height: 30,
              width: Width - 70,
              borderTopWidth: 1,
              borderColor: '#D9D9D9',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}></View>

          <View
            style={{
              marginTop: 10,
              height: 40,
              width: Width - 70,
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#5176C2',
              borderRadius: 5,
            }}>
            <Text
              style={{
                bottom: 10,
                backgroundColor: 'white',
                width: 40,
                marginLeft: 5,
                color: '#5176C2',
                fontWeight: '600',
                textAlign: 'center',
              }}>
              Name
            </Text>
            <TextInput
              style={{bottom: 16, height: 40, color: '#000'}}
              placeholder="name"
              placeholderTextColor={'#BFC0C2'}
            />
          </View>
          <View style={inputText}>
            <TextInput
              style={{height: 40, color: '#000'}}
              autoCapitalize={'none'}
              placeholder="Email"
              placeholderTextColor={'#BFC0C2'}
            />
          </View>
          <View style={inputText}>
            <TextInput
              style={{height: 40}}
              placeholderTextColor={'#BFC0C2'}
              placeholder="Password"
            />
          </View>
          <View style={inputText}>
            <TextInput
              style={{height: 40}}
              placeholder="Confirm Password"
              placeholderTextColor={'#BFC0C2'}
            />
          </View>
          <TouchableOpacity style={[button, {marginTop: 30}]}>
            <Text style={{alignSelf: 'center', color: '#F8F8F8', fontSize: 20}}>
              Sign up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: Width - 70,
              margin: 10,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: '#5176C2'}}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </MyWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({});
