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

const commentList = [
    {
        id: 1,
        author: "Daniel Adam",
        date: "10 Mar, 2022",
        content:
            "Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.",
        image: "@/assets/imgs/blog-details/comment-1.jpg",
        isReply: false,
    },
    {
        id: 2,
        author: "Zenelia Lozhe",
        date: "10 Mar, 2022",
        content:
            "Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.",
        image: "@/assets/imgs/blog-details/comment-2.jpg",
        isReply: true,
    },
    {
        id: 3,
        author: "Jhon Smith",
        date: "10 Mar, 2022",
        content:
            "Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.",
        image: "@/assets/imgs/blog-details/comment-3.jpg",
        isReply: false,
    },
];
</script>

<template>
    <div class="comment-widget">
        <h4 class="mb-30 mb-xs-25">{{ commentList.length }} Comments</h4>

        <comment-part v-for="comment in commentList" :key="comment.id" :comment="comment"></comment-part>

        <comment-form></comment-form>
    </div>
</template>
