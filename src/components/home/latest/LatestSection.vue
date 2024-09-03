<script setup>
import LatestPart from "./LatestPart.vue";
import { useRecipesStore } from "@/stores/recipes";

defineOptions({
    name: "LatestSection",
    components: {
        LatestPart,
    },
});

const recipesStore = useRecipesStore();
const latestList = recipesStore.staticRecipesArray;
</script>

<template>
    <!-- blog area start -->
    <section class="blog section-space__bottom">
        <div class="container">
            <div class="row g-24 mb-70 mb-sm-50 mb-xs-40 align-items-lg-end align-items-center">
                <div class="col-xl-6">
                    <div class="section__title-wrapper text-center text-xl-start">
                        <span class="section__subtitle justify-content-start mb-10 mb-xs-5 wow clip-a-z"
                            >Our collection</span
                        >
                        <h2 class="section__title mb-0 title-animation">Latest additions</h2>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div
                        class="d-flex justify-content-xl-end mt-xs-10 mt-sm-10 mt-md-10 mt-lg-10 justify-content-center"
                    >
                        <base-button text="View all recipes" link="/recipes" color="black"></base-button>
                    </div>
                </div>
            </div>

            <div class="row g-24 mb-minus-24">
                <latest-part v-for="latest in latestList" :key="latest.id" :latest="latest"></latest-part>
            </div>
        </div>
    </section>
    <!-- blog area start -->
</template>
