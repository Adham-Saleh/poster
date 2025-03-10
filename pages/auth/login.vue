<template lang="pug">
    .card.rounded-lg.flex.justify-center.items-center.w-screen.h-screen(class="p-[40px]")
        .flex.flex-col.gap-2(class="min-w-full lg:min-w-[300px] md:min-w-[200px]")
            button(@click="navigateTo('/')")
              Icon(name="BackArrow")
            Avatar.w-full.justify-center(src="/images/allShops.jpeg")
            h1.text-center.font-medium(class="text-[24px]") Welcome Back !
            
            InputText(placeholder="Email" name="email")
            InputText(placeholder="password" name="password")

            button.rounded-lg.px-3.py-1.w-full(class="bg-orange-500 text-white") Sign in
            div.text-sm.text-center
                span Done have an account ? #[NuxtLink.text-orange-500(to="/auth/register") register now]

</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<style scoped></style>
