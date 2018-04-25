

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
    }
];

export default router;