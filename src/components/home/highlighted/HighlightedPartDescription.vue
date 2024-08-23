<script setup>
defineOptions({
    name: "HighlightedPartDescription",
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
                <span>{{ highlighted.author }}</span>
            </li>
            <li>
                <router-link :to="highlighted.link">
                    <img src="@/assets/imgs/blog-2/comment.png" alt="not found" />
                    <span>{{ highlighted.commentsNum }} Comment/s</span>
                </router-link>
            </li>
        </ul>

        <h5 class="mb-70 mt-xl-30 mb-lg-30 mb-md-30 mb-sm-25 mb-xs-20 text-uppercase">
            <router-link :to="highlighted.link">How Restaurants Foster Connections and Create Memories</router-link>
        </h5>

        <router-link :to="highlighted.link" class="rr-btn rr-btn__red">
            <span class="hover-rl"></span>
            <span class="fake_hover"></span>
            <span class="btn-wrap">
                <span class="text-one"
                    >Read More <img src="@/assets/imgs/icon/arrow-right-2.svg" alt="not found"
                /></span>
                <span class="text-two"
                    >Read More <img src="@/assets/imgs/icon/arrow-right-2.svg" alt="not found"
                /></span>
            </span>
        </router-link>
    </div>
</template>
