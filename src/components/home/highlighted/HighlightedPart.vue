<script setup>
import HighlightedPartImage from "./HighlightedPartImage.vue";
import HighlightedPartDescription from "./HighlightedPartDescription.vue";

defineOptions({
    name: "HighlightedPart",
    components: {
        HighlightedPartImage,
        HighlightedPartDescription,
    },
});

const highlightedList = [
    {
        date: {
            day: "09",
            month: "Dec",
        },
        link: "/recipes/1",
        author: "John Smith",
        commentsNum: 3,
    },
    {
        date: {
            day: "17",
            month: "Dec",
        },
        link: "/recipes/2",
        author: "Jane Smith",
        commentsNum: 4,
    },
];
</script>

<template>
    <highlighted-part-image :highlighted="highlightedList[0]"></highlighted-part-image>
    <highlighted-part-description :highlighted="highlightedList[0]"></highlighted-part-description>
    <highlighted-part-description :highlighted="highlightedList[1]"></highlighted-part-description>
    <highlighted-part-image :highlighted="highlightedList[1]"></highlighted-part-image>
</template>

<style scoped></style>
