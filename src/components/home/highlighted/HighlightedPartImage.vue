<script setup>
defineOptions({
    name: "HighlightedPartImage",
});

defineProps({
    highlighted: Object,
});
</script>

<template>
    <div class="blog-2__item">
        <div class="blog-2__item-date">
            {{ highlighted.date.day }} <span>{{ highlighted.date.month }}</span>
        </div>
        <router-link :to="highlighted.link" class="blog-2__item-media wow clip-a-z">
            <img src="@/assets/imgs/blog-2/blog-2__item-1.png" alt="not found" />
        </router-link>
    </div>
</template>
