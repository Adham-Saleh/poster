<template lang="pug">
    .flex.gap-2.items-center 
        .rounded-full(class="max-w-[50px] overflow-hidden")
            img(:src class="hover:scale-110 ease-in-out duration-300")
        .flex.flex-col.text-sm
            label.font-medium {{ label }}
            span.font-light {{ subText }}
</template>

<script setup lang="ts">
const { data } = defineProps<{
  src: string;
  label?: string;
  subText?: string;
}>();
</script>

<style scoped></style>
