const actions = (state, payload) => ({
  "VC_WP_TARGETED_DATE_ADD": state
});

export default (state, { type, payload }) =>
  actions(state, payload)[type] ?
  actions(state, payload)[type] :
  state
;