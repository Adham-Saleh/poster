<template lang="pug">
    label {{ label }}
    .border-2.rounded-lg.flex.items-center.px-2.py-1.gap-2(:class="{ 'border-red-500': errorMessage }")
        slot(name="prefix")
        input.border-0(:type :placeholder :value :name v-model="value" class="focus:outline-0 w-full")
    .flex.gap-1.items-center.text-xs(v-if="errorMessage")
        Icon(name="Error")
        span.text-red-600 {{ errorMessage }}
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps<{
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
}>();

const { value, errorMessage } = useField(() => props.name);
</script>

<style scoped></style>
