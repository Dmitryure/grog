// Только добавь редьюсер
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers';

const composeEnhancers = composeWithDevTools({ name: 'TEST_STORE' });

export const store = createStore(reducer, { names: [] }, composeEnhancers(applyMiddleware()));

if (window.Cypress) {
  window.store = store;
}
