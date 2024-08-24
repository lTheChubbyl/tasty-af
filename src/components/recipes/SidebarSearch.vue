<script setup>
import BaseSidebarCard from "@/components/ui/BaseSidebarCard.vue";

defineOptions({
    name: "SidebarSearch",
    components: {
        BaseSidebarCard,
    },
});
</script>

<template>
    <base-sidebar-card title="Search">
        <div class="sidebar__widget-search">
            <div class="search__bar">
                <input type="text" id="search" placeholder="Enter Keyword" />
                <button>
                    <i class="fa-regular fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    </base-sidebar-card>
</template>
