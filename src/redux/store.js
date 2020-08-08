// Только добавь редьюсер
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

export const store = createStore((state) => state, { names: [] }, composeWithDevTools());

if (window.Cypress) {
  window.store = store;
}
