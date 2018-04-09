import Vue from 'vue'
import VueRouter from 'vue-router';

import User from './components/User.vue';
import Login from './components/Login.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/user',
    component: User
}, {
    path: '/login',
    component: Login
}];

export default new VueRouter({
    routes
});