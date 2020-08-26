import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component:()=>import('./components/about.vue'),
    },
    {
        path:'/works',
        component:()=>import('./components/works.vue'),
    },
    {
        path:'/reviews',
        component:()=>import('./components/reviews.vue'),
    },
    {
        path:'/login',
        component:()=>import('./components/login.vue'),
        meta: {
            public: true
        }
    },
];

const router = new VueRouter({
    routes,
});
export default router;