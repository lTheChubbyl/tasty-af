<script setup>
import BaseSidebarCard from "@/components/ui/BaseSidebarCard.vue";
import { useRecipesStore } from "@/stores/recipes";
import { ref, watch } from "vue";

defineOptions({
    name: "SidebarSearch",
    components: {
        BaseSidebarCard,
    },
});

const sidebarSearchInput = ref("");
const recipesStore = useRecipesStore();

watch(
    () => recipesStore.searchTerm,
    (newVal) => {
        sidebarSearchInput.value = newVal;
    }
);

const searchRecipes = async () => {
    if (sidebarSearchInput.value) {
        await recipesStore.searchRecipes(sidebarSearchInput.value);
        recipesStore.searchTerm = sidebarSearchInput.value;
        sidebarSearchInput.value = "";
    }
};

const resetSearch = () => {
    sidebarSearchInput.value = "";
    recipesStore.searchTerm = "";
};
</script>

<template>
    <base-sidebar-card title="Search">
        <div class="sidebar__widget-search">
            <div class="search__bar">
                <input type="text" id="search" placeholder="Enter Keyword" v-model="sidebarSearchInput" />
                <button v-if="!sidebarSearchInput" class="search-btn" @click="searchRecipes">
                    <i class="fa-regular fa-magnifying-glass fs-2"></i>
                </button>
                <button v-else class="clear-btn" @click="resetSearch">
                    <i class="fa-regular fa-xmark fs-2"></i>
                </button>
            </div>
        </div>
    </base-sidebar-card>
</template>
