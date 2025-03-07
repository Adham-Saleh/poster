<template>
  <component :is="iconComponent" v-bind="props" v-if="iconComponent" />
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const icons = import.meta.glob("./*.vue");
const iconComponent = computed(() => {
  try {
    return defineAsyncComponent(icons[`./${props.name}.vue`]);
  } catch (error) {
    return null;
  }
});
</script>
