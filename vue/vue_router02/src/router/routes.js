
import Home from '../views/home/Home.vue';
import Product from '../views/product/Product.vue';
import User from '../views/user/User.vue';
import More from '../views/more/More.vue';

import Login from '../views/login/Login.vue';   // 登录
import Register from '../views/register/Register.vue';  // 注册
import ForgetPass from '../views/login/ForgetPass.vue'; // 忘记密码

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
    path: '/register',
    name: 'register',
    component: Register
}, {
    path: '/forgetpass',
    name: 'forgetpass',
    component: ForgetPass
}, {
    path: '*',
//  redirect: '/home'
    redirect: to => {
        if (to.path === '/regular') {
            return '/product';
        } else {
            return '/home';
        }
    }
}]

export default routes;