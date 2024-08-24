<script setup>
import RecipeFull from "@/components/recipes/RecipeFull.vue";
import CommentSection from "@/components/recipes/CommentSection.vue";
import SidebarSection from "@/components/recipes/SidebarSection.vue";

defineOptions({
    name: "RecipeDetailView",
    components: {
        RecipeFull,
        CommentSection,
        SidebarSection,
    },
});
</script>

<template>
    <!-- blog details area start  -->
    <section class="blog section-space">
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <div class="blog__details">
                        <recipe-full></recipe-full>

                        <comment-section></comment-section>
                    </div>
                </div>
                <sidebar-section></sidebar-section>
            </div>
        </div>
    </section>
    <!-- blog details area end  -->
</template>
