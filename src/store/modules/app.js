import Cookies from 'js-cookie';
// import router from '@/router';
import iView from 'iview';
import Vue from 'vue';
Vue.use(iView);

const app = {
    state:{

    },
    mutations:{
        setAvator(state, path) {
            localStorage.avatorImgPath = path;
        },
    },
    action:{

    }
};

export default app;