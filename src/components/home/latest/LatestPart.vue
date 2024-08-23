<script setup>
defineOptions({
    name: "LatestSection",
});

defineProps({
    latest: Object,
});
</script>

<template>
    <div class="col-xl-4 col-md-6">
        <div class="blog__item mb-24">
            <div class="blog__item-media">
                <router-link :to="latest.link">
                    <img src="@/assets/imgs/blog/blog-3.png" class="img-fluid" alt="image not found" />
                </router-link>
                <div class="blog__item-date">
                    {{ latest.date.day }} <span>{{ latest.date.month }}</span>
                </div>
            </div>

            <div class="blog__item-content">
                <div class="blog__item-content__top">
                    <div class="blog__item-meta-tags d-flex flex-wrap">
                        <router-link v-for="tag in latest.tags" :key="tag" :to="tag.link">{{ tag.name }}</router-link>
                    </div>
                    <h6 class="mt-15">
                        <router-link :to="latest.link">{{ latest.title }}</router-link>
                    </h6>
                </div>
                <div class="blog__item-content__bottom">
                    <div class="blog__item-content__bottom-text">
                        <router-link :to="latest.link">
                            <img src="@/assets/imgs/blog/comment.png" alt="not found" />
                            <span>{{ latest.commentNum }} Comment/s</span>
                        </router-link>
                    </div>
                    <router-link :to="latest.link" class="blog__item-content__bottom-readmore">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 1C7.7 1 14 1 17 1M17 1V10.5M17 1L1 17" stroke="#74787C" stroke-width="2" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
