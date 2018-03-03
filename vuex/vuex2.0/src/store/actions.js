
import * as types from './types.js';

export default {
  increment: ({commit}) => {
    commit(types.INCREMENT);
  },
  decrement: ({commit}) => {
    commit(types.DECREMENT);
  },
  clickOdd: ({commit, state}) => {
    if (state.mutations.count%2 === 0) {
      commit(types.INCREMENT);
    }
  },
  clickSync: ({commit, state}) => {
    new Promise((reslove) => {
      setTimeout(function() {
        commit(types.INCREMENT);
      }, 1000);
    })
  }
}
