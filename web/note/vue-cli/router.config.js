// 配置路由
import Vue from 'vue';
import Home from './components/Home.vue';
import News from './components/News.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import newsDetail from './components/newsDetail.vue';

export default {
  'home': {
    component: Home,
    subRoutes: {
      'register': {
        component: Register
      },
      'login': {
        component:　Login
      }
    }
  },
  'news': {
    component: News,
    subRoutes: {
      'detail/:id': {
        component: newsDetail
      }
    }
  }
};