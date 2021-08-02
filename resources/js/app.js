
require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router';
import { routes } from "./routes";


Vue.use(VueRouter);




Vue.component('users-index', require('./components/users/Index.vue').default);
Vue.component('teams-index', require('./components/tems/Index.vue').default);

const router = new VueRouter({
    mode: "history",
    routes: routes
});


const app = new Vue({
    el: '#app',
    router: router
});
