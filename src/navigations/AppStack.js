import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import SelectPage from '../screens/SelectPage';
import GetStartScreen from '../screens/GetStartScreen';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import Statistics from '../screens/Statistics';
import Profile from '../screens/Profile';
import History from '../screens/History';
import AddItem from '../screens/AddItem';
import EditProfile from '../screens/EditProfile';
import Settings from '../components/Settings';
import Accounts from '../components/Accounts';
import AddRecord from '../components/AddRecord';
import Catagories from '../components/Catagories';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Verify from '../screens/Verify';
import ForgotPassword from '../screens/ForgotPassword';
import ConfirmPassword from '../screens/ConfirmPassword';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/homeicon.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#5176C2' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#5176C2' : '#A3A7B1',
                  fontSize: 10,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../assets/statisticsicon.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#5176C2' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#5176C2' : '#A3A7B1',
                  fontSize: 10,
                }}>
                Statics
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddItem"
        component={AddItem}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: 70,
                width: 70,
                alignItems: 'center',
                bottom: 24,

                justifyContent: 'center',
                backgroundColor: '#fff',
                borderRadius: 50,
                elevation: 5,
              }}>
              <Image
                resizeMode="contain"
                source={require('../assets/addicon.png')}
                style={{
                  height: 60,
                  width: 60,
                  tintColor: '#5176C2',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../assets/historyicon.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#5176C2' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#5176C2' : '#A3A7B1',
                  fontSize: 10,
                }}>
                History
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../assets/profileicon.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#5176C2' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#5176C2' : '#A3A7B1',
                  fontSize: 10,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="GetStartScreen" component={GetStartScreen} /> */}
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} /> */}
      {/* <Stack.Screen name="SelectPage" component={SelectPage} /> */}
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="AddItem" component={AddItem} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Accounts" component={Accounts} />
      <Stack.Screen name="AddRecord" component={AddRecord} />
      <Stack.Screen name="Catagories" component={Catagories} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
