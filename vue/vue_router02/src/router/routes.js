
import Home from '../views/home/Home.vue';
import Product from '../views/product/Product.vue';
import User from '../views/user/User.vue';
import More from '../views/more/More.vue';

const routes = [{
    path: '/home',
    name: 'home',
    component: Home
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