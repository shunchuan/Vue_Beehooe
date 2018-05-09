export default (name) =>
    // () => import('../${name}.vue')
    (resolve) => require(['../' + name + '.vue'], resolve);
// (resolve) => require(['../${name}.vue'], resolve)