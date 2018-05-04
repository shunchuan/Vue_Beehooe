import Cookies from 'js-cookie';
// import router from '@/router';
import iView from 'iview';
import Vue from 'vue';
Vue.use(iView);

const app = {
    state: {
        strLoadRouters: null
    },
    mutations: {
        setAvator(state, path) {
            localStorage.avatorImgPath = path;
        },
        setLoadRouters(state, payload) {
            state.strLoadRouters = payload;
            Cookies.set('LoadRouters', state.strLoadRouters);
        }
    },
    action: {

    }
};

export default app;