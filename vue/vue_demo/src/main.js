import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
