import auth from '@react-native-firebase/auth';
import AppStack from './AppStack';

const login = ({email, password, navigation}) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('signed in!');
      //   navigation.navigate('AppStack');
      <AppStack />;
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};
const register = ({email, password}) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};
export {login, register};
