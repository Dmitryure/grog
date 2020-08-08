// Только добавь редьюсер
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { reducer } from './reducers';

export const store = createStore(reducer, { names: [] }, composeWithDevTools());

if (window.Cypress) {
  window.store = store;
}
