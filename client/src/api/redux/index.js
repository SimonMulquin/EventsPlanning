import { combineReducers } from 'redux';

import views from './viewsReducer';

export default combineReducers({
  views,
});

export const addToTargetedDate = payload => ({
  type: "VIEW_ADD_TO_TARGETED_DATE",
  payload
});

export const addView = payload => ({
  type: "VIEWS_ADD",
  payload
});

export const deleteView = payload => ({
  type: "VIEW_DELETE",
  payload
})