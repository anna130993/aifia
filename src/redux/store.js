import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {initialState} from './initialState';
import {reducer as productsReducer} from './productsRedux';
import {reducer as orderReducer} from './orderRedux';

// Define reducers
const reducers = {
  products: productsReducer,
  order: orderReducer,
};

// Add blank reducers for initial state props without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined'){
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// Create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);