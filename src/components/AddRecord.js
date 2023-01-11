import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useSelector} from 'react-redux';
import {TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MyWrapper from './MyWrapper';
import {addRecordValidationSchema} from '../shared/exporter';
import {Formik} from 'formik';
import {addRecord, updateAmount} from '../shared/services/AppServices';
import {toastMessage} from '../shared/utils/constants';
import {setTotalAmount, store} from '../shared/redux';

const AddRecord = ({navigation, route}) => {
  const {cat, resource} = route.params;
  const [selected, setSelected] = useState(resource);
  const [datePicker, setDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dt, setDt] = useState(new Date().toLocaleDateString('en-US'));
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US'));
  const {userFormData, totalAmount} = useSelector(state => state.root.user);
  const total = totalAmount[0]?.amount;
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Cash', value: 'cash'},
    {label: 'Account', value: 'account'},
  ]);
  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDt(value.toLocaleDateString('en-US'));
    setTime(value.toLocaleTimeString('en-US'));
    setDatePicker(false);
  }
  const handleRecord = values => {
    setLoading(true);
    const id = userFormData.data._id;
    const obj = {
      user_id: id,
      cat: cat,
      amount: values.amount,
      time: time,
      date: dt,
      paymentType: value,
      resource: selected,
      decs: values.decs,
    };

    addRecord(obj)
      .then(({data}) => {
        console.log(data, 'dataaaaaaaaaaaaaaaaaaaaaaaaaa');
      })
      .catch(err => {
        toastMessage('error', err?.response?.data?.message);
      });
    const obj2 =
      resource == 'Expense'
        ? {amount: parseInt(total) - parseInt(values.amount)}
        : {amount: parseInt(total) + parseInt(values.amount)};
    updateAmount(id, obj2)
      .then(({data}) => {
        console.log(data, 'update successssssssssssssss');
        store.dispatch(setTotalAmount(data.data));
        navigation.replace('MyTabs');
      })
      .catch(err => {
        toastMessage('error', err?.response?.data?.message);
      })
      .finally(() => setLoading(false));
  };
  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    );
  }
  return (
    <MyWrapper>
      <Formik
        initialValues={{
          amount: '',
          paymentType: '',
          decs: '',
        }}
        validateOnMount={true}
        validationSchema={addRecordValidationSchema}
        onSubmit={values => {
          handleRecord(values);
          // console.log(values);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          isSubmitting,
          handleSubmit,
          setFieldValue,
        }) => (
          <View
            style={{
              height: Dimensions.get('window').height,
              backgroundColor: '#fff',
            }}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={selected == 'Expense' ? '#5176C2' : '#FFB841'}
            />

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View
                  style={[
                    styles.modalView,
                    {
                      backgroundColor:
                        selected == 'Expense' ? '#5176C2' : '#FFB841',
                    },
                  ]}>
                  <TouchableOpacity
                    style={{
                      height: 50,
                      width: '90%',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      position: 'absolute',
                      bottom: 20,
                      justifyContent: 'center',
                    }}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View style={styles.card}>
              <View
                style={[
                  styles.dashbordcard,
                  {
                    backgroundColor:
                      selected == 'Expense' ? '#5176C2' : '#FFB841',
                  },
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginHorizontal: 30,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 22, fontWeight: 'bold', color: '#fff'}}>
                    Add Record
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#F8F8F8',
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginTop: 20,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: '#FCFCFC',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => setSelected('Expense')}
                    style={{
                      height: 40,
                      width: '40%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      backgroundColor:
                        selected == 'Expense' ? '#5C90FF' : '#FCFCFC',
                    }}>
                    <Text
                      style={{
                        color: selected == 'Expense' ? 'black' : 'black',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Expense
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setSelected('Income')}
                    style={{
                      height: 40,
                      width: '40%',
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor:
                        selected == 'Income' ? '#FFB841' : '#FCFCFC',
                    }}>
                    <Text
                      style={{
                        color: selected == 'Income' ? 'black' : 'black',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Income
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginHorizontal: 30,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 22, fontWeight: 'bold', color: '#fff'}}>
                    PKR
                  </Text>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: '#F8F8F8',
                    }}>
                    {selected == 'Expense' ? total : total}
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.rowData, {marginTop: 5}]}>
              <Text
                style={{
                  color: '#233A6B',
                  fontSize: 20,
                  fontWeight: '900',
                  marginLeft: 20,
                }}>
                Generals
              </Text>
            </View>
            <TouchableOpacity style={styles.rowData}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  style={{height: 24, width: 24}}
                  source={require('../assets/money.png')}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={styles.cattex}>Amount</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    width: 100,
                    padding: 0,
                  }}
                  placeholder={'Enter Amount'}
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={handleChange('amount')}
                  value={values.amount}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowData}
              onPress={() => {
                navigation.navigate('Catagories', {res: selected});
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  style={{height: 24, width: 24}}
                  source={require('../assets/cat1.png')}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={styles.cattex}>Category</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 16,
                    fontWeight: '600',
                    marginRight: 20,
                  }}>
                  {cat != null ? cat : 'Required'}
                </Text>
                <Image
                  resizeMode="contain"
                  style={{height: 16, width: 16}}
                  source={require('../assets/forwordArrow.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowData} onPress={showDatePicker}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  style={{height: 24, width: 24}}
                  source={require('../assets/datetime.png')}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={styles.cattex}>Date & Time</Text>
                </View>
                {datePicker && (
                  <DateTimePicker
                    value={date}
                    mode="date"
                    timeZoneOffsetInMinutes={60}
                    minuteInterval={1}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelected}
                    style={styles.datePicker}
                  />
                )}
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 16,
                    fontWeight: '600',
                    marginRight: 20,
                  }}>
                  {date.toLocaleDateString()}
                </Text>
                <Image
                  resizeMode="contain"
                  style={{height: 16, width: 16}}
                  source={require('../assets/forwordArrow.png')}
                />
              </View>
            </TouchableOpacity>

            <View style={[styles.rowData, {marginTop: 5}]}>
              <Text
                style={{
                  color: '#233A6B',
                  fontSize: 20,
                  fontWeight: '900',
                  marginLeft: 20,
                }}>
                More Detail
              </Text>
            </View>
            <TouchableOpacity
              style={styles.rowData}
              onPress={() =>
                navigation.navigate('Note', {selected: selected, cat: cat})
              }>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  style={{height: 20, width: 20, tintColor: '#5176C2'}}
                  source={require('../assets/note.png')}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={styles.cattex}>Note</Text>
                </View>
              </View>
              <Image
                resizeMode="contain"
                style={{height: 16, width: 16}}
                source={require('../assets/forwordArrow.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.rowData}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  style={{height: 20, width: 20}}
                  source={require('../assets/location.png')}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={styles.cattex}>Add location</Text>
                </View>
              </View>
              <Image
                resizeMode="contain"
                style={{height: 16, width: 16}}
                source={require('../assets/forwordArrow.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowData}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  style={{height: 20, width: 20}}
                  source={require('../assets/cam.png')}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={styles.cattex}>Attach photo</Text>
                </View>
              </View>
              <Image
                resizeMode="contain"
                style={{height: 16, width: 16}}
                source={require('../assets/forwordArrow.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowData}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  resizeMode="contain"
                  style={{height: 20, width: 20, tintColor: '#5176C2'}}
                  source={require('../assets/payment.png')}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={styles.cattex}>Payment type</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <DropDownPicker
                  style={{borderWidth: 0}}
                  disableBorderRadius={true}
                  containerStyle={{
                    width: 150,
                  }}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                position: 'absolute',
                alignSelf: 'center',
                bottom: 10,
                height: 50,
                width: '90%',
                backgroundColor: selected == 'Expense' ? '#5176C2' : '#FFB841',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.textStyle}>Save</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </MyWrapper>
  );
};

export default AddRecord;

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
  rowData: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
    justifyContent: 'space-between',
  },
  cattex: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '600',
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
  modalView: {
    margin: 20,
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width - 40,
    borderRadius: 20,
    borderWidth: 2,
    padding: 35,
    alignItems: 'center',
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
