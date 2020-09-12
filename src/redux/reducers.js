// Добавь сюда код
import SET_USER from "./actionTypes";

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_USER:
      return [...state, action.payload.user];
    default:
      return state;
  }
}
