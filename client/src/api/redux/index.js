import { combineReducers } from 'redux';

import views from './viewsReducer';

const user = (state = JSON.parse(sessionStorage.getItem("user")), { type, payload }) => type === "SET_USER" ? payload : state;

export default combineReducers({
  views,
  user,
});

export const setUser = payload => ({
  type: "SET_USER",
  payload
})

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