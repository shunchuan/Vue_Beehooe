
const sidebarmenu = [
  {
    path: '/index',
    name: 'menu.index',
    icon: 'icon-dynamic_fill',
    level: 1,
    sort: 1,
    children: [],
    fixed: false
  },
  {
    path: '/',
    name: 'menu.itemPage',
    icon: 'icon-createtask_fill',
    level: 0,
    fixed: false,
    children: [
      {
        path: '/chart',
        name: 'menu.itemPages.chart',
        icon: 'icon-dynamic_fill',
        level: 1,
        children: [],
        fixed: false
      },
      {
        path: '/list',
        name: 'menu.itemPages.list',
        level: 1,
        children: [],
        fixed: false
      },
      {
        path: '/userInfo',
        name: 'menu.itemPages.userInfo',
        icon: 'icon-addpeople_fill',
        children: [],
        fixed: false,
        level: 1
      },
      {
        level: 1,
        path: '/userList',
        children: [],
        fixed: false,
        name: 'menu.itemPages.userList'
      },
      {
        level: 1,
        path: '/table',
        name: 'menu.itemPages.table',
        children: [],
        fixed: false,
        hidden: true
      },
      {
        level: 1,
        path: '/icon',
        name: 'menu.itemPages.icon',
        children: [],
        fixed: false,
        icon: 'icon-emoji_fill'
      }, {
        level: 1,
        path: '/icon',
        name: 'menu.itemPages.icon',
        children: [],
        fixed: false,
        icon: 'icon-emoji_fill'
      },
      {
        level: 1,
        path: '/icon',
        name: 'menu.itemPages.icon',
        children: [],
        fixed: false,
        icon: 'icon-emoji_fill'
      }, {
        level: 1,
        path: '/icon',
        name: 'menu.itemPages.icon',
        children: [],
        fixed: false,
        icon: 'icon-emoji_fill'
      },
      {
        level: 1,
        path: '/filter',
        name: 'menu.itemPages.filter',
        children: [],
        fixed: false,
        icon: 'icon-emoji_fill'
      }
    ]
  },
  {
    path: '/',
    name: 'menu.page',
    level: 0,
    icon: 'icon-manage_fill',
    fixed: false,
    children: [
      {
        level: 1,
        path: '/error404',
        children: [],
        fixed: false,
        name: '404'
      },
      {
        level: 1,
        path: '/notfound',
        children: [],
        fixed: false,
        name: 'Not found'
      },
      {
        level: 1,
        path: '/login',
        children: [],
        fixed: false,
        name: 'menu.pages.login'
      },
      {
        level: 1,
        path: '/register',
        children: [],
        fixed: false,
        name: 'menu.pages.regeist'
      }
    ]
  },
  {
    path: '/',
    name: 'menu.manage',
    level: 0,
    icon: 'icon-manage_fill',
    fixed: false,
    children: [
      {
        level: 1,
        path: '/setMenu',
        children: [],
        fixed: false,
        name: 'setMenu'
      },
      {
        level: 1,
        path: '/setMenu2',
        children: [],
        fixed: false,
        name: 'setMenu2'
      },
      {
        level: 1,
        path: '/notFound',
        children: [],
        fixed: false,
        name: 'notFound'
      }
    ]
  },
  {
    path: '/index',
    name: '123',
    icon: 'icon-wujiaoxing',
    // hidden: true,
    level: 0,
    sort: 1,
    children: [],
    fixed: false
  },
  {
    path: '/index',
    name: '123',
    icon: 'icon-wujiaoxing',
    // hidden: true,
    level: 0,
    sort: 1,
    children: [],
    fixed: false
  }

]

export default sidebarmenu;
