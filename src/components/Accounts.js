import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './Header'

const Accounts = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
   <Header navigation={navigation} text={'Accounts'}  color={'#5176C2'}/>
      <View style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:40,width:40,borderRadius:20}} source={{uri:"https://i.pinimg.com/236x/98/e3/44/98e344d51bb96837bf70ee8303854992.jpg"}}/>
<View style={{marginLeft:20}}>
<Text style={{fontSize:16,color:'#1A2337',fontWeight:'bold'}}>
Sahil sial
  </Text>
  <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Sahil@gmai.com </Text>
</View>

</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/dell.png')}/>
      </View>
      <View style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:40,width:40,borderRadius:20}} source={{uri:"https://i.pinimg.com/236x/20/4a/78/204a789a19f8e97fcb2e65ffd554bfc7.jpg"}}/>
<View style={{marginLeft:20}}>
<Text style={{fontSize:16,color:'#1A2337',fontWeight:'bold'}}>
Sahil sial
  </Text>
  <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Sahil@gmai.com </Text>
</View>

</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/dell.png')}/>
      </View>
      <TouchableOpacity style={{  position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 20,height:60,width:'90%',backgroundColor:'#5176C2',alignSelf:'center',borderRadius:10,marginTop:100,justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>
  Add
</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Accounts

const styles = StyleSheet.create({
    header:{
      height:60,
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:20
  
    },  icon:{
      height:24,
      width:24,marginRight:50
    },
    rowData:{
      height:60,width:'90%',flexDirection:'row',
      alignItems:'center',alignSelf:'center',
      // paddingHorizontal:10,
      borderBottomColor:'#D9D9D9',
      borderBottomWidth:2,justifyContent:'space-between'
    }
  })