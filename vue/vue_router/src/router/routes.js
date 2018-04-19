
import Home from '../views/home/Home.vue';
import Product from '../views/product/Product.vue';
import User from '../views/user/User.vue';
import More from '../views/more/More.vue';

import Login from '../views/login/Login.vue';

const routes = [{
  path: '/home',
  name: 'home',
  component: Home,
  alias: '/index'
}, {
  path: '/product',
  name: 'product',
  component: Product
}, {
  path: '/user',
  name: 'user',
  component: User
}, {
  path: '/more',
  name: 'more',
  component: More
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '*',
  redirect: to => {
    return '/home';
  }
}];

export default routes;
