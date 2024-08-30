<script setup>
defineOptions({
    name: "HighlightedImage",
});

defineProps({
    highlighted: Object,
});
</script>

<template>
    <div class="blog-2__item">
        <router-link :to="'/recipes/' + highlighted.id" class="blog-2__item-media wow clip-a-z">
            <img :src="highlighted.image" alt="not found" />
        </router-link>
    </div>
</template>
