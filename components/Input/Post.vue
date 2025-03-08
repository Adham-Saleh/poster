<template lang="pug">
    .border-2.rounded-lg.px-2.py-1
        .flex.items-start.gap-2(:class="{ 'border-red-500': error }")
            slot(name="prefix")
            textarea.border-0.my-2( :placeholder :name class="focus:outline-0 w-full") 
        hr.py-1
        slot(name="actions") 
    .flex.gap-1.items-center.text-xs.mt-1(v-if="false")
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
