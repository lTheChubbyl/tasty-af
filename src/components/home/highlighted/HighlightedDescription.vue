<script setup>
defineOptions({
    name: "HighlightedDescription",
});

defineProps({
    highlighted: Object,
});
</script>

<template>
    <div class="blog-2__item blog-2__item-text">
        <ul class="blog-2__item-author mb-20">
            <li>
                <img src="@/assets/imgs/blog-2/author-1.png" alt="not found" />
                <span>{{ highlighted.author || "Foodista" }}</span>
            </li>
            <li>
                <router-link :to="'/recipes/' + highlighted.id">
                    <img src="@/assets/imgs/blog-2/comment.png" alt="not found" />
                    <span>{{ highlighted.commentsNum || 0 }} Comment/s</span>
                </router-link>
            </li>
        </ul>

        <h5 class="mb-70 mt-xl-30 mb-lg-30 mb-md-30 mb-sm-25 mb-xs-20 text-uppercase">
            <router-link :to="'/recipes/' + highlighted.id">{{ highlighted.title }}</router-link>
        </h5>

        <base-button text="Read More" :link="'/recipes/' + highlighted.id" color="red"></base-button>
    </div>
</template>
