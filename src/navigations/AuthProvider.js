import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
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
          setIsLoading(true)
          var data = JSON.stringify({
            "email": email,
            "password": password
          });
          
          var config = {
            method: 'post',
            url: 'https://webevis-wallet.up.railway.app/wallet/login',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setIsLoading(false)
          })
          .catch(function (error) {
            console.log(error);
            setIsLoading(false)
          });
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
