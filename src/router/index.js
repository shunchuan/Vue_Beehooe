import Vue from 'vue';
import iView from 'iview';
import Util from '../libs/util';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import common from '../libs/common';
import index from '../views'


Vue.use(VueRouter);


const baseRouters = [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        component: index,
        children: [
            {
                path: 'index',
                name: 'home_index',
                meta: { title: 'index' },
                component: (resolve) => require(['../components/temp.vue'], resolve)
            }]
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: 'login' },
        component: (resolve) => require(['../views/login/login.vue'], resolve)
    },
    {
        path: '/*',
        name: 'error-404',
        meta: {
            title: '404-页面不存在'
        },
        component:(resolve) => require(['../views/error-page/404.vue'], resolve)
    }
];

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: baseRouters
};

let appRouter = [];

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    if (!Cookies.get('user') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
        next({
            name: 'login'
        });
    } else if (Cookies.get('user') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
        next({
            name: 'index'
        });
    } else {
        next();
    }
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


export default router;