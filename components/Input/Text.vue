<template lang="pug">
    label {{ label }}
    .border-2.rounded-lg.flex.items-center.px-2.py-1.gap-2(:class="{ 'border-red-500': error }")
        slot(name="prefix")
        input.border-0(:type :placeholder :name class="focus:outline-0 w-full")
    .flex.gap-1.items-center.text-xs(v-if="false")
        Icon(name="Error")
        span.text-red-600 Something went wrong
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
}>();
</script>

<style scoped></style>
