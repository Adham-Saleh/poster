<template lang="pug">
    .absolute.top-10.left-50.rounded-full.px-5.py-3.text-white(class="max-w-full sm:mx-2 md:min-w-[40px]" :class="{ 'bg-red-600': error, 'bg-green-500': success }") 
        .flex.gap-2.items-center
            Icon.flex.justify-center.items-center(name="Info")
            p.font-medium {{ message }}
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Boolean,
  },
  success: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
  },
});
</script>

<style scoped></style>
