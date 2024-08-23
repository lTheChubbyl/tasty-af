<script>
import HomeCounter from "../components/home/HomeCounter.vue";
import CategoriesSection from "../components/home/categories/CategoriesSection.vue";
import HighlightedSection from "../components/home/highlighted/HighlightedSection.vue";
import LatestSection from "../components/home/latest/LatestSection.vue";

export default {
    name: "HomeView",
    components: {
        HomeCounter,
        CategoriesSection,
        HighlightedSection,
        LatestSection,
    },

    data() {
        return {
            counter: 0,
        };
    },
};
</script>

<template>
    <main>
        <!-- Banner 2 area start -->
        <section class="banner-2 banner-2__space overflow-hidden">
            <div class="container">
                <div class="row g-24">
                    <div class="col-12">
                        <div class="banner-2__content">
                            <h1 class="banner-2__title mb-20 mb-sm-15 mb-xs-10 title-animation">
                                Sizzle & <br />
                                <span>Serve</span>
                            </h1>
                            <p class="mb-45 mb-sm-40 mb-xs-35">
                                Whip up something fire &#x1F525; with our top trending dishes!
                            </p>

                            <a href="reservation.html" class="rr-btn-2 wow clip-a-z">
                                <span class="hover-rl"></span>
                                <span class="fake_hover"></span>
                                <span class="btn-wrap">
                                    <span class="text-one"
                                        >Get Cookin'<img src="@/assets/imgs/icon/arrow-right.svg" alt="not found"
                                    /></span>
                                    <span class="text-two"
                                        >Get Cookin'<img src="@/assets/imgs/icon/arrow-right.svg" alt="not found"
                                    /></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Banner 2 area end -->

        <categories-section></categories-section>

        <!-- experience area start -->
        <div class="experience experience__background experience__space experience__bottom-up overflow-hidden">
            <!-- /our-project active with 'experience__bottom-up' -->
            <div class="container">
                <div class="row g-24">
                    <div class="col-12">
                        <div class="experience__item-wrapper">
                            <home-counter :startCount="0" :endCount="70" text="Recipes That Slap"></home-counter>

                            <home-counter :startCount="0" :endCount="40" text="Foodie Followers"></home-counter>

                            <home-counter :startCount="0" :endCount="20" text="Chefs On Fire"></home-counter>

                            <home-counter notCounter text="Vibes In the Kitchen"></home-counter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- experience area start -->

        <highlighted-section></highlighted-section>

        <latest-section></latest-section>

        <!-- about area start -->
        <section class="about-2 section-space overflow-hidden">
            <div class="container">
                <div class="about-2__shape">
                    <img src="@/assets/imgs/about-2/burger.png" class="img-fluid leftRight" alt="not found" />
                </div>
                <div class="row g-24 align-items-center">
                    <div class="col-xl-6">
                        <div class="about-2__content">
                            <div class="section__title-wrapper text-start mb-35 mb-xs-40">
                                <span
                                    class="section__subtitle section__subtitle-line-height justify-content-start mb-15 mb-xs-5 wow clip-a-z"
                                    >About Delish</span
                                >
                                <h2 class="section__title mb-0 title-animation">Delicious Food For Healthy Life</h2>
                            </div>

                            <div class="about-2__content-item__wrapper mb-40">
                                <div class="about-2__content-item mb-35">
                                    <div class="about-2__content-item__media">
                                        <img
                                            src="@/assets/imgs/about-2/about-1.png"
                                            class="img-fluid"
                                            alt="not found"
                                        />
                                    </div>
                                    <div class="about-2__content-item__text">
                                        <h6 class="text-uppercase">Quality Food</h6>
                                        <p class="mb-0">
                                            The wise man therefore always holds Indies matters this principle
                                            information
                                        </p>
                                    </div>
                                </div>
                                <div class="about-2__content-item mb-35">
                                    <div class="about-2__content-item__media">
                                        <img
                                            src="@/assets/imgs/about-2/about-2.png"
                                            class="img-fluid"
                                            alt="not found"
                                        />
                                    </div>
                                    <div class="about-2__content-item__text">
                                        <h6 class="text-uppercase">Supply Chain Maintain</h6>
                                        <p class="mb-0">
                                            The wise man therefore always holds Indies matters this principle
                                            information
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a href="blog-details.html" class="rr-btn rr-btn__red wow clip-a-z">
                                <span class="hover-rl"></span>
                                <span class="fake_hover"></span>
                                <span class="btn-wrap">
                                    <span class="text-one"
                                        >Read More <img src="@/assets/imgs/icon/arrow-right-2.svg" alt="not found"
                                    /></span>
                                    <span class="text-two"
                                        >Read More <img src="@/assets/imgs/icon/arrow-right-2.svg" alt="not found"
                                    /></span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="about-2__media wow clip-a-z">
                            <img src="@/assets/imgs/about-2/about-food.jpg" class="img-fluid" alt="image not found" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- about area end -->
    </main>
</template>
