<script setup>
import RecipePreview from "@/components/recipes/RecipePreview.vue";
import SidebarSection from "@/components/recipes/SidebarSection.vue";

defineOptions({
    name: "RecipesView",
    components: {
        RecipePreview,
        SidebarSection,
    },
});

const recipes = [
    {
        id: 1,
        title: "Exploring the World of Food and Wine",
        description: {
            short: "Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reintermediate client based materials...",
            full: "Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reintermediate client based materials...Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reintermediate client based materials...",
        },
        tags: ["Foodies", "Food", "Wine"],
        author: "John Doe",
        date: {
            full: "20 Jan, 2024",
            short: "20/01/2024",
        },
    },
    {
        id: 2,
        title: "What It Takes to Achieve Excellence",
        description: {
            short: "Dramatically for value added partnerships. Holisticly reintermediate client based materials...Efficiently reinvent installed base opportunities after team driven quality vectors.",
            full: "Dramatically for value added partnerships. Holisticly reintermediate client based materials...Efficiently reinvent installed base opportunities after team driven quality vectors.Dramatically for value added partnerships. Holisticly reintermediate client based materials...Efficiently reinvent installed base opportunities after team driven quality vectors.",
        },
        tags: ["Food Blog", "Restaurant", "Drink"],
        author: "Jane Doe",
        date: {
            full: "15 Mar, 2024",
            short: "15/03/2024",
        },
    },
    {
        id: 3,
        title: "Affordable Gourmet Experiences",
        description: {
            short: "Holisticly reintermediate client based materials...Efficiently reinvent installed base opportunities after team driven quality vectors.",
            full: "Holisticly reintermediate client based materials...Efficiently reinvent installed base opportunities after team driven quality vectors.Holisticly reintermediate client based materials...Efficiently reinvent installed base opportunities after team driven quality vectors.",
        },
        tags: ["Cocktails", "Dinner", "Foodie"],
        author: "Bob Smith",
        date: {
            full: "30 Apr, 2024",
            short: "30/04/2024",
        },
    },
];
</script>

<template>
    <!-- Breadcrumb area start  -->
    <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
        <div class="breadcrumb__background" data-background="@/assets/imgs/breadcrumb/page-header-1.png"></div>
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-12">
                    <div class="breadcrumb__content text-center">
                        <h2 class="breadcrumb__title color-white title-animation">Latest News</h2>

                        <div class="breadcrumb__menu">
                            <nav>
                                <ul>
                                    <li>
                                        <span><a href="index.html">Home</a></span>
                                    </li>
                                    <li class="active"><span>Latest News</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <span class="breadcrumb__big-title">News Insights</span>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb area start  -->

    <!-- blog area start  -->
    <section class="blog-4 section-space">
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <div class="blog-4__left">
                        <!-- <div class="blog-4__item section-bg-2 mb-30">
                            <div class="blog-4__item-thumb">
                                <a
                                    href="https://www.youtube.com/watch?v=dyNpojnbNT4"
                                    class="blog-4__item-popup-video popup-video"
                                    data-effect="mfp-move-from-top vertical-middle"
                                >
                                    <i class="fa-sharp fa-solid fa-play zooming1"></i>
                                </a>
                                <a class="blog-4__item-thumb-img" href="blog-details.html">
                                    <img
                                        src="@/assets/imgs/blog-4/blog-4__item-3.png"
                                        class="img-fluid"
                                        alt="image not found"
                                    />
                                </a>

                                <ul class="blog-4__item-tag">
                                    <li><a href="blog-details.html">Foodies</a></li>
                                </ul>
                            </div>

                            <div class="blog-4__item-content">
                                <ul class="blog-4__item-meta mb-15">
                                    <li><i class="fa-regular fa-calendar"></i>24 Feb, 2024</li>
                                    <li>
                                        <a href="blog-details.html"><i class="fa-regular fa-user"></i>by admin</a>
                                    </li>
                                </ul>

                                <h4 class="blog-4__item-content-title text-uppercase fw-bold mb-15">
                                    <a href="blog-details.html">What It Takes to Achieve Excellence</a>
                                </h4>
                                <p class="blog-4__item-content-p mb-20">
                                    Efficiently reinvent installed base opportunities after team driven quality vectors.
                                    Dramatically for value added partnerships. Holisticly reintermediate client based
                                    materials...
                                </p>

                                <a href="blog-details.html" class="readmore"
                                    >Read Details <i class="fa-regular fa-angles-right"></i
                                ></a>
                            </div>
                        </div>

                        <div class="blog-4__item section-bg-2 mb-30">
                            <div class="blog-4__item-thumb">
                                <div class="swiper blog-4__item__thumb-slider">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a class="blog-4__item__thumb-slider__item" href="blog-details.html">
                                                <img
                                                    src="@/assets/imgs/blog-4/blog-4__item-4.png"
                                                    class="img-fluid"
                                                    alt="image not found"
                                                />
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a class="blog-4__item__thumb-slider__item" href="blog-details.html">
                                                <img
                                                    src="@/assets/imgs/blog-4/blog-4__item-1.png"
                                                    class="img-fluid"
                                                    alt="image not found"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="blog-4__item__thumb-slider__arrow d-flex justify-content-between">
                                        <button
                                            class="blog-4__item__thumb-slider__arrow-prev d-flex align-items-center justify-content-center wow clip-a-z"
                                        >
                                            <i class="fa-solid fa-arrow-left"></i>
                                        </button>

                                        <button
                                            class="blog-4__item__thumb-slider__arrow-next d-flex align-items-center justify-content-center wow clip-a-z"
                                        >
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="blog-4__item-content">
                                <ul class="blog-4__item-meta mb-15">
                                    <li><i class="fa-regular fa-calendar"></i>24 Feb, 2024</li>
                                    <li>
                                        <a href="blog-details.html"><i class="fa-regular fa-user"></i>by admin</a>
                                    </li>
                                </ul>

                                <h4 class="blog-4__item-content-title text-uppercase fw-bold mb-15">
                                    <a href="blog-details.html">Affordable Gourmet Experiences</a>
                                </h4>
                                <p class="blog-4__item-content-p mb-20">
                                    Efficiently reinvent installed base opportunities after team driven quality vectors.
                                    Dramatically for value added partnerships. Holisticly reintermediate client based
                                    materials...
                                </p>

                                <a href="blog-details.html" class="readmore"
                                    >Read Details <i class="fa-regular fa-angles-right"></i
                                ></a>
                            </div>
                        </div> -->

                        <recipe-preview v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></recipe-preview>

                        <ul class="blog-4__pagination d-flex flex-wrap align-items-center justify-content-start">
                            <li><a class="active" href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li>
                                <a href="blog-details.html"><i class="fa-regular fa-arrow-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <sidebar-section></sidebar-section>
            </div>
        </div>
    </section>
    <!-- blog area end  -->
</template>
