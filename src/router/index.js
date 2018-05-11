import Vue from 'vue';
import iView from 'iview';
import Util from '../libs/util';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import common from '../libs/common';
import index from '../views';
import localStorageHelper from '../libs/localStorageHelper';

import login from '../views/login/login.vue';
import home from '../views/';
import _404 from '../views/error-page/404.vue';
import temp from '../components/temp.vue';

Vue.use(VueRouter);




const baseRouters = [
    {
        path: '/',
        name: 'home',
        meta: { title: '首页' },
        component: home,
        childrem: [
            {
                path: 'temp',
                name: 'temp',
                meta: { title: '例子' },
                component: temp
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: '登陆' },
        component: login
    },
    {
        path: '/*',
        name: 'error-404',
        meta: {
            title: '404-页面不存在'
        },
        component: _404
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
            name: 'home'
        });
    } else {
        initMenu(router)
        next();
    }
});

export const initMenu = (router) => {
    let LoadRouters = JSON.parse(localStorageHelper.get('setLoadRouters'))
    console.log("main.js记录loadRouters");
    console.dir(LoadRouters);
    if (LoadRouters) {
        //这里是防止用户手动刷新页面，整个app要重新加载,动态新增的路由，会消失，所以我们重新add一次
        // let routes = common.routerFormat(rout);
        let routes = [];
        common.newRouterFormat(routes, LoadRouters);
        router.addRoutes(routes);
    }
};

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


export default router;