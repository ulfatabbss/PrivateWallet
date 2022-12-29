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
import {useState, useEffect} from 'react';
import {register} from '../navigations/AuthProvider';
import {useSelector} from 'react-redux';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Signup = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(null);
  const {reg} = useSelector(state => state.root.user);
  const [nameError, setNameError] = useState('#5176C2');
  const [emailError, setEmailError] = useState('#5176C2');
  const [passwordError, setPasswordError] = useState('#5176C2');
  const [confirmPasswordError, setConfirmPasswordError] = useState('#5176C2');

  const Check = async () => {
    if (
      name == null ||
      email == null ||
      password == null ||
      confirmPassword == null
    ) {
      setNameError('red');
      setEmailError('red');
      setPasswordError('red');
      setConfirmPasswordError('red');
      setName(null);
      setEmail(null);
      setPassword(null);
      setConfirmPassword(null);
    } else {
      await register({name, email, password, navigation});
      console.log(reg, 'hey');
      if (reg == true) {
        navigation.replace('SignupSuccessfuly');
      }
      setName(null);
      setEmail(null);
      setPassword(null);
      setConfirmPassword(null);
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
        <StatusBar backgroundColor={'#84A0DD'} />
        <View
          style={{
            height: '30%',
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
                resizeMode="contain"
                style={{height: 25, width: 25, marginTop: 20, marginLeft: 20}}
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

          <View style={[styles.inputCards, {borderColor: nameError}]}>
            <Text style={styles.inputHeadings}>Name</Text>
            <TextInput
              style={[
                styles.placeholderText,
                {
                  bottom: 16,
                },
              ]}
              placeholder="name"
              onChangeText={text => setName(text) || setNameError(null)}
              placeholderTextColor={'#BFC0C2'}
              value={name}
            />
          </View>

          <View style={[styles.inputCards, {borderColor: emailError}]}>
            <Text style={styles.inputHeadings}>E-mail</Text>
            <TextInput
              style={[styles.placeholderText, {bottom: 16}]}
              placeholder="example@gmail.com"
              onChangeText={text => setEmail(text) || setEmailError(null)}
              placeholderTextColor={'#BFC0C2'}
              value={email}
            />
          </View>

          <View style={[styles.inputCards, {borderColor: passwordError}]}>
            <Text style={[styles.inputHeadings, {width: 70}]}>Password</Text>
            <TextInput
              style={[styles.placeholderText, {bottom: 16}]}
              placeholder="Password"
              onChangeText={text => setPassword(text) || setPasswordError(null)}
              placeholderTextColor={'#BFC0C2'}
              value={password}
            />
          </View>
          <View
            style={[styles.inputCards, {borderColor: confirmPasswordError}]}>
            <Text style={[styles.inputHeadings, {width: 120}]}>
              Confirm Password
            </Text>
            <TextInput
              style={[styles.placeholderText, {bottom: 16}]}
              placeholder="Confirm Password"
              onChangeText={text =>
                setConfirmPassword(text) || setConfirmPasswordError(null)
              }
              placeholderTextColor={'#BFC0C2'}
              value={confirmPassword}
            />
          </View>

          <TouchableOpacity onPress={() => Check()} style={[button, {}]}>
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
            <Text style={{color: '#898E9A'}}>Already have an account?</Text>
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

const styles = StyleSheet.create({
  inputCards: {
    marginTop: 10,
    height: 50,
    width: Width - 70,
    alignSelf: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#5176C2',
    borderRadius: 5,
  },
  inputHeadings: {
    bottom: 10,
    backgroundColor: 'white',
    width: 40,
    marginLeft: 10,
    color: '#5176C2',
    fontWeight: '600',
    textAlign: 'center',
  },
  placeholderText: {height: 40, color: '#000', marginLeft: 10},
});
