import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import lang from './modules/lang';
import config from './modules/config';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        lang,
        config
    },
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});

export default store;
