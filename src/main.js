import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import dataV from '@jiaminghi/data-view'
import VueRouter from 'vue-router'
import routers from './route'
import axios from 'axios'
import './assets/common.less'

const router = new VueRouter({
    mode: 'history',
    routes: routers
});
Vue.use(dataV)
Vue.use(VueRouter);

router.beforeEach((to, from, next) => {
    document.title = to.name;
    return next()
})
// import config from './config'

// axios.defaults.baseURL = config.odoo_path;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    axios
}).$mount('#app')
