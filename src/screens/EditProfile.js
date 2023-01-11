import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import React from 'react';
import {Formik} from 'formik';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  LoginValidationSchema,
  updateProfileValidationShema,
} from '../shared/exporter';
import {updateProfile} from '../shared/services/AppServices';
import {primary} from '../utilis/colors';
import MyWrapper from '../components/MyWrapper';
import {useSelector} from 'react-redux';
import {setIsLoggedIn, setUserFormData, store} from '../shared/redux';
const EditProfile = ({navigation}) => {
  const {userFormData, totalAmount, categoryList, expenceList, incomeList} =
    useSelector(state => state.root.user);
  const id = userFormData.data._id;
  const [loading, setLoading] = useState(false);
  const [img, setImge] = useState(null);
  // const updateProfile = () => {
  //   if (!email || !password || !name) {
  //     alert('All fields are mandatory');
  //     return;
  //   }
  //   navigation.navigate('Profile');
  // };
  // useEffect(() => {
  //   const subscriber = firestore()
  //   .collection('users')
  //   .doc(auth().currentUser.uid)
  //   .onSnapshot(documentSnapshot => {
  //     console.log('User data: ', documentSnapshot.data());
  //     setImge(documentSnapshot.data().userImg)
  //   });

  //   // Stop listening for updates when no longer required
  //   return () => subscriber();
  //   }, [auth().currentUser.uid]);

  const handleImage = async () => {
    let options = {};
    const resultImg = await launchImageLibrary(options);
    setImge(resultImg.assets[0]?.uri);
  };

  const handleCamera = async () => {
    let options = {};
    const resultCam = await launchCamera(options);

    setImge(resultCam.assets[0]?.uri);
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handlUpdate = values => {
    setLoading(true);
    console.log(values, 'valuessssssss');
    const obj = {
      user_id: id,
      name: values.name,
      email: values.email,
      password: values.password,
    };

    updateProfile(obj)
      .then(({data}) => {
        // store.dispatch(setUserFormData(data));
        console.log(data, 'dataaaaaaaaaaaaaaaaaaaaaaaaaa');
        ToastAndroid.showWithGravity(
          'Your profile has been updated successfully',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        store.dispatch(setIsLoggedIn(false));
      })
      .catch(err => {
        ToastAndroid.showWithGravity(
          'Details are incorrect',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      })
      .finally(() => setLoading(false));
  };
  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={primary} />
      </View>
    );
  }

  return (
    <MyWrapper>
      <Formik
        initialValues={initialValues}
        validateOnMount={true}
        validationSchema={updateProfileValidationShema}
        onSubmit={values => {
          // console.log('values', values);
          handlUpdate(values);
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
          <View style={styles.container}>
            <View style={styles.card}>
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1673263018~exp=1673263618~hmac=8fc521eab22d00bb4e922c880f2189ec08f350ab3e364bfcd1239d24b7f136d6',
                }}
                style={styles.image}
              />
              <View style={styles.camIconView}>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: '#5176C2',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={toggleModal}>
                  <Image
                    source={require('../assets/add.png')}
                    style={styles.uploadIcon}></Image>
                </TouchableOpacity>

                {/* MODAL VIEW */}
                <Modal isVisible={isModalVisible}>
                  <View style={styles.modalCard}>
                    <TouchableOpacity
                      style={{marginTop: 10, marginRight: 5}}
                      onPress={toggleModal}>
                      <Image
                        style={{
                          height: 25,
                          width: 25,
                          alignSelf: 'flex-end',
                          borderWidth: 2,
                          borderColor: '#5176C2',
                          borderRadius: 20,
                        }}
                        source={require('../assets/close.png')}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        height: 180,
                        width: '100%',
                        marginTop: 10,
                        alignSelf: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={handleCamera}
                        style={styles.pictureAndGallery}>
                        <Text style={{color: '#fff'}}>Take a Picture</Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontWeight: '900',
                          color: 'grey',
                        }}>
                        OR
                      </Text>
                      <TouchableOpacity
                        onPress={handleImage}
                        style={styles.pictureAndGallery}>
                        <Text style={{color: '#fff'}}>Select from Gallery</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
            <Text style={[styles.text, {marginTop: 100}]}>Name</Text>
            <View style={styles.textfield}>
              <TextInput
                style={{paddingHorizontal: 20, color: '#000'}}
                placeholder="John"
                value={values.name}
                autoCapitalize={'none'}
                onChangeText={handleChange('name')}
              />
            </View>
            <Text style={styles.text}>Email</Text>
            <View style={styles.textfield}>
              <TextInput
                style={{paddingHorizontal: 20, color: '#000'}}
                placeholder="John@gmail.com"
                inputTitle={'Email Address'}
                value={values.email}
                keyboardType="email-address"
                autoCapitalize={'none'}
                onChangeText={handleChange('email')}
              />
            </View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.textfield}>
              <TextInput
                style={{paddingHorizontal: 20, color: '#000'}}
                placeholder="*********"
                value={values.password}
                inputTitle={'Password'}
                onChangeText={handleChange('password')}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleSubmit();
              }}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </MyWrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    height: 150,
    backgroundColor: '#5176C2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: -100,
    borderWidth: 4,
    borderColor: 'grey',
  },
  textfield: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#5176C2',
    alignSelf: 'center',
  },
  text: {
    color: '#5176C2',
    marginLeft: 25,
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden',
    backgroundColor: '#fff',
    width: 100,
    height: 20,
    marginBottom: 5,
    marginVertical: 10,
  },
  button: {
    width: '90%',
    backgroundColor: '#5176C2',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIcon: {
    height: '60%',
    width: '60%',
    alignSelf: 'center',
    tintColor: '#fff',
    backgroundColor: '#5176C2',
  },
  camIconView: {
    height: '80%',
    width: '30%',
    justifyContent: 'flex-end',
    top: 80,
    alignItems: 'flex-end',
    position: 'absolute',
  },
  modalCard: {
    flex: 0.3,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
  },
  pictureAndGallery: {
    backgroundColor: '#5176C2',
    height: 50,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
