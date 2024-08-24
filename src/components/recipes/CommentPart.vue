<script setup>
defineOptions({
    name: "CommentPart",
});

defineProps({
    comment: Object,
});
</script>

<template>
    <div class="comment-item d-flex" :class="{ 'comment-item__reply': comment.isReply }">
        <div class="comment-item__media">
            <img src="@/assets/imgs/blog-details/author-1.png" class="img-fluid" alt="image not found" />
        </div>

        <div class="comment-item__content">
            <div class="comment-item__header d-flex align-items-center justify-content-between">
                <div class="comment-item__header-left">
                    <span class="date">{{ comment.date }}</span>
                    <h5 class="name">{{ comment.author }}</h5>
                </div>
                <div class="comment-item__header-right">
                    <button>
                        Reply
                        <img src="@/assets/imgs/icon/angle-trun-left.svg" alt="icon not found" />
                    </button>
                </div>
            </div>
            <p class="mb-0">{{ comment.content }}</p>
        </div>
    </div>
</template>
