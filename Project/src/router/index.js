import { createWebHistory, createRouter } from "vue-router";
import Town from "@/views/Town.vue";
import ListTown from "@/views/ListTown.vue";


const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/signup/",
        name: "contact.create",
        component: () => import("@/views/AddUser.vue"),
        // props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/login/",
        name: "contacts.login",
        component: () => import("@/views/LoginUser.vue"),
        // props: true // Truyền các biến trong $route.params vào làm props
    },
    
    {
        path: "/home",
        name: "home",
        component:  () => import("@/components/pages/Home.vue"),
    },
    {
        path: "/introduce",
        name: "introduce",
        component:  () => import("@/components/pages/Introduce.vue"),
    },
    {
        path: "/news",
        name: "news",
        component:  () => import("@/components/pages/News.vue"),
    },
    {
        path: "/town",
        name: "town",
        component:  ListTown,
    },
    {
        path: "/admin/dashboard",
        name: "dashboard",
        component:  () => import("@/components/pages/admin/dashboard.vue"),
    },
    {
        path: "/test",
        name: "test",
        component:  () => import("@/components/pages/cantho.vue"),
    },
    {
        path: "/listtown",
        name: "listtown",
        component: Town,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;

