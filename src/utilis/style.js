import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const button = {
  height: '10%',
  width: '60%',
  borderRadius: 10,
  backgroundColor: '#5176C2',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
};
const inputText = {
  marginTop: 10,
  height: 50,
  paddingHorizontal: 10,
  color: '#000',
  width: Width - 70,
  alignSelf: 'center',
  borderWidth: 1,
  borderColor: '#5176C2',
  borderRadius: 5,
};
export {button, inputText};
