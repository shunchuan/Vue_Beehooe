import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    router: [
        {
            path: '/',
            meta: { title: '' },
            component: (resolve) => require(['../views/index.vue'], resolve),
            children:[{
                path:'/',
                meta:{title:''},
                component:(resolve)=>require(['../components/index.vue'],resolve)
            }]
        }
    ]
});