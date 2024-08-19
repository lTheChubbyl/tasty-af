import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import RecipesView from "../views/recipes/RecipesView.vue";
import RecipeDetailView from "../views/recipes/RecipeDetailView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", redirect: { name: "home" } },
        { path: "/home", name: "home", component: HomeView },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
        },
        { path: "/recipes", name: "recipes", component: RecipesView },
        { path: "/recipes/:id", name: "recipe-detail", component: RecipeDetailView },
        { path: "/about", name: "about", component: AboutView },
        { path: "/contact", name: "contact", component: ContactView },
        { path: "/:notFound(.*)", component: NotFound },
    ],
});

export default router;
