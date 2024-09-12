<script setup>
import { useRecipesStore } from "@/stores/recipes";

defineOptions({
    name: "RecipePreview",
});

const props = defineProps({
    recipe: Object,
    isUserRecipe: Boolean,
});

const emit = defineEmits(["recipeEdit"]);

const editRecipe = () => {
    console.log(props.recipe, "from recipe preview");
    emit("recipeEdit", props.recipe);
};

const recipesStore = useRecipesStore();
const deleteRecipe = () => {
    recipesStore.deleteUserRecipe(props.recipe.id);
};
</script>

<template>
    <div class="blog-4__item section-bg-2 mb-30">
        <div class="blog-4__item-thumb">
            <router-link class="blog-4__item-thumb-img" :to="'/recipes/' + recipe.id">
                <img :src="recipe.image" class="img-fluid" alt="image not found" />
            </router-link>

            <ul class="blog-4__item-tag">
                <li>
                    <p>
                        <i class="fa-regular fa-clock me-2"></i>
                        {{ recipe.readyInMinutes }} min | {{ recipe.servings }}
                        <i class="fa-solid fa-utensils mx-2"></i>
                    </p>
                </li>
            </ul>
        </div>

        <div class="blog-4__item-content">
            <ul class="blog-4__item-meta mb-15">
                <li><i class="fa-solid fa-circle-user"></i>by {{ recipe.author || "Foodista" }}</li>
            </ul>

            <h4 class="blog-4__item-content-title text-uppercase fw-bold mb-15">
                <router-link :to="'/recipes/' + recipe.id">{{ recipe.title }}</router-link>
            </h4>
            <p class="blog-4__item-content-p mb-20 text-truncate" v-html="recipe.summary"></p>

            <div v-if="isUserRecipe" class="d-flex justify-content-between mb-30">
                <button
                    type="button"
                    class="rr-btn-3__header"
                    data-bs-toggle="modal"
                    data-bs-target="#addRecipeModal"
                    @click="editRecipe"
                >
                    <span class="btn-wrap">
                        <span class="text-one">Edit Recipe <i class="fa-regular fa-plus"></i></span>
                        <span class="text-two">Edit Recipe <i class="fa-regular fa-plus"></i></span>
                    </span>
                </button>
                <button type="button" @click="deleteRecipe">
                    <span class="fs-1 text-danger"><i class="fa-regular fa-trash-can"></i></span>
                </button>
            </div>
            <router-link :to="'/recipes/' + recipe.id" class="readmore" v-else
                >Read Details <i class="fa-regular fa-angles-right"></i
            ></router-link>
        </div>
    </div>
</template>
