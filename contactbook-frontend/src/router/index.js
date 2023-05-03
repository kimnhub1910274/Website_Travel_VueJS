import { createWebHistory, createRouter } from "vue-router";
import Town from "@/views/Town.vue";
import ListUser from "@/views/ListUser.vue";
import AddTown from "@/views/AddTown.vue";

const routes = [
    {
        path: "/list-town",
        name: "list-town",
        component: Town,
    },
    {
        path: "/list-user",
        name: "list-user",
        component:ListUser,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/update/:id",
        name: "town.update",
        component: () => import("@/views/Edit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/towns/",
        name: "town.create",
        component: () => import("@/views/AddTown.vue"),
        // props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("@/components/admin/Admin.vue"),
    },
    {
        path: "/addtown",
        name: "add",
        component: AddTown,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;