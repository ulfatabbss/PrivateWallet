import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {button} from '../utilis/style';
import React from 'react';
import MyWrapper from '../components/MyWrapper';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Verify = ({navigation}) => {
  return (
    <MyWrapper>
      <SafeAreaView
        style={{
          height: Height,
          width: Width,
          backgroundColor: '#fff',
        }}>
        <StatusBar backgroundColor={'white'} />
        <View
          style={{
            height: '15%',
            width: '59%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                height: 20,
                width: 20,
                marginLeft: 20,
                tintColor: 'black',
              }}
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.boldText}>Verify</Text>
        </View>

        <View
          style={{
            height: '40%',
            width: Width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            style={{height: '100%', width: Width}}
            source={require('../assets/verify.png')}
            resizeMode={'contain'}></ImageBackground>
        </View>
        <Text style={[styles.boldText, {margin: 20}]}>Verify Your email</Text>
        <Text style={{alignSelf: 'center'}}>
          Please enter your 4 digit code
        </Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text>sent to </Text>
          <Text style={{color: '#5176C2', fontWeight: '600'}}>
            username@example.com
          </Text>
        </View>
        <OTPInputView
          style={{
            width: '60%',
            height: 70,
            alignSelf: 'center',
          }}
          pinCount={4}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              color: '#5176C2',
              fontWeight: '600',
              borderBottomWidth: 2,
              borderBottomColor: '#5176C2',
            }}>
            Resend code
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmPassword')}
          style={[button, {height: '6%', margin: 20}]}>
          <Text style={{alignSelf: 'center', color: '#F8F8F8', fontSize: 20}}>
            Confirm
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </MyWrapper>
  );
};

export default Verify;

const styles = StyleSheet.create({
  boldText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#5176C2',
    alignSelf: 'center',
  },
  underlineStyleBase: {
    width: 40,
    height: 45,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    color: 'black',
    fontWeight: '900',
  },

  underlineStyleHighLighted: {
    borderColor: '#5176C2',
    borderWidth: 3,
  },
});
