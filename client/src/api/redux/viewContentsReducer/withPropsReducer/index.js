import merge from 'deepmerge';

import targetedDateReducer from './targetedDateReducer';

const actions = (state, payload) => ({
  "VC_WP_UPDATE": merge(state, payload),
});

export default (state, { type, payload }) => 
  actions(state, payload)[type] ? 
  actions(state, payload)[type] : 
  {
    ...state,
    targetedDate: targetedDateReducer(state, {type, payload})
  }
;