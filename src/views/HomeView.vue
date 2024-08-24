<script>
import HomeCounter from "@/components/home/HomeCounter.vue";
import CategoriesSection from "@/components/home/categories/CategoriesSection.vue";
import HighlightedSection from "@/components/home/highlighted/HighlightedSection.vue";
import LatestSection from "@/components/home/latest/LatestSection.vue";

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

        <!-- cta area start -->
        <section class="cta-2" data-background="@/assets/imgs/cta-2/cta.jpg">
            <div class="container">
                <div class="row g-24">
                    <div class="col-12">
                        <div class="cta-2__content">
                            <div class="cta-2__content-text">
                                <span class="text-uppercase">Get Ready to Ignite Your Taste Buds!</span>
                                <h3 class="text-uppercase title-animation">
                                    <a href="auth.html">Become a Part of Our Chef Family!</a>
                                </h3>
                            </div>
                            <a class="btn-book" href="auth.html">Sign Up Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- cta area start -->
    </main>
</template>
