// Добавь сюда код
import SET_USER from "./actionTypes";

export default function setUser(user) {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
}
