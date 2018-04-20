import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from './routes.js';

const router = new VueRouter({
    'linkActiveClass': 'active',
    routes
});

export default router;
