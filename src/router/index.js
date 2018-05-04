

const router = [
    {
        path: '/',
        meta: { title: '' },
        component: (resolve) => require(['../views/index.vue'], resolve),
        children: [{
            path: '/',
            meta: { title: '' },
            component: (resolve) => require(['../components/index.vue'], resolve)
        }]
    },
    {
        path: '/login',
        meta: { title: '' },
        component: (resolve) => require(['../views/login/login.vue'], resolve),
        children: [{
            path: '/',
            meta: { title: '' },
            component: (resolve) => require(['../views/login/login.vue'], resolve)
        }]
    }
];

export default router;