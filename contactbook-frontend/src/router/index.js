import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import Town from "@/views/Town.vue";
import ListUser from "@/views/ListUser.vue";

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
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/contacts/",
        name: "contact.create",
        component: () => import("@/views/ContactAdd.vue"),
        // props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("@/components/admin/Admin.vue"),
    },
    {
        path: "/add",
        name: "add",
        component: () => import("@/components/image.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;