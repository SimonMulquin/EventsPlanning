const actions = {
  "VC_ADD_TO_TARGETED_DATE": (state, payload) => {
    console.log(payload);
    return state.plus(payload);
  }
};

export default (state, { type, payload }) =>
  payload && actions[type] ?
  actions[type](state, payload) :
  state
;