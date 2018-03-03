
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
  count: 10
}

const mutations = { // 处理状态（数据）变化
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};

const actions = { // 处理需要干什么，异步请求，判断，流程控制
  increment: ({
    commit
  }) => {
    // console.log(commit);
    commit('increment');
  },
  decrement: ({ commit }) => {
    commit('decrement');
  },
  clickOdd: ({ commit, state }) => {
    if (state.count % 2 === 0) {
      commit('increment');
    }
  },
  clickSync: ({ commit, state }) => {
    new Promise((resolve) => {
      setTimeout(function() {
        commit('increment');
      }, 1000);
    })
  }
};

const getters = {
  count(state) {
    return state.count;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
