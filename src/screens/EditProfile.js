import { StyleSheet, Text, View,Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const EditProfile = () => {
  return (
    <View style={styles.container}>
    <View style={styles.card}>
<Image source={{uri:'https://i.pinimg.com/236x/7c/43/cf/7c43cfe35eb73457476b449d17dfee60.jpg'}} style={styles.image}/>
     </View>
     <Text style={[styles.text,{marginTop:100}]}>Name</Text>
     <View style={styles.textfield}>
     <TextInput style={{paddingHorizontal:20}} placeholder='Sahil Sial' 
     placeholderTextColor={'grey'}/>
     </View>
     <Text style={styles.text}>Email</Text>
     <View style={styles.textfield}>
     <TextInput style={{paddingHorizontal:20}} placeholder='test@yahoo.com' 
     placeholderTextColor={'grey'}/>
     </View>
     <Text style={styles.text}>Password</Text>
     <View style={styles.textfield}>
     <TextInput style={{paddingHorizontal:20}} placeholder='***********' 
     placeholderTextColor={'grey'}/>
     </View>
     <TouchableOpacity style={styles.button}>
<Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Done</Text>
     </TouchableOpacity>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container:{
        flex:1,backgroundColor:'#fff'
      },
      card:{
        height:150,
        backgroundColor:'#5176C2',
        justifyContent:'center',alignItems:'center'
        
      },
      image:{
        height:120,width:120,borderRadius:60,marginBottom:-100,
        borderWidth:2,borderColor:'#5176C2'
      },
      textfield:{
        height:50,width:'90%',
        borderWidth:1,borderRadius:5,
        borderColor:'#5176C2',alignSelf:'center'
      },
      text:{
        color:'#5176C2',marginLeft:25,fontSize:16,fontWeight:'bold',overflow:'hidden',backgroundColor:'#fff',width:100,height:20,marginBottom:5,marginVertical:10
      },button:{
width:'90%',backgroundColor:'#5176C2',height:50,borderRadius:10,alignSelf:'center',marginTop:30,alignItems:'center',justifyContent:'center'
      }
})