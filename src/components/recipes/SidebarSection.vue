<script setup>
import SidebarSearch from "./SidebarSearch.vue";
import SidebarCategories from "./SIdebarCategories.vue";
import SidebarTags from "./SidebarTags.vue";

defineOptions({
    name: "SidebarSection",
    components: {
        SidebarSearch,
        SidebarCategories,
        SidebarTags,
    },
});
</script>

<template>
    <div class="col-xl-4">
        <div class="blog-4__right sidebar-rr-sticky">
            <div class="sidebar">
                <sidebar-search></sidebar-search>

                <sidebar-categories></sidebar-categories>

                <sidebar-tags></sidebar-tags>
            </div>
        </div>
    </div>
</template>
