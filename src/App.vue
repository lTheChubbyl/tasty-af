<script setup>
// import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
</script>

<template>
    <TheHeader />

    <router-view></router-view>

    <TheFooter />
</template>

<style scoped></style>
