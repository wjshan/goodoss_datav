export default [{
    path: '/',
    redirect: '/main_page',
}, {
    path: '/main_page',
    name: '数据主页',
    component: () => import(/* webpackChunkName: "data_view" */ '@/components/data_view/main_page.vue'),
},
]