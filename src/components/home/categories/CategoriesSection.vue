<script setup>
import CategoriesPart from "./CategoriesPart.vue";

defineOptions({
    name: "CategoriesSection",
    components: {
        CategoriesPart,
    },
});

const categoryList = [
    {
        categoryId: 1,
        categoryLink: "/recipes?category=1",
        categoryImg: "breakfast.jpg",
        categoryName: "Breakfast",
    },
    {
        categoryId: 2,
        categoryLink: "/recipes?category=2",
        categoryImg: "lunch.jpg",
        categoryName: "Lunch",
    },
    {
        categoryId: 3,
        categoryLink: "/recipes?category=3",
        categoryImg: "dinner.jpg",
        categoryName: "Dinner",
    },
    {
        categoryId: 4,
        categoryLink: "/recipes?category=4",
        categoryImg: "dessert.jpg",
        categoryName: "Dessert",
    },
];
</script>

<template>
    <section class="our-service-2 section-space">
        <div class="container">
            <div class="row g-24">
                <div class="col-12">
                    <div class="section__title-wrapper text-center mb-70 mb-sm-50 mb-xs-40">
                        <span class="section__subtitle justify-content-center mb-10 mb-xs-5 wow clip-a-z"
                            >Our Services</span
                        >
                        <h2 class="section__title mb-10 mb-xs-5 title-animation">Discover Our Categories</h2>
                        <div class="dot-shpae wow clip-a-z">
                            <img class="img-fluid" src="@/assets/imgs/section-title/dot-shape.svg" alt="not found" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-24 mb-minus-40">
                <categories-part
                    v-for="category in categoryList"
                    :key="category.categoryId"
                    :categories="category"
                ></categories-part>
            </div>
        </div>
    </section>
</template>
