<script setup>
import CommentPart from "./CommentPart.vue";
import CommentForm from "./CommentForm.vue";

defineOptions({
    name: "CommentSection",
    components: {
        CommentPart,
        CommentForm,
    },
});

defineProps({
    comments: Object,
});
</script>

<template>
    <div class="comment-widget">
        <h4 class="mb-30 mb-xs-25">{{ comments.length }} Comments</h4>

        <comment-part v-for="comment in comments" :key="comment.id" :comment="comment"></comment-part>

        <comment-form></comment-form>
    </div>
</template>
