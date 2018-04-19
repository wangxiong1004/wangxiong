import Vue from 'vue'
<<<<<<< HEAD
import App from './App.vue'

import router from './router';

import './common/sass/index.scss';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
=======
import VueRouter from 'vue-router'

import App from './App.vue'
import User from './User.vue'
import Login from './Login.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/user/:id',
    component: User
}, {
    path: '/login',
    component: Login
}]

const router = new VueRouter({
    routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
>>>>>>> 8b81a1a095efa6e0c8d736c493ce793ecf6f02e6
