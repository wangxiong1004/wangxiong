import Vue from 'vue'
import App from './App.vue'

import store from './store/'

import Util from './util/index'
import axios from 'axios';

Vue.prototype.$http = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {
  config.headers.common['X-Dola-Time'] = Util.getSeconds();
  config.headers.common['X-Dola-ClientID'] = Util.getGuid();
  return config;
}, function (error) {
  return Promise.reject(error);
});


new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
