<template lang="pug">
    .flex.gap-2.items-center.cursor-pointer
        .rounded-lg(class="max-w-[50px] overflow-hidden")
            img(:src class="hover:scale-110 ease-in-out duration-300")
        .flex.flex-col.text-sm
            label.font-medium.line-clamp-1 {{ label }}
            span.font-light {{ subText }}
</template>

<script setup lang="ts">
const { src, label, subText } = defineProps<{
  src: string;
  label?: string;
  subText?: string;
}>();
</script>

<style scoped></style>
