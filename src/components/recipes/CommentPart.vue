<script setup>
import { useRecipesStore } from "@/stores/recipes";
import { useRoute } from "vue-router";
import { computed } from "vue";

defineOptions({
    name: "CommentPart",
});

const props = defineProps({
    comment: Object,
});

const route = useRoute();
const recipeId = +route.params.id;

const recipesStore = useRecipesStore();

const currentUserId = computed(() => JSON.parse(localStorage.getItem("authData"))?.localId);

const deleteComment = async () => {
    await recipesStore.deleteRecipeComment(recipeId, props.comment.id);
};
</script>

<template>
    <div class="comment-item d-flex">
        <div class="comment-item__media">
            <img src="@/assets/imgs/blog-details/author-1.png" class="img-fluid" alt="image not found" />
        </div>

        <div class="comment-item__content">
            <div class="comment-item__header d-flex align-items-center justify-content-between">
                <div class="comment-item__header-left">
                    <span class="date">{{ comment.date }}</span>
                    <h5 class="name">{{ comment.author }}</h5>
                </div>
            </div>
            <p class="mb-0">{{ comment.text }}</p>
        </div>
        <div class="ms-auto d-flex align-items-center" v-if="comment.userId === currentUserId">
            <button @click="deleteComment">
                <i class="fa-solid fa-trash-can text-danger cursor-pointer"></i>
            </button>
        </div>
    </div>
</template>
