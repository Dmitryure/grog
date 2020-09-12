// Только добавь редьюсер
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { namesReducer } from './reducers';

const composeEnhancers = composeWithDevTools({ name: 'GROG_STORE' });

export const store = createStore(
  namesReducer,
  {
    names: [],
  },
  composeEnhancers(applyMiddleware()),
);

if (window.Cypress) {
  window.store = store;
}
