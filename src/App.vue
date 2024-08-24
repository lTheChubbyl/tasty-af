<script setup>
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";

defineOptions({
    name: "App",
    components: {
        TheHeader,
        TheFooter,
    },
});
</script>

<template>
    <TheHeader />

    <router-view></router-view>

    <TheFooter />
</template>
