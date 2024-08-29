<script setup>
import RecipeFull from "@/components/recipes/RecipeFull.vue";
import CommentSection from "@/components/recipes/CommentSection.vue";
import SidebarSection from "@/components/recipes/SidebarSection.vue";
import { useRoute } from "vue-router";
import { useRecipesStore } from "@/stores/recipes";
import { onMounted, ref } from "vue";

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

const recipe = recipesStore.recipesArray.find((x) => x.id === recipeId);

const commentsData = ref([]);
onMounted(async () => {
    commentsData.value = await recipesStore.getRecipeComments(recipeId);
});
</script>

<template>
    <section class="blog section-space mt-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <div class="blog__details">
                        <recipe-full :recipe="recipe"></recipe-full>

                        <comment-section :comments="commentsData"></comment-section>
                    </div>
                </div>
                <sidebar-section></sidebar-section>
            </div>
        </div>
    </section>
</template>
