// Только добавь редьюсер
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore, combineReducers } from "redux";
import reducer from "./reducers";

const composeEnhancers = composeWithDevTools({ name: "GROG_STORE" });

export const store = createStore(
  combineReducers({
    names: reducer,
  })
  // reducer,
  // (state) => state
  // { names: [] }
  // composeEnhancers(applyMiddleware())
);

if (window.Cypress) {
  window.store = store;
}
