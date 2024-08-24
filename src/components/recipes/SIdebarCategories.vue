<script setup>
import BaseSidebarCard from "@/components/ui/BaseSidebarCard.vue";

defineOptions({
    name: "SidebarCategories",
    components: {
        BaseSidebarCard,
    },
});

const categories = ["All Recipes", "Breakfast", "Lunch", "Dinner", "Desserts"];
</script>

<template>
    <base-sidebar-card title="Categories">
        <div class="sidebar__widget-category">
            <router-link v-for="category in categories" :key="category" to="/recipes">
                {{ category }}<i class="fa-solid fa-arrow-right"></i>
            </router-link>
        </div>
    </base-sidebar-card>
</template>
