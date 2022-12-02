import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin} from '@react-native-google-signin/google-signin';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            setIsLoading(true);
            await auth().signInWithEmailAndPassword(email, password);
            console.log('current User', auth().currentUser);
            setIsLoading(false);
          } catch (e) {
            alert(e);
            setIsLoading(false);
          }
        },
        googleLogin: async () => {
          GoogleSignin.configure({
            webClientId: '297191463032-43rpfe3huj4t3j4862fm7u1ridan25ls.apps.googleusercontent.com',
          });
          try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential)
              // Use it only when user Sign's up, 
              // so create different social signup function
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                console.log('current User', auth().currentUser);
                firestore().collection('users').doc(auth().currentUser.uid)
                .set({
                    name:auth().currentUser.displayName,
                    email: auth().currentUser.email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: auth().currentUser.photoURL,
                })
                // ensure we catch any errors at this stage to advise us if something does go wrong
                .catch(error => {
                    console.log('Something went wrong with added user to firestore: ', error);
                    alert(error);
                })
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
                alert(error);
              });
          } catch (error) {
            alert(error);
            console.log({ error });
          }
        },

        register: async (name, email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password, name)
              .then(() => {
                firestore().collection('users').doc(auth().currentUser.uid)
                  .set({
                    email:email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg:'https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?w=996&t=st=1669987896~exp=1669988496~hmac=ed4afd3e7543acfb2638b9d85a6bcc3508aad043502f283bcd4e7deb58c9df5d',
                    name:name,
                    password:password,
                  })
                  .catch(error => {
                    alert('Something went wrong');
                    console.log('Something went wrong with added user to firestore: ');
                  })
              })
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
                alert(
                ('Something went wrong with sign up')
                );
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            auth().signOut();
          } catch (e) {
            console.log(e);
          }
        }
      }}>
      {children}
    </AuthContext.Provider>
  );
};
