<script setup>
import { ref, onMounted } from "vue";
import { useRecipesStore } from "@/stores/recipes";

defineOptions({
    name: "HighlightedDescription",
});

const props = defineProps({
    highlighted: Object,
});

const recipesStore = useRecipesStore();
const recipeId = props.highlighted.id;
const commentNum = ref([]);
onMounted(async () => {
    const commentsData = await recipesStore.getRecipeComments(recipeId);
    commentNum.value = commentsData.length;
});
</script>

<template>
    <div class="blog-2__item blog-2__item-text">
        <ul class="blog-2__item-author mb-20">
            <li>
                by
                <span>{{ highlighted.author || "Foodista" }}</span>
            </li>
            <li>
                <router-link :to="'/recipes/' + highlighted.id">
                    <img src="@/assets/imgs/blog-2/comment.png" alt="not found" />
                    <span class="ms-2">{{ commentNum }} Comment/s</span>
                </router-link>
            </li>
        </ul>

        <h5 class="mb-70 mt-xl-30 mb-lg-30 mb-md-30 mb-sm-25 mb-xs-20 text-uppercase">
            <router-link :to="'/recipes/' + highlighted.id">{{ highlighted.title }}</router-link>
        </h5>

        <base-button text="Read More" :link="'/recipes/' + highlighted.id" color="red"></base-button>
    </div>
</template>
