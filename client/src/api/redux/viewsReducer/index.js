import merge from 'deepmerge';

import initial from 'configs/initialViewContents';

import viewState from './viewStateReducer';

const actions = {
  "VIEW_UPDATE": (state, payload) => merge(state, payload),
  "VIEW_DELETE": (state, {viewIndex}) => state.filter((e, i) => i != viewIndex),
  "VIEWS_CLEAN": (state, payload) => [],
  "VIEWS_RESET": (state, payload) => initial,
  "VIEWS_ADD": (state, {name}) => {
    const test = initial[0];
    return [...state, {...test, title: name}]
  }
}; 

export default (state = initial, { type, payload }) => 
  payload && actions[type] ? 
  actions[type](state, payload) : 
  state.map((view, index) => payload && index === payload.index ? 
    {
      ...view,
      state: viewState(view.state, { type, payload })
    }:
     view
  )
;