import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

// rnBiometrics.isSensorAvailable().then(resultObject => {
//   const {available, biometryType} = resultObject;

//   if (available && biometryType === BiometryTypes.TouchID) {
//     console.log('TouchID is supported');
//   } else if (available && biometryType === BiometryTypes.FaceID) {
//     console.log('FaceID is supported');
//   } else if (available && biometryType === BiometryTypes.Biometrics) {
//     console.log('Biometrics is supported');
//     rnBiometrics.createKeys().then(resultObject => {
//       const {publicKey} = resultObject;
//       console.log('ljijin', publicKey);
//       sendPublicKeyToServer(publicKey);
//     });
//   } else {
//     console.log('Biometrics not supported');
//   }
// });

const AddItem = () => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity>
        <Image
          style={{height: 20, width: 20, tintColor: '#000'}}
          source={require('../assets/forwardarrow.png')}
        />
      </TouchableOpacity>
      <Text>AddItem</Text>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({});
