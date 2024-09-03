<script setup>
import RecipeFull from "@/components/recipes/RecipeFull.vue";
import CommentSection from "@/components/recipes/CommentSection.vue";
import SidebarSection from "@/components/recipes/SidebarSection.vue";
import { useRoute } from "vue-router";
import { useRecipesStore } from "@/stores/recipes";

defineOptions({
    name: "RecipeDetailView",
    components: {
        RecipeFull,
        CommentSection,
        SidebarSection,
    },
});

const recipesStore = useRecipesStore();
const route = useRoute();
const recipeId = +route.params.id;

const recipe =
    recipesStore.recipesArray.find((x) => x.id === recipeId) ||
    recipesStore.staticRecipesArray.find((x) => x.id === recipeId);
</script>

<template>
    <section class="blog section-space mt-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <div class="blog__details">
                        <recipe-full :recipe="recipe"></recipe-full>

                        <comment-section></comment-section>
                    </div>
                </div>
                <sidebar-section></sidebar-section>
            </div>
        </div>
    </section>
</template>
