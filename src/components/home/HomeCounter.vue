<script setup>
import { ref, computed } from "vue";

defineOptions({
    name: "HomeCounter",
});

const props = defineProps({
    notCounter: {
        type: Boolean,
        default: false,
    },
    endCount: {
        type: Number,
        default: 0,
    },
    text: {
        type: String,
        default: "",
    },
});

const formattedText = computed(() => {
    return props.text.replace(" ", " </br>");
});

const count = ref(0);

setInterval(() => {
    if (count.value < props.endCount) {
        if (!props.notCounter) {
            count.value++;
        }
    }
}, 50);
</script>

<template>
    <div class="experience__item">
        <p>
            <span v-if="notCounter" class="odometer"><i class="fa-solid fa-infinity"></i></span>
            <span v-else class="odometer" :data-count="endCount">{{ count }}k+</span>
            <span v-html="formattedText"></span>
        </p>
    </div>
</template>
