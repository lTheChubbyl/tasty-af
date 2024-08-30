<script setup>
import HighlightedImage from "./HighlightedImage.vue";
import HighlightedDescription from "./HighlightedDescription.vue";
import { useRecipesStore } from "@/stores/recipes";

defineOptions({
    name: "HighlightedSection",
    components: {
        HighlightedImage,
        HighlightedDescription,
    },
});

const recipesStore = useRecipesStore();
const highlightedList = recipesStore.recipesArray.slice(0, 2);
</script>

<template>
    <section class="blog-2 our-project section-space__bottom">
        <div class="container">
            <div class="row g-24">
                <div class="col-12">
                    <div class="blog-2__item-wrapper section-bg-2 mt-5">
                        <highlighted-image :highlighted="highlightedList[0]"></highlighted-image>
                        <highlighted-description :highlighted="highlightedList[0]"></highlighted-description>
                        <highlighted-description :highlighted="highlightedList[1]"></highlighted-description>
                        <highlighted-image :highlighted="highlightedList[1]"></highlighted-image>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
