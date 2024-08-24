<script setup>
defineOptions({
    name: "BaseButton",
});

defineProps({
    color: String,
    link: String,
    text: String,
    hasArrow: Boolean,
});
</script>

<template>
    <router-link :to="link" class="rr-btn-2 wow clip-a-z" :class="{}">
        <span class="hover-rl"></span>
        <span class="fake_hover"></span>
        <span class="btn-wrap">
            <span class="text-one"
                >{{ text }}<img v-if="hasArrow" src="@/assets/imgs/icon/arrow-right.svg" alt="not found"
            /></span>
            <span class="text-two"
                >{{ text }}<img v-if="hasArrow" src="@/assets/imgs/icon/arrow-right.svg" alt="not found"
            /></span>
        </span>
    </router-link>

    <router-link :to="highlighted.link" class="rr-btn rr-btn__red">
        <span class="hover-rl"></span>
        <span class="fake_hover"></span>
        <span class="btn-wrap">
            <span class="text-one">Read More <img src="@/assets/imgs/icon/arrow-right-2.svg" alt="not found" /></span>
            <span class="text-two">Read More <img src="@/assets/imgs/icon/arrow-right-2.svg" alt="not found" /></span>
        </span>
    </router-link>

    <router-link to="/auth" class="rr-btn-2__header">
        <span class="hover-rl"></span>
        <span class="fake_hover"></span>
        <span class="btn-wrap">
            <span class="text-one">Sign Up Now</span>
            <span class="text-two">Sign Up Now</span>
        </span>
    </router-link>
</template>
