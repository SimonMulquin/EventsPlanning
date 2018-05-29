import { combineReducers } from 'redux';

import viewContents from './viewContentsReducer';

export default combineReducers({
  viewContents,
});

export const addToTargetedDate = payload => ({
  type: "VC_ADD_TO_TARGETED_DATE",
  payload
});