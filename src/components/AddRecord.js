import { StyleSheet, Text, View ,Dimensions,ImageBackground,StatusBar,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const AddRecord = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
  <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
        <View style={styles.card}>
        <ImageBackground
          style={styles.dashbordcard}
          source={require('../assets/dashbordCard.png')}>

          </ImageBackground>
        </View>
        <View style={styles.rowData}>
<Text style={{color:'#233A6B',fontSize:18,fontWeight:'600',marginLeft:20}}>Generals</Text>
</View>
<TouchableOpacity style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/notification.png')}/>
<View style={{marginLeft:20}}>
<Text style={styles.cattex}>
Account
  </Text>
  {/* <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Manage your e-wallet accounts
  </Text> */}
</View>

</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/forwordArrow.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/notification.png')}/>
<View style={{marginLeft:20}}>
<Text style={styles.cattex}>
Category
  </Text>
  {/* <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Manage your e-wallet accounts
  </Text> */}
</View>

</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/forwordArrow.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/notification.png')}/>
<View style={{marginLeft:20}}>
<Text style={styles.cattex}>
Date & Time
  </Text>
  {/* <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Manage your e-wallet accounts
  </Text> */}
</View>

</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/forwordArrow.png')}/>
      </TouchableOpacity>
      <View style={styles.rowData}>
<Text style={{color:'#233A6B',fontSize:18,fontWeight:'600',marginLeft:20}}>More Detail</Text>
</View>
      <TouchableOpacity style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/notification.png')}/>
<View style={{marginLeft:20}}>
<Text style={styles.cattex}>
Note
  </Text>
  {/* <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Manage your e-wallet accounts
  </Text> */}
</View>

</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/forwordArrow.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/notification.png')}/>
<View style={{marginLeft:20}}>
<Text style={styles.cattex}>
Payment type
  </Text>
  {/* <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Manage your e-wallet accounts
  </Text> */}
</View>

</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/forwordArrow.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/notification.png')}/>
<View style={{marginLeft:20}}>
<Text style={styles.cattex}>
Add location 
  </Text>
  {/* <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Manage your e-wallet accounts
  </Text> */}
</View>

</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/forwordArrow.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowData}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/notification.png')}/>
<View style={{marginLeft:20}}>
<Text style={styles.cattex}>
Attach photo
  </Text>
  {/* <Text style={{fontSize:10,color:'#898E9A',fontWeight:'bold'}}>
  Manage your e-wallet accounts
  </Text> */}
</View>

</View>
<Image resizeMode='contain' style={{height:20,width:20}} source={require('../assets/forwordArrow.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{  position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 20,height:60,width:'90%',backgroundColor:'#5176C2',alignSelf:'center',borderRadius:10,marginTop:100,justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>
Save
</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddRecord

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        height: 200,
        width: Dimensions.get('window').width,
        alignSelf: 'center',
        overflow: 'hidden',
      }, 
       dashbordcard: {
        height: '100%',
        width: '100%',
      },
       rowData:{
        height:50,width:'100%',flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',paddingHorizontal:15,
        borderBottomColor:'#D9D9D9',
        borderBottomWidth:2,justifyContent:'space-between'
      },cattex:{
        fontSize:16,color:'#1A2337',fontWeight:'600'},
})