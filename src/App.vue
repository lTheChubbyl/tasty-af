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

<style scoped>
.route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.route-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.route-enter-active {
    transition: all 0.3s ease-out;
}

.route-leave-active {
    transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
