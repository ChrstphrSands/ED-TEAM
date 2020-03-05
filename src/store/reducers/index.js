import { combineReducers } from 'redux';

import postReducer from './postReducer'

const createReducer = (asyncReducers) =>
  combineReducers({
    postReducer,
    ...asyncReducers
  });

export default createReducer;
