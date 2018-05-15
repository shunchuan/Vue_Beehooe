import Vue from 'vue';
import Router from 'vue-router';

import login from '../views/login/login.vue';
import home from '../views/';
import _404 from '../views/error-page/404.vue';
import temp from '../components/temp.vue';

Vue.use(Router);

export default new Router({
    routes: [
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
            path: '/error-404',
            name: 'error-404',
            meta: {
                title: '404-页面不存在'
            },
            component: _404
        }
    ]
});