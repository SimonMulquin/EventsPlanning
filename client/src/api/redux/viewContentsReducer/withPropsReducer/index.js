import merge from 'deepmerge';

import initial from 'configs/initialViewContents';

import targetedDate from './targetedDateReducer';

const actions = (state, payload) => ({
  "VC_WP_UPDATE": merge(state, payload),
});

export default (state, { type, payload }) => 
  Object.keys(actions).includes(type) ? 
  actions(state, payload)[type] : 
  {
    ...state,
    targetedDate: targetedDate(state.targetedDate, {type, payload}) //should define a data date format
  }
;