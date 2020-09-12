import { ADD_NAME } from './actionTypes';

export const addName = (name) => ({
  type: ADD_NAME,
  payload: name,
});
