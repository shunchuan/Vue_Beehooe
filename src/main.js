import Vue from 'vue';
import iView from 'iview';
import router from './router';
import Vuex from 'vuex';
import store from './store';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './assets/style/index.css';
import localStorageHelper from './libs/localStorageHelper'

import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(iView);

// 自动设置语言
// const navLang = navigator.language;
// const localLang = (navLang === 'zh-CN' || navLang === 'en-US' || navLang === 'en-TW') ? navLang : false;
// const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

let lang = Cookies.getJSON('lang');
Vue.config.lang = lang || 'zh-CN';


import zhLocale from 'iview/src/locale/lang/zh-CN';
import enLocale from 'iview/src/locale/lang/en-US';
import twLocale from 'iview/src/locale/lang/zh-TW';
import Locales from './config/locale';
// 多语言配置
const locales = Locales;
const mergeZH = Object.assign(zhLocale, locales['zh-CN']);
const mergeEN = Object.assign(enLocale, locales['en-US']);
const mergeTW = Object.assign(twLocale, locales['zh-TW']);
Vue.locale('zh-CN', mergeZH);
Vue.locale('en-US', mergeEN);
Vue.locale('en-US', mergeTW);

let LoadRouters = JSON.parse(localStorageHelper.get('setLoadRouters'))
import common from './libs/common';
if (LoadRouters) {
    //这里是防止用户手动刷新页面，整个app要重新加载,动态新增的路由，会消失，所以我们重新add一次
    // let routes = common.routerFormat(rout);
    let routes = [];
    common.newRouterFormat(routes, LoadRouters);
    router.addRoutes(routes);
}

router.beforeEach((route, redirect, next) => {
    console.dir(router);
    iView.LoadingBar.start();
    Util.title(route.meta.title);
    if (!Cookies.get('user') && route.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
        next({
            name: 'login'
        });
    } else if (Cookies.get('user') && route.name === 'login') { // 判断是否已经登录且前往的是登录页
        next({
            name: 'home'
        });
    } else {
        next();
    }
});

router.afterEach((to) => {
    // Util.openNewPage(router.app, to.name, to.params, to.query);
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


new Vue({
    el: '#app',
    router,
    store: store,
    render: h => h(App)
});