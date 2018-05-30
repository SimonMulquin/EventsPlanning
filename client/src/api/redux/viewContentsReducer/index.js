import merge from 'deepmerge';

import initial from 'configs/initialViewContents';

import withProps from './withPropsReducer';

const actions = {
  "VC_UPDATE": (state, payload) => merge(state, payload),
  "VC_CLEAN": (state, payload) => [],
  "VC_RESET": (state, payload) => initial,
  "VC_ADD": (state, payload) => {
    const test = initial[0];
    return [...state, {...test, withProps: {...test.withProps, title: payload.name}}]
  }
}; 

export default (state = initial, { type, payload }) => 
  payload && actions[type] ? 
  actions[type](state, payload) : 
  state.map((nestedState, index) => payload && index === payload.index ? 
    {
      ...nestedState,
      withProps: withProps(nestedState.withProps, { type, payload })
    }:
     nestedState
  )
;