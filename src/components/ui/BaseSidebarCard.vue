<script setup>
defineOptions({
    name: "BaseSidebarCard",
});

defineProps({
    title: String,
});
</script>

<template>
    <div class="sidebar__widget section-bg-2">
        <h4 class="sidebar__widget-title">{{ title }}</h4>
        <slot></slot>
    </div>
</template>
