import Vue from 'vue'
import App from './App.vue'

import router from './router';

import './common/sass/index.scss';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
