import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveDataInUserDefaults({key, value}) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Error saving data' + error);
  }
}

export async function getDataFromUserDefaults(key) {
  try {
    let item = await AsyncStorage.getItem(key);
    if (item !== null) {
      return item;
    }
  } catch (error) {
    console.log('Error saving data' + error);
  }

  return undefined;
}
