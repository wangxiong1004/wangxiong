
import getters from './getters.js'

const state = {
  transferDetail: {}
};

const mutations = {
  transferDetail(state, payload) {
    state.transferDetail = payload.res.data;
  }
}


export default {
    state,
    mutations,
    getters
};
