<script setup>
defineOptions({
    name: "CategoriesPart",
});

defineProps({
    categories: Object,
});
</script>

<template>
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="our-service-2__item mb-40">
            <router-link :to="categories.categoryLink" class="our-service-2__item-media">
                <img :src="'src/assets/imgs/' + categories.categoryImg" class="img-fluid" alt="image not found" />
            </router-link>
            <a class="btn" :href="categories.categoryLink">{{ categories.categoryName }}</a>
        </div>
    </div>
</template>
