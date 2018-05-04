let common={

};

/* 后台获取的router数据转换为$router.addRoutes()可以使用的格式 */
common.routerFormat = function (routers) {
    // 简单检查是否是可以处理的数据
    if (!(routers instanceof Array)) {
        return false;
    }
    // 处理后的容器
    let fmRouters = [];
    routers.forEach(router => {
        let {
            path = '/',
            icon = '',
            name,
            title,
            component = 'Main',
            hidden = false,
            children
        } = router;
        path = path == '' ? '/' : path;
        component = component == '' ? 'Main' : component;
        // 如果有子组件，递归处理
        if (children && children instanceof Array) {
            children = this.routerFormat(children);
        }
        let fmRouter = {
            path: path,
            icon: icon,
            name: name,
            title: title,
            component(resolve) {
                // 拼出相对路径，由于component无法识别变量
                // 利用Webpack 的 Code-Splitting 功能
                require(['../views/' + component + '.vue'], resolve)
            },
            hidden: hidden,
            children: children
        };
        fmRouters.push(fmRouter);
    });
    return fmRouters;
};

export default common;