import { ADD_NAME } from './actionTypes';

export const namesReducer = (state, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        names: [...state.names, action.payload],
      };
    default:
      return state;
  }
};
