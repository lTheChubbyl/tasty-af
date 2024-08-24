<script setup>
import BaseSidebarCard from "@/components/ui/BaseSidebarCard.vue";

defineOptions({
    name: "SidebarTags",
    components: {
        BaseSidebarCard,
    },
});
</script>

<template>
    <base-sidebar-card title="Tags">
        <div class="sidebar__widget-tags">
            <div class="tags">
                <a href="blog-details.html">Advice</a>
                <a href="blog-details.html">Author</a>
                <a href="blog-details.html">Consulting</a>
                <a href="blog-details.html">Delish</a>
                <a href="blog-details.html">Family</a>
                <a href="blog-details.html">Health</a>
                <a href="blog-details.html">Tip</a>
                <a href="blog-details.html">Judge</a>
                <a href="blog-details.html">Solution</a>
            </div>
        </div>
    </base-sidebar-card>
</template>
