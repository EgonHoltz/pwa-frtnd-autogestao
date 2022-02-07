import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/cars",
        name: "cars",
        component: () => import("../views/cars/CarManagement.vue")
    },
        // Redirect to 404 page, if no match found
    {
        path: "*",
        component: () => import("@/views/Error404.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;