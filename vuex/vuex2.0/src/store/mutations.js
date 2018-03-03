
import {INCREMENT, DECREMENT} from './types.js';

import getters from './getters.js'

const state = {
  count: 20
};

const mutations = {
  [INCREMENT](state) {
    state.count++;
  },
  [DECREMENT](state) {
    state.count--;
  }
}

export default {
  state,
  mutations,
  getters
}
