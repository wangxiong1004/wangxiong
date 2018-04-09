import Vue from 'vue'
// import VueRouter from 'vue-router';

import App from './App.vue'

// import User from './components/User.vue';
// import Login from './components/Login.vue';

// import router from './router.js';
import router from './router/';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

// Vue.use(VueRouter);
Vue.use(MintUI);

// const routes = [{
//   path: '/user',
//   component: User
// }, {
//   path: '/login',
//   component: Login
// }];

// const router = new VueRouter({
//   routes
// });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
