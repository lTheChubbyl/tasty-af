<script setup>
import { computed } from "vue";

defineOptions({
    name: "CategoriesPart",
});

const props = defineProps({
    categories: Object,
});

const categoryImg = computed(() => {
    return "@/assets/imgs/our-service-2/" + props.categories.categoryImg;
});

categoryImg;
</script>

<template>
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="our-service-2__item mb-40">
            <router-link :to="categories.categoryLink" class="our-service-2__item-media">
                <img src="@/assets/imgs/our-service-2/our-service-1.jpg" class="img-fluid" alt="image not found" />
            </router-link>
            <a class="btn" :href="categories.categoryLink">{{ categories.categoryName }}</a>
        </div>
    </div>
</template>
