import Vue from 'vue'
import axios from 'axios'

// vuex
import store from './store';

import App from './App.vue'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
