import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-virtualized-view';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
     <View style={styles.card}>
<Image source={{uri:'https://i.pinimg.com/236x/7c/43/cf/7c43cfe35eb73457476b449d17dfee60.jpg'}} style={styles.image}/>
<View>
  <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>Sahil Sial</Text>
  <Text style={{fontSize:14,color:'#fff',marginTop:5}}>Sahil@gmai.com</Text>
</View>
     </View>
     <View style={{height:60,borderColor:'grey',marginHorizontal:20,borderBottomWidth:1,marginTop:10,flexDirection:'row',alignItems:'center',alignItems:'center'}}>
<Image resizeMode='contain' style={styles.icon} source={require('../assets/user.png')}/>
<Text style={styles.text}>Profile</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('EditProfile')}}>
  <Text style={{color:'#233A6B',marginLeft:180}}>Edit</Text>
</TouchableOpacity>
     </View>
     <View style={{borderColor:'grey',marginHorizontal:20,borderBottomWidth:1,marginHorizontal:20,paddingVertical:15}}>
      <TouchableOpacity style={{flexDirection:'row'}}>
      <Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/graph.png')}/>
<Text style={styles.text}>Summary</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',marginVertical:10}}>
      <Image resizeMode='contain' style={[styles.icon,{tintColor:'#233A6B'}]} source={require('../assets/historyicon.png')}/>
<Text style={styles.text}>Recent transactions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row'}}>
      <Image resizeMode='contain' style={styles.icon} source={require('../assets/categ.png')}/>
<Text style={styles.text}>Category chart</Text>
      </TouchableOpacity>
     </View>
     <TouchableOpacity style={{height:60,borderColor:'grey',marginHorizontal:20,borderBottomWidth:1,flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={styles.icon} source={require('../assets/setting.png')}/>
<Text style={styles.text}>Setting</Text>
     </TouchableOpacity>
     <View style={{borderColor:'grey',marginHorizontal:20,borderBottomWidth:1,marginHorizontal:20,paddingVertical:15}}>
      <TouchableOpacity style={{flexDirection:'row'}}>
      <Image resizeMode='contain' style={styles.icon} source={require('../assets/question.png')}/>
<Text style={styles.text}>Help and support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',marginVertical:10}}>
      <Image resizeMode='contain'style={styles.icon} source={require('../assets/faq.png')}/>
<Text style={styles.text}>Faq</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row'}}>
      <Image resizeMode='contain' style={styles.icon} source={require('../assets/rating.png')}/>
<Text style={styles.text}>Rate Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',marginVertical:10}}>
      <Image resizeMode='contain' style={styles.icon} source={require('../assets/shear.png')}/>
<Text style={styles.text}>Share App</Text>
      </TouchableOpacity>
     </View>
     <TouchableOpacity style={{height:50,width:'80%',backgroundColor:'#5176C2',alignSelf:'center',borderRadius:5,marginTop:20,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
<Image resizeMode='contain' style={{height:20,width:20,marginRight:10}} source={require('../assets/logout.png')}/>
<Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>LOGOUT</Text>
     </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  card:{
    height:150,
    backgroundColor:'#5176C2',
    padding:20,flexDirection:'row',alignItems:'center'
    
  },
  image:{
    height:80,width:80,borderRadius:40,
    borderWidth:2,borderColor:'#5176C2',marginHorizontal:10
  },
  text:{
    color:'#233A6B',marginLeft:20,fontSize:14
  },
  icon:
    {
      height:20,width:20,marginVertical:2
    }
  
});
