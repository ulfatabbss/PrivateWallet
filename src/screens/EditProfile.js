import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Modal from 'react-native-modal';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Dimensions} from 'react-native';

const EditProfile = () => {
  const [img, setImg] = useState(
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  );

  const handleImage = async () => {
    let options = {};
    const resultImg = await launchImageLibrary(options);
    setImg(resultImg.assets[0]?.uri);
  };

  const handleCamera = async () => {
    let options = {};
    const resultCam = await launchCamera(options);

    setImg(resultCam.assets[0]?.uri);
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{uri: img}} style={styles.image} />
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
          placeholder="Sahil Sial"
          placeholderTextColor={'grey'}
        />
      </View>
      <Text style={styles.text}>Email</Text>
      <View style={styles.textfield}>
        <TextInput
          style={{paddingHorizontal: 20, color: '#000'}}
          placeholder="test@yahoo.com"
          placeholderTextColor={'grey'}
        />
      </View>
      <Text style={styles.text}>Password</Text>
      <View style={styles.textfield}>
        <TextInput
          style={{paddingHorizontal: 20, color: '#000'}}
          placeholder="***********"
          placeholderTextColor={'grey'}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
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
