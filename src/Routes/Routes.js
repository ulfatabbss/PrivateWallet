import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import AppStack from '../navigations/AppStack';
import AuthStack from '../navigations/AuthStack';
const Routes = () => {
  const {isLoggedIn} = useSelector(state => state.root.user);
  return (
    <SafeAreaProvider>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </SafeAreaProvider>
  );
};

export default Routes;
