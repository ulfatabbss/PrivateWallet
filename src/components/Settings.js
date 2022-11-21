import { StyleSheet, Text, View,Image,Switch, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Header from './Header';

const Settings = ({navigation}) => {
  const [switch1, setIsEnabled1] = useState(false);
  const [switch2, setIsEnabled2] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  return (
    <View style={{flex:1}}>
      <Header navigation={navigation} text={'Settings'} color={'#5176C2'}/>
      <TouchableOpacity onPress={()=>{navigation.navigate('Accounts')}}
       style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/acount.png')}/>
<View style={{marginLeft:20}}>
<Text style={{fontSize:16,color:'#1A2337',fontWeight:'bold'}}>
  Accounts
  </Text>
  <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Manage your e-wallet accounts
  </Text>
</View>
</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/forwordArrow.png')}/>
      </TouchableOpacity>
      <View style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/password.png')}/>
<View style={{marginLeft:20}}>
<Text style={{fontSize:16,color:'#1A2337',fontWeight:'bold'}}>
Password
  </Text>
  <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Required password on startup  </Text>
</View>

</View>
<Switch
          
              trackColor={{false: '#767577', true: '#5176C2'}}
              thumbColor={switch1 ? '#f4f3f4' : '#f4f3f4'}
              onValueChange={toggleSwitch1}
              value={switch1}></Switch>
      </View>
      <View style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/thumb.png')}/>
<View style={{marginLeft:20}}>
<Text style={{fontSize:16,color:'#1A2337',fontWeight:'bold'}}>
Fingerprint
  </Text>
  <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Required fingerprint on startup
  </Text>
</View>
</View>
<Switch
              trackColor={{false: '#767577', true: '#5176C2'}}
              thumbColor={switch2 ? '#f4f3f4' : '#f4f3f4'}
              onValueChange={toggleSwitch2}
              value={switch2}></Switch>
      </View>
      <TouchableOpacity style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/notification.png')}/>
<View style={{marginLeft:20}}>
<Text style={{fontSize:16,color:'#1A2337',fontWeight:'bold'}}>
Notifications
  </Text>
  {/* <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Manage your e-wallet accounts
  </Text> */}
</View>

</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/forwordArrow.png')}/>
      </TouchableOpacity>
      <View style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/dell.png')}/>
<View style={{marginLeft:20}}>
<Text style={{fontSize:16,color:'#EC4747',fontWeight:'bold'}}>
Delete Data
  </Text>
  {/* <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Manage your e-wallet accounts
  </Text> */}
</View>

</View>
      </View>
      <TouchableOpacity style={{  position: 'absolute',
        right: 0,
        bottom: 0,height:100,width:'100%',alignSelf:'center',borderTopColor:'#DCDCDC',borderTopWidth:1}}>
<Text style={{color:'#000',fontSize:16,fontWeight:'bold',marginTop:5,alignSelf:'center',}}>
Other Apps
</Text>
<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
<Image resizeMode='contain' style={{height:40,width:40,marginHorizontal:20}} source={require('../assets/f.png')} />
<View>
<Text style={{color:'grey',fontSize:16}}>Fitness Freak</Text>
<Text style={{color:'grey',fontSize:12}}>Webevise Technologies</Text>
  </View>
</View>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

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
    alignItems:'center',
    alignSelf:'center',
    borderBottomColor:'#D9D9D9',
    borderBottomWidth:2,justifyContent:'space-between'
  }
})