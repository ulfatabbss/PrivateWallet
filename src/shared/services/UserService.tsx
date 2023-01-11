import {HTTP_CLIENT} from '../exporter';
import {endPoints} from '../utils/endpoint';
const loginService = (obj: any) => {
  return HTTP_CLIENT.post(endPoints.login, obj);
};
const signupService = (obj: any) => {
  return HTTP_CLIENT.post(endPoints.signUP, obj);
};
const getAmount = (id: any, obj: any) => {
  console.log(id, 'idddddddddddddd');
  return HTTP_CLIENT.get(`${endPoints.getAmont}/${id}`);
};
const forgotPaswordService = (obj: any) => {
  return HTTP_CLIENT.post(endPoints.forgot, obj);
};
const resetPaswordService = (obj: any) => {
  return HTTP_CLIENT.post(endPoints.restPassword, obj);
};

const socialLogin = (obj: any) => {
  return HTTP_CLIENT.post(endPoints.handleSocialLogin, obj);
};
const updateAcount = (id: any, obj: any) => {
  console.log(id, 'idddddddddddddd');
  return HTTP_CLIENT.get(`${endPoints.getAmont}/${id}`);
};

export {
  loginService,
  signupService,
  getAmount,
  forgotPaswordService,
  resetPaswordService,
  socialLogin,
  updateAcount,
};
