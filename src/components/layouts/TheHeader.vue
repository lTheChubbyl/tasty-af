<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { useRecipesStore } from "@/stores/recipes";
import { ref, onMounted } from "vue";

defineOptions({
    name: "TheHeader",
});

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

const categoryArray = useRecipesStore().categoryArray;

const searchOpened = ref(false);
const isOverlayOpened = ref(false);
const handleScroll = () => {
    if (window.scrollY > 10) {
        document.getElementById("header-sticky").classList.add("rr-sticky");
    } else {
        document.getElementById("header-sticky").classList.remove("rr-sticky");
    }
};

const authStore = useAuthStore();
const logoutUser = () => {
    authStore.logoutUser();
};
</script>

<template>
    <div class="fix">
        <div class="offcanvas__area" :class="{ 'info-open': isOverlayOpened }">
            <div class="offcanvas__wrapper">
                <div class="offcanvas__content">
                    <div class="offcanvas__top d-flex justify-content-between align-items-center">
                        <div class="offcanvas__logo">
                            <a href="index.html">
                                <img src="@/assets/imgs/logo.png" alt="logo not found" />
                            </a>
                        </div>
                        <div class="offcanvas__close" @click="isOverlayOpened = !isOverlayOpened">
                            <button class="offcanvas-close-icon animation--flip">
                                <span class="offcanvas-m-lines">
                                    <span class="offcanvas-m-line line--1"></span
                                    ><span class="offcanvas-m-line line--2"></span
                                    ><span class="offcanvas-m-line line--3"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="mobile-menu fix"></div>
                    <div class="offcanvas__social">
                        <ul class="header-top-socail-menu d-flex">
                            <li>
                                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com/"><i class="fa-brands fa-pinterest-p"></i></a>
                            </li>
                            <li>
                                <a href="https://vimeo.com/"><i class="fa-brands fa-vimeo-v"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="offcanvas__btn">
                        <div class="header__btn-wrap">
                            <a href="reservation.html" class="rr-btn__header d-sm-none mb-10 w-100">
                                <span class="hover-rl"></span>
                                <span class="fake_hover"></span>
                                <span class="btn-wrap">
                                    <span class="text-one"
                                        >Book A Table <img src="@/assets/imgs/icon/arrow-right.svg" alt="not found"
                                    /></span>
                                    <span class="text-two"
                                        >Book A Table <img src="@/assets/imgs/icon/arrow-right.svg" alt="not found"
                                    /></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas__overlay" :class="{ 'overlay-open': isOverlayOpened }"></div>

    <div class="search__popup" :class="{ 'search-opened': searchOpened }">
        <div class="container">
            <div class="row gx-30">
                <div class="col-xxl-12">
                    <div class="search__wrapper">
                        <div class="search__top d-flex justify-content-between align-items-center">
                            <div class="search__logo">
                                <a href="/home">
                                    <img src="@/assets/imgs/logo.png" alt="img" />
                                </a>
                            </div>
                            <div class="search__close">
                                <button
                                    type="button"
                                    class="search__close-btn search-close-btn"
                                    @click="searchOpened = false"
                                >
                                    <i class="fa-regular fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                        <div class="search__form">
                            <form @submit.prevent>
                                <div class="search__input">
                                    <input
                                        class="search-input-field"
                                        type="text"
                                        placeholder="Type here to search..."
                                    />
                                    <span class="search-focus-border"></span>
                                    <button type="submit">
                                        <i class="fa-regular fa-magnifying-glass fs-1"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <header>
        <div id="header-sticky" class="header__area header-2">
            <div class="container">
                <div class="header__main-wrapper">
                    <div class="mega__menu-wrapper p-relative">
                        <div class="header__main">
                            <div class="header__left d-flex">
                                <div class="header__hamburger">
                                    <div class="sidebar__toggle">
                                        <a class="bar-icon" @click.prevent="isOverlayOpened = !isOverlayOpened">
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="header__logo">
                                <router-link to="/home">
                                    <div class="logo">
                                        <img src="@/assets/imgs/logo.png" alt="logo not found" />
                                    </div>
                                </router-link>
                            </div>

                            <div class="header__right d-none d-sm-inline-flex">
                                <div class="header__action d-flex align-items-center">
                                    <div class="header__btn-wrap">
                                        <router-link
                                            to="/auth?mode=register"
                                            class="rr-btn-2__header"
                                            v-if="!authStore.token"
                                        >
                                            <span class="hover-rl"></span>
                                            <span class="fake_hover"></span>
                                            <span class="btn-wrap">
                                                <span class="text-one">Sign up</span>
                                                <span class="text-two">Sign up</span>
                                            </span>
                                        </router-link>
                                        <button class="rr-btn-2__header" @click="logoutUser" v-else>
                                            <span class="hover-rl"></span>
                                            <span class="fake_hover"></span>
                                            <span class="btn-wrap">
                                                <span class="text-one">Log out</span>
                                                <span class="text-two">Log out</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="header__bottom d-none d-xl-block">
                        <div class="row g-24">
                            <div class="col-8">
                                <div class="mean__menu-wrapper d-none d-lg-block">
                                    <div class="main-menu main-menu-2">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li>
                                                    <router-link to="/home">Home</router-link>
                                                </li>
                                                <li class="has-dropdown">
                                                    <router-link to="/recipes">Recipes</router-link>
                                                    <ul class="submenu">
                                                        <li>
                                                            <router-link to="/recipes">All recipes</router-link>
                                                        </li>
                                                        <li v-for="category in categoryArray" :key="category">
                                                            <router-link :to="'/recipes?category=' + category.key">{{
                                                                category.value
                                                            }}</router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><router-link to="/about">About us</router-link></li>
                                                <li><router-link to="/contact">Contact</router-link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <ul class="header__bottom-menu d-flex justify-content-end">
                                    <li>
                                        <button class="search-open-btn" @click="searchOpened = !searchOpened">
                                            <i class="fa-sharp fa-regular fa-magnifying-glass fs-2"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <router-link to="/auth">
                                            <i class="fa-regular fa-circle-user fs-2"></i>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/favorites">
                                            <i class="fa-sharp fa-regular fa-heart fs-2"></i>
                                            <span>3</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.router-link-active {
    color: var(--rr-theme-primary);
}
</style>
