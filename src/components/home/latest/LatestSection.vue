<script setup>
import LatestPart from "./LatestPart.vue";

defineOptions({
    name: "LatestSection",
    components: {
        LatestPart,
    },
});

const latestList = [
    {
        link: "/recipes/1",
        date: {
            day: "20",
            month: "Feb",
        },
        tags: [
            { name: "Food", link: "#" },
            { name: "Blog", link: "#" },
        ],
        title: "How Modern Restaurants Are Redefining Culinary",
        commentNum: 2,
    },
    {
        link: "/recipes/2",
        date: {
            day: "27",
            month: "Nov",
        },
        tags: [
            { name: "Food", link: "#" },
            { name: "Restaurant", link: "#" },
        ],
        title: "The Restaurants from Humble Beginnings to Local",
        commentNum: 3,
    },
    {
        link: "/recipes/3",
        date: {
            day: "31",
            month: "Dec",
        },
        tags: [
            { name: "Food", link: "#" },
            { name: "Restaurant", link: "#" },
            { name: "Blog", link: "#" },
        ],
        title: "Eco Friendly Practices in the Restaurant Industry",
        commentNum: 4,
    },
];
</script>

<template>
    <!-- blog area start -->
    <section class="blog section-space__bottom">
        <div class="container">
            <div class="row g-24 mb-70 mb-sm-50 mb-xs-40 align-items-lg-end align-items-center">
                <div class="col-xl-6">
                    <div class="section__title-wrapper text-center text-xl-start">
                        <span class="section__subtitle justify-content-start mb-10 mb-xs-5 wow clip-a-z"
                            >Our Blog Posts</span
                        >
                        <h2 class="section__title mb-0 title-animation">latest news insights</h2>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div
                        class="d-flex justify-content-xl-end mt-xs-10 mt-sm-10 mt-md-10 mt-lg-10 justify-content-center"
                    >
                        <a href="/recipes" class="rr-btn wow clip-a-z mb-15">
                            <span class="hover-rl"></span>
                            <span class="fake_hover"></span>
                            <span class="btn-wrap">
                                <span class="text-one"
                                    >View all posts <img src="@/assets/imgs/icon/arrow-right-1.svg" alt="not found"
                                /></span>
                                <span class="text-two"
                                    >View all posts <img src="@/assets/imgs/icon/arrow-right-1.svg" alt="not found"
                                /></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="row g-24 mb-minus-24">
                <!-- <div class="col-xl-4 col-md-6">
                    <div class="blog__item mb-24">
                        <div class="blog__item-media">
                            <a href="blog-details.html">
                                <img src="../assets/imgs/blog/blog-1.png" class="img-fluid" alt="image not found" />
                            </a>
                            <div class="blog__item-date">20 <span>Feb</span></div>
                        </div>

                        <div class="blog__item-content">
                            <div class="blog__item-content__top">
                                <div class="blog__item-meta-tags d-flex flex-wrap">
                                    <a href="blog-details.html">Food Menu</a>
                                    <a href="blog-details.html">Food Menu</a>
                                </div>
                                <h6 class="mt-15">
                                    <a href="blog-details.html">How Modern Restaurants Are Redefining Culinary</a>
                                </h6>
                            </div>
                            <div class="blog__item-content__bottom">
                                <div class="blog__item-content__bottom-text">
                                    <a href="blog-details.html"
                                        ><img src="../assets/imgs/blog/comment.png" alt="not found" />
                                        <span>02 Comments</span></a
                                    >
                                </div>
                                <a href="blog-details.html" class="blog__item-content__bottom-readmore">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.5 1C7.7 1 14 1 17 1M17 1V10.5M17 1L1 17"
                                            stroke="#74787C"
                                            stroke-width="2"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="blog__item mb-24">
                        <div class="blog__item-media">
                            <a href="blog-details.html">
                                <img src="../assets/imgs/blog/blog-2.png" class="img-fluid" alt="image not found" />
                            </a>
                            <div class="blog__item-date">27 <span>Nov</span></div>
                        </div>

                        <div class="blog__item-content">
                            <div class="blog__item-content__top">
                                <div class="blog__item-meta-tags d-flex flex-wrap">
                                    <a href="blog-details.html">Food Menu</a>
                                </div>
                                <h6 class="mt-15">
                                    <a href="blog-details.html">The Restaurants from Humble Beginnings to Local</a>
                                </h6>
                            </div>
                            <div class="blog__item-content__bottom">
                                <div class="blog__item-content__bottom-text">
                                    <a href="blog-details.html"
                                        ><img src="../assets/imgs/blog/comment.png" alt="not found" />
                                        <span>12 Comments</span></a
                                    >
                                </div>
                                <a href="blog-details.html" class="blog__item-content__bottom-readmore">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.5 1C7.7 1 14 1 17 1M17 1V10.5M17 1L1 17"
                                            stroke="#74787C"
                                            stroke-width="2"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="blog__item mb-24">
                        <div class="blog__item-media">
                            <a href="blog-details.html">
                                <img src="../assets/imgs/blog/blog-3.png" class="img-fluid" alt="image not found" />
                            </a>
                            <div class="blog__item-date">31 <span>Dec</span></div>
                        </div>

                        <div class="blog__item-content">
                            <div class="blog__item-content__top">
                                <div class="blog__item-meta-tags d-flex flex-wrap">
                                    <a href="blog-details.html">Food Menu</a>
                                </div>
                                <h6 class="mt-15">
                                    <a href="blog-details.html">Eco Friendly Practices in the Restaurant Industry</a>
                                </h6>
                            </div>
                            <div class="blog__item-content__bottom">
                                <div class="blog__item-content__bottom-text">
                                    <a href="blog-details.html"
                                        ><img src="../assets/imgs/blog/comment.png" alt="not found" />
                                        <span>12 Comments</span></a
                                    >
                                </div>
                                <a href="blog-details.html" class="blog__item-content__bottom-readmore">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.5 1C7.7 1 14 1 17 1M17 1V10.5M17 1L1 17"
                                            stroke="#74787C"
                                            stroke-width="2"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> -->
                <latest-part v-for="latest in latestList" :key="latest.id" :latest="latest"></latest-part>
            </div>
        </div>
    </section>
    <!-- blog area start -->
</template>
