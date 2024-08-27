<script setup>
import { useAuthStore } from "@/stores/auth.js";
// import { ref } from "vue";

defineOptions({
    name: "TheHeader",
});

const authStore = useAuthStore();
</script>

<template>
    <!-- Header area start -->
    <header>
        <div id="header-sticky" class="header__area header-2">
            <div class="container">
                <div class="header__main-wrapper">
                    <div class="mega__menu-wrapper p-relative">
                        <div class="header__main">
                            <div class="header__left d-flex">
                                <div class="header__hamburger">
                                    <div class="sidebar__toggle">
                                        <a class="bar-icon" href="javascript:void(0)">
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="header__logo">
                                <router-link to="/home">
                                    <div class="logo">
                                        <img src="@/assets/imgs/Asset 3.png" alt="logo not found" />
                                    </div>
                                </router-link>
                            </div>

                            <div class="header__right d-none d-sm-inline-flex">
                                <div class="header__action d-flex align-items-center">
                                    <div class="header__btn-wrap">
                                        <router-link
                                            to="/auth"
                                            class="rr-btn-2__header"
                                            :class="{ invisible: authStore.token }"
                                        >
                                            <span class="hover-rl"></span>
                                            <span class="fake_hover"></span>
                                            <span class="btn-wrap">
                                                <span class="text-one">Sign Up Now</span>
                                                <span class="text-two">Sign Up Now</span>
                                            </span>
                                        </router-link>
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
                                                <li class="active">
                                                    <router-link to="/home">Home</router-link>
                                                </li>
                                                <li class="has-dropdown">
                                                    <router-link to="/recipes">Recipes</router-link>
                                                    <ul class="submenu">
                                                        <li><router-link to="/recipes">All recipes</router-link></li>
                                                        <li>
                                                            <router-link to="/recipes?category=breakfast"
                                                                >Breakfast recipes</router-link
                                                            >
                                                        </li>
                                                        <li>
                                                            <router-link to="/recipes?category=lunch"
                                                                >Lunch recipes</router-link
                                                            >
                                                        </li>
                                                        <li>
                                                            <router-link to="/recipes?category=dinner"
                                                                >Dinner recipes</router-link
                                                            >
                                                        </li>
                                                        <li>
                                                            <router-link to="/recipes?category=dessert"
                                                                >Dessert recipes</router-link
                                                            >
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
                                        <button class="search-open-btn">
                                            <i class="fa-sharp fa-regular fa-magnifying-glass text-white fs-2"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <router-link :to="!authStore.token ? '/auth' : '/profile/1'">
                                            <i class="fa-regular fa-circle-user text-white fs-2"></i>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/profile/1/favorites">
                                            <i class="fa-sharp fa-regular fa-heart text-white fs-2"></i>
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
    <!-- Header area end -->
</template>

<style scoped></style>
