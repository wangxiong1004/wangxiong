import Vue from 'vue'
import VueRouter from 'vue-router';

import User from '../components/User.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/user',
    component: User
}, {
    path: '/login',
    component: Login,
    children: [{
        path: 'register',
        component: Register
    }]
}];

export default new VueRouter({
    // linkActiveClass: 'active',
    routes
});