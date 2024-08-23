<script setup>
defineOptions({
    name: "RecipePreview",
});

defineProps({
    recipe: Object,
});
</script>

<template>
    <div class="blog-4__item section-bg-2 mb-30">
        <div class="blog-4__item-thumb">
            <router-link class="blog-4__item-thumb-img" to="/recipes/1">
                <img src="@/assets/imgs/blog-4/blog-4__item-2.png" class="img-fluid" alt="image not found" />
            </router-link>

            <ul class="blog-4__item-tag">
                <li v-for="tag in recipe.tags" :key="tag">
                    <router-link to="/recipes/1">{{ tag }}</router-link>
                </li>
            </ul>
        </div>

        <div class="blog-4__item-content">
            <ul class="blog-4__item-meta mb-15">
                <li><i class="fa-regular fa-calendar"></i>{{ recipe.date.full }}</li>
                <li>
                    <router-link to="/recipes/1"><i class="fa-regular fa-user"></i>by {{ recipe.author }}</router-link>
                </li>
            </ul>

            <h4 class="blog-4__item-content-title text-uppercase fw-bold mb-15">
                <router-link to="/recipes/1">{{ recipe.title }}</router-link>
            </h4>
            <p class="blog-4__item-content-p mb-20">
                {{ recipe.description.short }}
            </p>

            <router-link to="/recipes/1" class="readmore"
                >Read Details <i class="fa-regular fa-angles-right"></i
            ></router-link>
        </div>
    </div>
</template>
