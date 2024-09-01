<script setup>
import BaseSidebarCard from "@/components/ui/BaseSidebarCard.vue";
import { useRecipesStore } from "@/stores/recipes";

defineOptions({
    name: "SidebarCategories",
    components: {
        BaseSidebarCard,
    },
});

const categoryArray = useRecipesStore().categoryArray;
</script>

<template>
    <base-sidebar-card title="Categories">
        <div class="sidebar__widget-category">
            <router-link v-for="category in categoryArray" :key="category" :to="'/recipes?category=' + category.key">
                {{ category.value }}<i class="fa-solid fa-arrow-right"></i>
            </router-link>
        </div>
    </base-sidebar-card>
</template>
