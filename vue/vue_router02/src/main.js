import Vue from 'vue'

import router from './router/index.js';

import App from './App.vue';

import 'mint-ui/lib/style.css';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
