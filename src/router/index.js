import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import NotFound from "../views/NotFound.vue";
// recipes
import RecipesView from "../views/recipes/RecipesView.vue";
import RecipeDetailView from "../views/recipes/RecipeDetailView.vue";
// users
import UserAuthView from "../views/users/UserAuthView.vue";
import UserView from "../views/users/UserView.vue";
import UserFavoritesView from "../views/users/UserFavoritesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", redirect: { name: "home" } },
        { path: "/home", name: "home", component: HomeView },
        // {
        //     path: "/about",
        //     name: "about",
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import("../views/AboutView.vue"),
        // },
        { path: "/about", name: "about", component: AboutView },
        { path: "/contact", name: "contact", component: ContactView },
        { path: "/recipes", name: "recipes", component: RecipesView },
        { path: "/recipes/:id", name: "recipe-detail", component: RecipeDetailView },
        { path: "/auth/:mode?", name: "auth", component: UserAuthView, meta: { authRequired: false } },
        {
            path: "/profile/:id",
            name: "user-view",
            component: UserView,
            props: true,
            meta: { authRequired: true },
            children: [
                {
                    path: "favorites",
                    name: "user-favorites",
                    component: UserFavoritesView,
                    meta: { authRequired: true },
                },
            ],
        },
        { path: "/:notFound(.*)", name: "not-found", component: NotFound },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    },
});

router.beforeEach((to, from, next) => {
    console.log("Checking route meta and auth data");
    console.log("Auth Required:", to.meta.authRequired);
    console.log("Auth Permitted:", to.meta.authPermitted);
    console.log("Auth Data:", localStorage.getItem("authData"));
    console.log("Current Route:", to.name);

    if (to.meta.authRequired && !localStorage.getItem("authData")) {
        console.log("auth");
        next("/auth");
    } else if (to.meta.authRequired === false && localStorage.getItem("authData")) {
        console.log("profile");
        next("/profile/1");
    } else {
        console.log("next");
        next();
    }
});

export default router;
