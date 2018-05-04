import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router/index';
import Vuex from 'vuex';
import store from './store';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './assets/style/index.css';

import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';

Vue.use(VueRouter);
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


// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

let LoadRouters = Cookies.getJSON('LoadRouters');
console.log("main.js记录loadRouters");
console.dir(LoadRouters);
import common from './libs/common';
if (LoadRouters) {
    //这里是防止用户手动刷新页面，整个app要重新加载,动态新增的路由，会消失，所以我们重新add一次
    let routes =  common.routerFormat(LoadRouters);
    router.addRoutes(routes);
}


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});