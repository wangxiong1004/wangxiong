
import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterConfig from './router.config.js';

import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active'
});

router.map(RouterConfig);

router.start(App, '#app');

router.redirect({
  '/': 'home'
})


/*
 *
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import News from './components/News.vue';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  'home': {
    component: Home
  },
  'news': {
    component: News
  }
});

router.start(App, '#app');


 */
