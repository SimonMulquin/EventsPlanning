import { combineReducers } from 'redux';

import viewContents from './reducers/viewContents.js';

export default combineReducers({
  viewContents,
});

export const actionCreator = dispatch => (type, payload) => dispatch({type, payload});