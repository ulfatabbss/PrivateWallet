import {Image, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React,{useEffect} from 'react';
import {persistor, store} from './src/shared/redux/store';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './src/Routes/Routes';
import { initialConfig } from './src/shared/exporter';
import { getAmount } from './src/shared/services/UserService';



const App = () => {
    useEffect(() => {
    initialConfig();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
