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
  ToastAndroid,
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
import {Formik} from 'formik';
import {ActivityIndicator} from 'react-native';
import {LoginValidationSchema} from '../shared/exporter';
import {loginService} from '../shared/services/UserService';
import {toastMessage} from '../shared/utils/constants';
import {setIsLoggedIn, setUserFormData, store} from '../shared/redux';
import {primary} from '../utilis/colors';
const Login = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: '',
    password: '',
  };
  const handleLogin = values => {
    setLoading(true);
    const obj = {
      email: values.email,
      password: values.password,
    };

    loginService(obj)
      .then(({data}) => {
        store.dispatch(setUserFormData(data));
        toastMessage('Login Successfull');
        console.log(data, 'dataaaaaaaaaaaaaaaaaaaaaaaaaa');
        store.dispatch(setIsLoggedIn(true));
      })
      .catch(err => {
        ToastAndroid.showWithGravity(
          'Login details are incorrect',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      })
      .finally(() => setLoading(false));
  };
  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={primary} />
      </View>
    );
  }
  return (
    <MyWrapper>
      <Formik
        initialValues={initialValues}
        validateOnMount={true}
        validationSchema={LoginValidationSchema}
        onSubmit={values => {
          console.log('values', values);
          handleLogin(values);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          isSubmitting,
          handleSubmit,
          setFieldValue,
        }) => (
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
                height: '35%',
                width: Width,
                justifyContent: 'center',
              }}>
              <ImageBackground
                style={{height: '110%', width: Width, top: 15}}
                source={require('../assets/login1.png')}
                resizeMode={'contain'}></ImageBackground>
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
                  style={{bottom: 15, height: 40, color: '#000'}}
                  placeholder="John@gmail.com"
                  inputTitle={'Email Address'}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize={'none'}
                  onChangeText={handleChange('email')}
                />
              </View>
              {errors.email && touched.email ? (
                <Text style={styles.errors}>{errors.email}</Text>
              ) : null}
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
                  style={{bottom: 15, height: 40, color: '#000'}}
                  placeholder="*********"
                  value={values.password}
                  inputTitle={'Password'}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                />
              </View>
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}
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
              <TouchableOpacity onPress={() => handleSubmit()} style={button}>
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
        )}
      </Formik>
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
  errors: {
    fontSize: 12,
    color: 'red',
    fontWeight: '600',
    marginLeft: 35,
  },
});
