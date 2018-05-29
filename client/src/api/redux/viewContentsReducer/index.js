import merge from 'deepmerge';

import initial from 'configs/initialViewContents';

import withProps from './withPropsReducer';

const actions = (state, payload) => ({
  "VC_UPDATE": merge(state, payload),
  "VC_CLEAN": [],
  "VC_RESET": initial
}); 

export default (state = initial, { type, payload }) => 
  Object.keys(actions).includes(type) ? 
  actions(state, payload)[type] : 
  state.map((nestedState, index) => {
    console.log(nestedState.withProps);
    return true ? 
    {
      ...nestedState,
      withProps: withProps(nestedState.withProps, { type, payload })
    }:
     nestedState
  })
;