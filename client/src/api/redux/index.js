import { combineReducers } from 'redux';

import viewContents from './viewContentsReducer';

export default combineReducers({
  viewContents,
});

export const actionCreator = dispatch => (type, payload) => dispatch({type, payload});