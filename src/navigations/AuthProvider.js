import React, {createContext, useState} from 'react';
import {ToastAndroid} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {setIsLoggedIn, store, setReg, setUserFormData} from '../shared/redux';
const login = ({email, password}) => {
  const data = JSON.stringify({
    email: email,
    password: password,
  });

  const config = {
    method: 'post',
    url: 'https://vast-pink-crane-hem.cyclic.app/wallet/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      if (response.data.success == true) {
        ToastAndroid.showWithGravity(
          response.data.msg,  
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        store.dispatch(setIsLoggedIn(true));
        store.dispatch(setUserFormData(response.data));
      } else {
        console.log(JSON.stringify(response.data));
        ToastAndroid.showWithGravity(
          response.data.msg,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      ToastAndroid.showWithGravity(
        error,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      console.log('ddddddddd', error);
    });
};
const register = ({name, email, password, navigation}) => {
  const data = JSON.stringify({
    name: name,
    email: email,
    password: password,
  });

  const config = {
    method: 'post',
    url: 'https://vast-pink-crane-hem.cyclic.app/wallet/register',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      if (response.data.success == true) {
        store.dispatch(setReg(true));
        store.dispatch(setUserFormData(response.data));
        console.log(JSON.stringify(response.data.success));
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
export {login, register};
