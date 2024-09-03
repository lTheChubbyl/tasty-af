<script setup>
import RecipePreview from "@/components/recipes/RecipePreview.vue";
import SidebarSection from "@/components/recipes/SidebarSection.vue";
import { useRecipesStore } from "@/stores/recipes";
import { ref, watch } from "vue";

defineOptions({
    name: "RecipesView",
    components: {
        RecipePreview,
        SidebarSection,
    },
});

const recipesStore = useRecipesStore();

const recipes = ref(null);
recipes.value = recipesStore.recipesArray;
watch(
    () => recipesStore.recipesArray,
    (newVal) => {
        recipes.value = newVal;
    }
);

const searchActive = ref(false);
searchActive.value = recipesStore.searchActive;
watch(
    () => recipesStore.searchActive,
    (newVal) => {
        searchActive.value = newVal;
    }
);
</script>

<template>
    <base-half-hero title="Recipes page" page="Recipes" image="@/assets/imgs/cta-2/cta.jpg"></base-half-hero>

    <section class="blog-4 section-space">
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <div class="blog-4__left">
                        <p v-if="searchActive" class="fs-2">
                            Showing ({{ recipesStore.recipesArray.length }}) results for search term -
                            <span class="fw-bold">"{{ recipesStore.searchTerm }}"</span>
                        </p>

                        <recipe-preview v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></recipe-preview>

                        <ul class="blog-4__pagination d-flex flex-wrap align-items-center justify-content-start">
                            <li><a class="active" href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li>
                                <a href="#"><i class="fa-regular fa-arrow-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <sidebar-section></sidebar-section>
            </div>
        </div>
    </section>
</template>
