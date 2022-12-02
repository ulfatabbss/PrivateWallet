import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
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
import Header from '../components/Header';
import {login} from '../navigations/AuthProvider';
const Login = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [email, setEmail] = useState('salim');
  const [password, setPassword] = useState('123456');
  const [error, SetError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const Check = () => {
    if (email == null && password == null) {
      setPasswordError('✵Password Required');
      SetError('✵Email Required');
    } else if (password == null) {
      setPasswordError('✵Password Required');
    } else if (email == null) {
      SetError('*Email required*');
    } else {
      login({email, password, navigation});
      // navigation.replace('MyTabs');
    }
  };
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
            <Header navigation={navigation} text={''} color={'#fff'} />
          </ImageBackground>
        </View>
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
            <Text style={{alignSelf: 'center', color: '#898E9A'}}>
              Or use your email account
            </Text>
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
              onChangeText={text => setEmail(text) || SetError(null)}
              placeholder="example@gmail.com"
            />
          </View>
          <Text style={{color: 'red', marginLeft: 30}}>{error}</Text>
          <View style={[inputText, {marginTop: 20}]}>
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
              value={password}
              onChangeText={text => setPassword(text) || setPasswordError(null)}
              secureTextEntry
            />
          </View>
          <Text style={{color: 'red', marginLeft: 30}}>{passwordError}</Text>
          <View
            style={{
              width: Width - 70,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              alignSelf: 'center',
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
          <TouchableOpacity onPress={() => Check()} style={button}>
            <Text style={{color: '#F8F8F8', fontSize: 20}}>Login</Text>
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
            <Text style={{color: 'grey'}}>Don't have an account?</Text>
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
    height: 30,
    width: 30,
  },
  loginCard: {
    flex: 1,
    width: Width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
  },
  socialIconsView: {
    height: 50,
    width: Width - 70,
    borderTopWidth: 1,
    borderColor: '#D9D9D9',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
