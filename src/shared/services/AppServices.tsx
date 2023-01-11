import {HTTP_CLIENT} from '../exporter';
import {endPoints} from '../utils/endpoint';

const getRecordRequest = (id: any, cat: any, obj: any) => {
  console.log(id, 'idddddddddddddd222222222');
  console.log(cat, 'cattttttttttttttttttt');

  return HTTP_CLIENT.get(`${endPoints.getRecord}/${id}/${cat}`);
};
const addRecord = (obj: any) => {
  console.log(obj, 'objjjjjjjjjjjjjjjjjjjj');

  return HTTP_CLIENT.post(`${endPoints.addRecord}`, obj);
};
const updateAmount = (id: any, obj2: any) => {
  console.log(id, 'idddddddddddddddddd');
  console.log(obj2, 'amounttttttttttttttt');

  return HTTP_CLIENT.put(`${endPoints.updateAmount}/${id}`, obj2);
};

const categoriesList = (obj: any) => {
  return HTTP_CLIENT.get(endPoints.categoriesList, obj);
};
const updateProfile = (obj: any) => {
  console.log(obj, 'obj updateeeeeeeeeeee');

  return HTTP_CLIENT.post(endPoints.updateProfile, obj);
};

export {
  getRecordRequest,
  addRecord,
  updateAmount,
  categoriesList,
  updateProfile,
};
