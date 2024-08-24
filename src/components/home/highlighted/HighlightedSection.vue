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
    <section class="blog-2 our-project section-space__bottom">
        <div class="container">
            <div class="row g-24">
                <div class="col-12">
                    <div class="blog-2__item-wrapper section-bg-2">
                        <highlighted-part :highlighted="highlightedList"></highlighted-part>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
