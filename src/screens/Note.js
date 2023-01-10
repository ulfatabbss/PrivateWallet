import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {TextInput} from 'react-native';
import MyWrapper from '../components/MyWrapper';

const Note = ({navigation, route}) => {
  const {selected, cat} = route.params;
  return (
    <MyWrapper>
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            {borderColor: selected == 'Expense' ? '#5176C2' : '#FFB841'},
          ]}>
          <TextInput
            style={{fontSize: 18, color: 'grey'}}
            placeholder={'Enter Here'}
            multiline={true}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: '70%',
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'center',
            borderColor: selected == 'Expense' ? '#5176C2' : '#FFB841',
            borderWidth: 3,
          }}
          onPress={() => navigation.navigate('AddRecord', {cat: cat})}>
          <Text style={styles.textStyle}>Done</Text>
        </TouchableOpacity>
      </View>
    </MyWrapper>
  );
};

export default Note;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width - 40,
    borderRadius: 20,
    borderWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  textStyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
