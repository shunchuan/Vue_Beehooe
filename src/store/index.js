import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import lang from './modules/lang';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        lang
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
