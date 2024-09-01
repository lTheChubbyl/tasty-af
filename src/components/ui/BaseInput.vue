<script setup>
defineOptions({
    name: "BaseInput",
    inheritAttrs: false,
});

defineProps({
    modelValue: String,
});
</script>

<template>
    <div class="validation__wrapper-up position-relative">
        <slot name="icon"></slot>
        <input v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
        <slot name="error"></slot>
    </div>
</template>
