import Cookies from 'js-cookie';
// import router from '@/router';
import iView from 'iview';
import Vue from 'vue';
Vue.use(iView);

const lang = {
    state: {
        lang: 'zh-CN'
    },
    mutations: {
        SET_LANG: (state, payload) => {
            state.lang = payload;
            Cookies.set('lang', payload);
        }
    },
    action: {

    }
};

export default lang;