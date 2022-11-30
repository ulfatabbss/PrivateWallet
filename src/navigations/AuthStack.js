import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Verify from '../screens/Verify';
import ForgotPassword from '../screens/ForgotPassword';
import ConfirmPassword from '../screens/ConfirmPassword';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
