import Vue from 'vue'
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
