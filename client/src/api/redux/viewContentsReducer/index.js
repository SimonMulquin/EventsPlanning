import merge from 'deepmerge';

import initial from 'configs/initialViewContents';

import withProps from './withPropsReducer';

//could improve based on https://stackoverflow.com/questions/36786244/nested-redux-reducers

const actions = (state, payload) => ({
  "VC_UPDATE": merge(state, payload),
  "VC_CLEAN": [],
  "VC_RESET": initial
}); 

export default (state = initial, { type, payload }) => 
  actions(state, payload)[type] ? 
  actions(state, payload)[type] : 
  state.map((nestedState, index) => 
    payload && index === payload.contentIndex ? 
    {
      ...nestedState,
      withProps: withProps(state, {type, payload})
    }:
     nestedState
  )
;