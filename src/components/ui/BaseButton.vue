<script setup>
defineOptions({
    name: "BaseButton",
});

defineProps({
    color: String,
    link: String,
    text: String,
});
</script>

<template>
    <router-link
        :to="link"
        :class="{
            'rr-btn-2 wow clip-a-z': color === 'mix',
            'rr-btn rr-btn__red': color === 'red',
            'rr-btn wow clip-a-z mb-15': color === 'black',
        }"
    >
        <span class="hover-rl"></span>
        <span class="fake_hover"></span>
        <span class="btn-wrap">
            <span class="text-one">{{ text }}<img src="@/assets/imgs/icon/arrow-right.svg" alt="not found" /></span>
            <span class="text-two">{{ text }}<img src="@/assets/imgs/icon/arrow-right.svg" alt="not found" /></span>
        </span>
    </router-link>
</template>
