import merge from 'deepmerge';

import initial from 'configs/initialViewContents';

import withProps from './withPropsReducer';

const actions = {
  "VC_UPDATE": (state, payload) => merge(state, payload),
  "VC_CLEAN": (state, payload) => [],
  "VC_RESET": (state, payload) => initial
}; 

export default (state = initial, { type, payload }) => 
  payload && actions[type] ? 
  actions[type](state, payload) : 
  state.map((nestedState, index) => true ? 
    {
      ...nestedState,
      withProps: withProps(nestedState.withProps, { type, payload })
    }:
     nestedState
  )
;