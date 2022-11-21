import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import React, {useState} from 'react';
import {button, inputText} from '../utilis/style';
import MyWrapper from '../components/MyWrapper';
const Login = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <MyWrapper>
      <SafeAreaView
        style={{
          height: Height,
          width: Width,
          backgroundColor: '#84A0DD',
        }}>
        <OrientationLocker orientation={PORTRAIT} />
        <StatusBar backgroundColor={'#84A0DD'} />
        <View
          style={{
            height: '40%',
            width: Width,
            justifyContent: 'center',
          }}>
          <ImageBackground
            style={{height: '110%', width: Width, top: 15}}
            source={require('../assets/login1.png')}
            resizeMode={'contain'}>
            {/* <TouchableOpacity>
              <Image
              resizeMode='contain'
                  style={{height: 25, width: 25, marginTop: 20, marginLeft: 20}}
                source={require('../assets/back.png')}
              />
            </TouchableOpacity> */}
          </ImageBackground>
        </View>

        {/* loginCard */}
        <View style={styles.loginCard}>
          <Text
            style={{
              fontSize: 24,
              color: '#5176C2',
              fontWeight: '900',
              alignSelf: 'center',
              margin: 12,
            }}>
            Login to your Account
          </Text>
          <View style={styles.socialIconsView}>
            <TouchableOpacity>
              <Image
                style={styles.socialIcons}
                source={require('../assets/facebook.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.socialIcons}
                source={require('../assets/instagram.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.socialIcons}
                source={require('../assets/google.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={{alignSelf: 'center',color:'#898E9A'}}>Or use your email account</Text>
          </TouchableOpacity>
          <View style={inputText}>
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
              Email
            </Text>
            <TextInput
              style={{bottom: 16, height: 40, color: '#000'}}
              autoCapitalize={'none'}
              placeholderTextColor={'#BFC0C2'}
              placeholder="example@gmail.com"
            />
          </View>
          <View style={[inputText,{marginTop:20}]}>
          <Text
              style={{
                bottom: 10,
                backgroundColor: 'white',
                width: 65,
                marginLeft: 5,
                color: '#5176C2',
                fontWeight: '600',
                textAlign: 'center',
              }}>
              Password
            </Text>
            <TextInput
        style={{bottom: 16, height: 40, color: '#000'}}
              placeholder="***********"
              placeholderTextColor={'#BFC0C2'}
              secureTextEntry
            />
          </View>
          <View
            style={{
              margin: 20,
              width: Width - 70,
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center'
            }}>
            <Switch
              style={{alignSelf: 'flex-start'}}
              trackColor={{false: '#767577', true: '#D9D9D9'}}
              thumbColor={isEnabled ? '#5176C2' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}></Switch>
            <Text>Remember me</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text
                style={{
                  fontSize: 13,
                  color: '#5176C2',
                  fontWeight: '600',
                  marginLeft: 40,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyTabs')}
            style={button}>
            <Text style={{alignSelf: 'center', color: '#F8F8F8', fontSize: 20}}>
              Login
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
            <Text style={{color:'#898E9A'}}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: '#5176C2'}}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </MyWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  socialIcons: {
    height: 40,
    width: 40,
  },
  loginCard: {
    flex: 1,
    width: Width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
  },
  socialIconsView: {
    height: 70,
    width: Width - 70,
    borderTopWidth: 1,
    borderColor: '#D9D9D9',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
