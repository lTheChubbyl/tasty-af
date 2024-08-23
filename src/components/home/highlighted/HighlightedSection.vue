<script setup>
import HighlightedPart from "./HighlightedPart.vue";

defineOptions({
    name: "HighlightedSection",
    components: {
        HighlightedPart,
    },
});
</script>

<template>
    <!-- blog-2 area start -->
    <section class="blog-2 our-project section-space__bottom">
        <div class="container">
            <!-- <div class="row g-24">
                    <div class="col-12">
                        <div class="section__title-wrapper text-center mb-70 mb-sm-50 mb-xs-40">
                            <span class="section__subtitle justify-content-center mb-10 mb-xs-5 wow clip-a-z"
                                >News Posts</span
                            >
                            <h2 class="section__title mb-10 mb-xs-5 title-animation">Latest Blog Insights</h2>
                            <div class="dot-shpae wow clip-a-z">
                                <img
                                    class="img-fluid"
                                    src="../assets/imgs/section-title/dot-shape.svg"
                                    alt="not found"
                                />
                            </div>
                        </div>
                    </div>
                </div> -->

            <div class="row g-24">
                <div class="col-12">
                    <div class="blog-2__item-wrapper section-bg-2">
                        <highlighted-part :highlighted="highlightedList"></highlighted-part>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- blog-2 area start -->
</template>

<style scoped></style>
