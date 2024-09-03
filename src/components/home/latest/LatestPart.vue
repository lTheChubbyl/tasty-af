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
                <router-link :to="'/recipes/' + latest.id">
                    <img :src="latest.image" class="img-fluid" alt="image not found" />
                </router-link>
            </div>

            <div class="blog__item-content">
                <div class="blog__item-content__top">
                    <div class="blog__item-meta-tags d-flex flex-wrap">
                        <a href="blog-details.html">Food Menu</a>
                        <a href="blog-details.html">Food Menu</a>
                    </div>
                    <h6 class="mt-15">
                        <router-link :to="'/recipes/' + latest.id">{{ latest.title }}</router-link>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>
