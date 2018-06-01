const actions = {
  "VIEW_ADD_TO_TARGETED_DATE": (state, payload) => state.plus(payload)
};

export default (state, { type, payload }) =>
  payload && actions[type] ?
  actions[type](state, payload) :
  state
;