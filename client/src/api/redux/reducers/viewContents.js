import merge from 'deepmerge';

import initialViewContents from 'configs/initialViewContents';

export default (state = initialViewContents, { type, payload }) => {
  if (type === 'SET_VIEW_CONTENTS') {
    return merge(state, payload)
  } else {
    return state;
  }
};