<script setup>
defineOptions({
    name: "RecipeFull",
});

defineProps({
    recipe: Object,
});
</script>

<template>
    <div class="blog__details-thumb mb-35">
        <img :src="recipe.image" class="img-fluid" alt="image not found" />
    </div>

    <ul class="blog__details-meta mb-15">
        <li><i class="fa-solid fa-circle-user"></i>by {{ recipe.author || "Foodista" }}</li>
    </ul>

    <div class="blog__details-content">
        <h4>{{ recipe.title }}</h4>
        <p v-html="recipe.summary"></p>

        <h5>ingredients</h5>
        <ul>
            <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">{{ ingredient.original }}</li>
        </ul>

        <h5>Instructions</h5>
        <ol>
            <li v-for="step in recipe.analyzedInstructions[0].steps" :key="step.number">{{ step.step }}</li>
        </ol>

        <div
            class="blog__details-pagination mb-60 mb-xs-50 mt-35 mt-xs-30 d-flex flex-column flex-md-row align-items-center justify-content-md-between"
        >
            <!-- <a href="blog-details.html" class="blog__details-pagination-prev d-flex align-items-center">
                <span class="thumb">
                    <img src="@/assets/imgs/blog-details/pagination-prev.jpg" alt="not found" />
                </span>
                <span class="text">
                    <span class="title">Previous Post</span>
                </span>
            </a> -->

            <div class="dot mx-auto"><img src="@/assets/imgs/blog-details/dot.png" alt="not found" /></div>

            <!-- <a href="blog-details.html" class="blog__details-pagination-next d-flex align-items-center">
                <span class="text">
                    <span class="title">Next Post</span>
                </span>

                <span class="thumb">
                    <img src="@/assets/imgs/blog-details/pagination-next.jpg" alt="not found" />
                </span>
            </a> -->
        </div>
    </div>
</template>
