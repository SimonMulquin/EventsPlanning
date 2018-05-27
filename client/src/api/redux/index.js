import { combineReducers } from 'redux';

import reducers from './reducers.js';
import actions from './actions.js';

export default combineReducers(reducers);

export const {
  setContent
} = actions;