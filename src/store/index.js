import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import APIMiddleware from '~/src/middleware/API';

import reducers from '~/src/reducers';

const middleware = [APIMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(reducers), 
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;