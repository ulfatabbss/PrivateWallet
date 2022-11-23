import { StyleSheet, Text, View,TouchableOpacity,Image,StatusBar } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
const SelectPage = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#5176C2',alignItems:'center'}}>  
    <StatusBar barStyle={'light-content'} backgroundColor={'#5176C2'} />  
        <Image style={{height:360,width:'100%',marginBottom:50,borderBottomLeftRadius:50,borderBottomRightRadius:50}} source={require('../assets/choice.png')} />
    <Text style={{color:'#fff',fontSize:26,fontWeight:'bold',paddingHorizontal:20,width:'90%'}}>Easy way to manage 
your e-wallet </Text>
<Text style={{fontSize:14,color:'#fff',paddingHorizontal:20,width:'90%'}}>Manage your every penny and
transaction with the ease</Text>
<TouchableOpacity onPress={()=>navigation.navigate('Login')}
 style={styles.button}>
<Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Login</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={()=>navigation.navigate('Signup')}
 style={styles.button}>
<Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Signup</Text>
</TouchableOpacity>
    </View>
  )
}

export default SelectPage

const styles = StyleSheet.create({
  button:{
    height:50,width:'80%',backgroundColor:'#fff',borderRadius:5,marginTop:20,justifyContent:'center',alignItems:'center'
  }
})