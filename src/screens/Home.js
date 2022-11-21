import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,StatusBar,
  View,
} from 'react-native';
import React from 'react';
import {AllCategories} from '../components/Catagories';
import {ScrollView} from 'react-native-virtualized-view';
import Modal from 'react-native-modal';
import {useState} from 'react';
import {button} from '../utilis/style';
import Graph from '../components/Graph';
const Home = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [selected, setSelected] = useState('Day');
  const [color, setColor] = useState('white');

  const myCategories = ({item}) => (
    <View style={{justifyContent:'center',alignItems:'center'}} >
 <TouchableOpacity style={styles.categoryCard} >
      <Image
        resizeMode="contain"
        style={{height: 30, width: 30}}
        source={item.img}></Image>
      
    </TouchableOpacity>
    <Text
        style={{
          fontSize: 12,
          fontWeight: '600',
          color: 'black',
        }}>
        {item.name}
      </Text>
    </View>
   
  );
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#5176C2'} />
      <View style={styles.card}>
        <ImageBackground
          style={styles.dashbordcard}
          source={require('../assets/dashbordCard.png')}>
          <View style={{padding: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.profileImg}
                source={require('../assets/profileimg.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  marginLeft: 12,
                  fontWeight: '600',
                }}>
                Fighter Girl
              </Text>
<TouchableOpacity onPress={() => navigation.openDrawer()}>
<Image
                style={{height: 24, width: 24, marginLeft: 160}}
                source={require('../assets/drawer.png')}
              />
</TouchableOpacity>
            
            </View>
            <Text style={{color: 'white', marginTop: 30}}>
              Available Balance
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'white',
                  marginTop: 10,
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                Rs7900.00
              </Text>

              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{
                    backgroundColor: 'white',
                    height: 20,
                    marginLeft: 5,
                    width: 20,
                    alignItems: 'center',
                    borderRadius: 25,
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{height: 12, width: 12}}
                    source={require('../assets/editbalance.png')}
                  />
                </TouchableOpacity>

                <Modal isVisible={isModalVisible}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: 250,
                        width: Dimensions.get('window').width - 40,
                        borderRadius: 25,
                        paddingLeft: 10,
                        backgroundColor: '#fff',
                      }}>
                      <View
                        style={{
                          height: 60,
                          width: Dimensions.get('window').width - 40,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 22,
                            fontWeight: '600',
                            color: '#233A6B',
                          }}>
                          Edit Balance
                        </Text>
                        <TouchableOpacity onPress={toggleModal}>
                          <Image
                            style={{height: 25, width: 25, marginRight: 10}}
                            source={require('../assets/close.png')}
                          />
                        </TouchableOpacity>
                      </View>
                      <Text style={{color: '#000', margin: 10}}>
                        Avialable Balance
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: 50,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: '#000',
                            marginLeft: 10,
                          }}>
                          RS
                        </Text>
                        <TextInput
                          style={{
                            height: 50,
                            width: 120,
                            marginLeft: 5,
                            color: '#000',
                            fontSize: 22,
                            fontWeight: 'bold',
                          }}
                          placeholderTextColor= 'grey'
                          cursorColor={'black'}
                          placeholder={'7900.00'}
                          keyboardType={'numeric'}
                        />
                      </View>
                      <TouchableOpacity
                        style={[button, {height: 40, width: '80%', margin: 20}]}
                        onPress={toggleModal}>
                        <Text
                          style={{
                            alignSelf: 'center',
                            color: '#fff',
                            fontSize: 18,
                          }}>
                          Done
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity style={styles.incomeExpenseCard} onPress={()=>{navigation.navigate('AddRecord')}}>
                <Text
                  style={{color: '#233A6B', fontSize: 16, fontWeight: '900'}}>
                  + Add income
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.incomeExpenseCard}>
                <Text
                  style={{color: '#233A6B', fontSize: 16, fontWeight: '900'}}>
                  + Add Expence
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          height: 400,
          width: '90%',
          alignSelf: 'center',
          backgroundColor: 'white',
          elevation: 5,
          borderRadius: 20,
          shadowColor: 'darkblue',
        }}>
        <Text
          style={[
            styles.h1,
            {alignSelf: 'center', fontSize: 20, marginTop: 10},
          ]}>
          Balance Trend
        </Text>
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: '#5176C2',
            borderRadius: 5,
            marginTop: 14,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setSelected('Day')}
            style={{
              height: 40,
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,

              backgroundColor: selected == 'Day' ? 'white' : '#5176C2',
            }}>
            <Text style={{color: selected == 'Day' ? 'black' : 'white'}}>
              Day
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected('Month')}
            style={{
              height: 40,
              width: '30%',
              borderRadius: 5,

              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: selected == 'Month' ? 'white' : '#5176C2',
            }}>
            <Text style={{color: selected == 'Month' ? 'black' : 'white'}}>
              Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected('year')}
            style={{
              height: 40,
              width: '30%',
              borderRadius: 5,

              justifyContent: 'center',
              alignItems: 'center',

              backgroundColor: selected == 'year' ? 'white' : '#5176C2',
            }}>
            <Text style={{color: selected == 'year' ? 'black' : 'white'}}>
              year
            </Text>
          </TouchableOpacity>
        </View>
        <Graph />
      </View>
      <Text
        style={{
          margin: 22,
          fontSize: 24,
          color: '#233A6B',
          fontWeight: 'bold',
        }}>
        Category
      </Text>
      <View style={{flex: 1, width: '94%', alignSelf: 'center', bottom: 20}}>
        <FlatList
          renderItem={myCategories}
          data={AllCategories}
          numColumns={4}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 250,
    width: Dimensions.get('window').width - 20,
    marginTop: 20,
    marginVertical: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  dashbordcard: {
    height: '100%',
    width: '100%',
  },
  h1: {
    color: '#233A6B',
    fontSize: 16,
    fontWeight: '900',
  },
  categoryCard: {
    height: 80,
    width: Dimensions.get('window').width / 4 - 20,
    backgroundColor: 'white',
    margin: 8,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  incomeExpenseCard: {
    backgroundColor: 'white',
    height: 40,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    height: 40,
    width: 40,
  },
});
