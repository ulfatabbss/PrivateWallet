import { StyleSheet, Text, View,Image,ImageBackground,StatusBar } from 'react-native'
import React,{useState,useEffect} from 'react'
import {StackActions} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(async () => {
          navigation.dispatch(StackActions.replace('GetStartScreen'));
        }, 3000);
      }, []);
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor={'#5176C2'} />
     <ImageBackground source={require('../assets/SplashScreen.jpg')} style={{flex:1,height:'100%',width:'100%'}}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})