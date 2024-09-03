<script setup>
import CommentPart from "./CommentPart.vue";
import CommentForm from "./CommentForm.vue";
import { useRecipesStore } from "@/stores/recipes";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";

defineOptions({
    name: "CommentSection",
    components: {
        CommentPart,
        CommentForm,
    },
});

const recipesStore = useRecipesStore();
const route = useRoute();
const recipeId = +route.params.id;
const commentsData = ref([]);
onMounted(async () => {
    commentsData.value = await recipesStore.getRecipeComments(recipeId);
});
watch(
    () => commentsData.value,
    (newVal) => {
        commentsData.value = newVal;
    }
);
</script>

<template>
    <div class="comment-widget">
        <h4 class="mb-30 mb-xs-25">{{ commentsData.length }} Comments</h4>

        <comment-part v-for="comment in commentsData" :key="comment.id" :comment="comment"></comment-part>

        <comment-form></comment-form>
    </div>
</template>
