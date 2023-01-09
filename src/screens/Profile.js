import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-virtualized-view';

import {useDispatch, useSelector} from 'react-redux';
import {setIsLoggedIn} from '../shared/redux';
const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {userFormData} = useSelector(state => state.root.user);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          resizeMode="cover"
          style={styles.card}
          source={require('../assets/dashbordCard.png')}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1673263018~exp=1673263618~hmac=8fc521eab22d00bb4e922c880f2189ec08f350ab3e364bfcd1239d24b7f136d6',
            }}
            style={styles.image}
          />

          <View>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
              {userFormData.data.name}
            </Text>
            <Text style={{fontSize: 14, color: '#fff', marginTop: 5}}>
              {userFormData.data.email}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditProfile', {imgage: img});
        }}
        style={{
          height: 60,
          borderColor: 'grey',
          marginHorizontal: 20,
          borderBottomWidth: 1,
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require('../assets/user.png')}
        />
        <Text style={styles.text}>Edit Profile</Text>
        {/* <TouchableOpacity onPress={()=>{navigation.navigate('EditProfile')}}>
  <Text style={{color:'#233A6B',marginLeft:180}}>Edit</Text> */}
      </TouchableOpacity>

      <View
        style={{
          borderColor: 'grey',
          marginHorizontal: 20,
          borderBottomWidth: 1,
          marginHorizontal: 20,
          paddingVertical: 15,
        }}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            style={{height: 20, width: 20}}
            source={require('../assets/graph.png')}
          />
          <Text style={styles.text}>Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginVertical: 10}}>
          <Image
            resizeMode="contain"
            style={[styles.icon, {tintColor: '#233A6B'}]}
            source={require('../assets/historyicon.png')}
          />
          <Text style={styles.text}>Recent transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={require('../assets/categ.png')}
          />
          <Text style={styles.text}>Category chart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}
        style={{
          height: 60,
          borderColor: 'grey',
          marginHorizontal: 20,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require('../assets/setting.png')}
        />
        <Text style={styles.text}>Setting</Text>
      </TouchableOpacity>
      <View
        style={{
          borderColor: 'grey',
          marginHorizontal: 20,
          borderBottomWidth: 1,
          marginHorizontal: 20,
          paddingVertical: 15,
        }}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={require('../assets/question.png')}
          />
          <Text style={styles.text}>Help and support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginVertical: 10}}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={require('../assets/faq.png')}
          />
          <Text style={styles.text}>Faq</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={require('../assets/rating.png')}
          />
          <Text style={styles.text}>Rate Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginVertical: 10}}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={require('../assets/shear.png')}
          />
          <Text style={styles.text}>Share App</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: '80%',
          backgroundColor: '#5176C2',
          alignSelf: 'center',
          borderRadius: 5,
          marginTop: 35,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
        onPress={() => {
          dispatch(setIsLoggedIn(false));
        }}>
        <Image
          resizeMode="contain"
          style={{height: 20, width: 20, marginRight: 10}}
          source={require('../assets/logout.png')}
        />
        <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
          LOGOUT
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 150,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#5176C2',
    marginHorizontal: 20,
  },
  text: {
    color: '#233A6B',
    marginLeft: 20,
    fontSize: 14,
  },
  icon: {
    height: 20,
    width: 20,
    marginVertical: 2,
  },
});
