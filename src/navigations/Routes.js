import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {AuthContext} from './AuthProvider';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {Store,persistor} from '../redux/store'
const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
    <NavigationContainer>
      {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
};

export default Routes;
