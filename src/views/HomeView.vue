<script setup>
import HomeCounter from "@/components/home/HomeCounter.vue";
import CategoriesSection from "@/components/home/categories/CategoriesSection.vue";
import HighlightedSection from "@/components/home/highlighted/HighlightedSection.vue";
import LatestSection from "@/components/home/latest/LatestSection.vue";

defineOptions({
    name: "HomeView",
    components: {
        HomeCounter,
        CategoriesSection,
        HighlightedSection,
        LatestSection,
    },
});
</script>

<template>
    <main>
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
                            <base-button text="Get Cookin'" link="/recipes" color="mix"></base-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <categories-section></categories-section>

        <div class="experience experience__background experience__space experience__bottom-up overflow-hidden">
            <div class="container">
                <div class="row g-24">
                    <div class="col-12">
                        <div class="experience__item-wrapper">
                            <home-counter :endCount="20" text="Recipes That Slap"></home-counter>

                            <home-counter :endCount="45" text="Foodie Followers"></home-counter>

                            <home-counter :endCount="8" text="Chefs On Fire"></home-counter>

                            <home-counter notCounter text="Vibes In the Kitchen"></home-counter>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <highlighted-section></highlighted-section>

        <latest-section></latest-section>

        <section class="cta-2">
            <div class="container">
                <div class="row g-24">
                    <div class="col-12">
                        <div class="cta-2__content">
                            <div class="cta-2__content-text">
                                <span class="text-uppercase">Get Ready to Ignite Your Taste Buds!</span>
                                <h3 class="text-uppercase title-animation">
                                    <router-link to="/auth?mode=register"
                                        >Become a Part of Our Chef Family!</router-link
                                    >
                                </h3>
                            </div>
                            <router-link class="btn-book" to="/auth?mode=register">Sign Up Now</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
