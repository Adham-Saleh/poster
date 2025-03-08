<template lang="pug">
    .flex.justify-between.items-center(class="md:px-3")
        Avatar.shrink-0(src="/images/allShops.jpeg" label="Adham Saleh" subText="U-1234567")
        button 
            Icon.shrink-0(name="Logout")
    ul.flex.flex-col.mt-4.gap-2(v-if="links?.length" class="max-w-[250px]")
        NuxtLink.cursor-pointer.px-3.py-1.rounded-lg(v-for="link in links" :disabled="true" :to="link.link" class="hover:bg-gray-200")
            .flex.gap-2
                Icon.shrink-0(:name="link.icon")
                span {{ link.label }}
</template>

<script setup lang="ts">
interface link {
  label: string;
  icon: string;
  link: string;
}

const { links } = defineProps<{
  links: link[];
}>();
</script>

<style scoped></style>
