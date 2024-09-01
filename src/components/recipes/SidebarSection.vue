<script setup>
import SidebarSearch from "./SidebarSearch.vue";
import SidebarCategories from "./SIdebarCategories.vue";

defineOptions({
    name: "SidebarSection",
    components: {
        SidebarSearch,
        SidebarCategories,
    },
});
</script>

<template>
    <div class="col-xl-4">
        <div class="blog-4__right sidebar-rr-sticky">
            <div class="sidebar">
                <sidebar-search></sidebar-search>

                <sidebar-categories></sidebar-categories>
            </div>
        </div>
    </div>
</template>
