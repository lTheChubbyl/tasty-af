<script>
export default {};
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

                                <!-- <div class="header__lang__select">
                                    <select id="header_lang__select">
                                        <option>EN - IT</option>
                                        <option>EN - AR</option>
                                        <option>EN - BD</option>
                                        <option>EN - FR</option>
                                    </select>
                                </div> -->
                            </div>

                            <div class="header__logo">
                                <router-link to="/">
                                    <div class="logo">
                                        <img src="../../assets/imgs/logo/logo-white.svg" alt="logo not found" />
                                    </div>
                                </router-link>
                            </div>

                            <div class="header__right d-none d-sm-inline-flex">
                                <div class="header__action d-flex align-items-center">
                                    <div class="header__btn-wrap">
                                        <a href="" class="rr-btn-2__header">
                                            <span class="hover-rl"></span>
                                            <span class="fake_hover"></span>
                                            <span class="btn-wrap">
                                                <span class="text-one">Become a member</span>
                                                <span class="text-two">Become a member</span>
                                            </span>
                                        </a>
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
                                                    <a href="">Home</a>
                                                </li>
                                                <li class="has-dropdown">
                                                    <a href="">Recipes</a>
                                                    <ul class="submenu">
                                                        <li><a href="">All recipes</a></li>
                                                        <li><a href="">Breakfast recipes</a></li>
                                                        <li><a href="">Lunch recipes</a></li>
                                                        <li><a href="">Dinner recipes</a></li>
                                                        <li><a href="">Dessert recipes</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="">About us</a></li>
                                                <li><a href="">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <ul class="header__bottom-menu d-flex justify-content-end">
                                    <li>
                                        <button class="search-open-btn">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13.7071 12.2929C13.3166 11.9024 12.6834 11.9024 12.2929 12.2929C11.9024 12.6834 11.9024 13.3166 12.2929 13.7071L13.7071 12.2929ZM18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L18.2929 19.7071ZM8 14C4.68629 14 2 11.3137 2 8H0C0 12.4183 3.58172 16 8 16V14ZM2 8C2 4.68629 4.68629 2 8 2V0C3.58172 0 0 3.58172 0 8H2ZM8 2C11.3137 2 14 4.68629 14 8H16C16 3.58172 12.4183 0 8 0V2ZM14 8C14 11.3137 11.3137 14 8 14V16C12.4183 16 16 12.4183 16 8H14ZM12.2929 13.7071L18.2929 19.7071L19.7071 18.2929L13.7071 12.2929L12.2929 13.7071Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <a href="">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.2166 17.3323C13.9349 15.9008 12.0727 15 10 15C7.92734 15 6.06492 15.9008 4.7832 17.3323M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10 12C8.34315 12 7 10.6569 7 9C7 7.34315 8.34315 6 10 6C11.6569 6 13 7.34315 13 9C13 10.6569 11.6569 12 10 12Z"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <svg
                                                width="20"
                                                height="18"
                                                viewBox="0 0 20 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10 4.15428C8 -0.540161 1 -0.0401611 1 5.95987C1 11.9599 10 16.9598 10 16.9598C10 16.9598 19 11.9599 19 5.95987C19 -0.0401611 12 -0.540161 10 4.15428Z"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <span>3</span>
                                        </a>
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
