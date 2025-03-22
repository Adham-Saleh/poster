<template lang="pug">
    h1(class="text-[32px] px-3 font-bold text-orange-500") POSTER
    ul.flex.flex-col.mt-4.gap-2(v-if="links?.length" class="max-w-[250px]")
        NuxtLink.cursor-pointer.px-3.py-1.rounded-lg(v-for="link in links" :disabled="true" :to="link.link" class="hover:bg-gray-200")
            .flex.gap-2
                Icon.shrink-0(:name="link.icon")
                span {{ link.label }}
    pre {{ user }}
    .flex.justify-between.items-center.mt-2(class="md:px-3" class="h-screen")
        div.flex.justify-between.items-center.w-full(v-if="isLoggedIn")
          Avatar.shrink-0(src="/images/allShops.jpeg" label="Adham Saleh" subText="U-1234567")
          button 
              Icon.shrink-0(name="Logout")
        div.w-full(v-else)
          button.rounded-lg.px-3.py-1.w-full(@click="navigateTo('/auth/login')" class="bg-orange-500 text-white") Sign in
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

interface link {
  label: string;
  icon: string;
  link: string;
}

const auth = useAuthStore();
const { user, isLoggedIn } = storeToRefs(auth);

const { links } = defineProps<{
  links: link[];
}>();
</script>

<style scoped>
.router-link-exact-active {
  color: rgb(249, 115, 22);
}
</style>
