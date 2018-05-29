import merge from 'deepmerge';

import targetedDate from './targetedDateReducer';

const actions = {
  "VC_WP_UPDATE": (state, payload) => merge(state, payload),
};

export default (state, { type, payload }) => 
  payload && actions[type] ? 
    actions[type](state, payload) : 
  {
    ...state,
    targetedDate: targetedDate(state.targetedDate, {type, payload})
  }
;