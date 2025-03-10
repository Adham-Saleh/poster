<template lang="pug">
    .card.rounded-lg.flex.justify-center.items-center.w-screen.h-screen(class="p-[40px]")
        .flex.flex-col.gap-2(class="min-w-full lg:min-w-[300px] md:min-w-[200px]")
            .flex.gap-2.items-center
              button(@click="navigateTo('/')")
                Icon(name="BackArrow")
              h1.font-medium(class="text-[24px]") Share your thoughts !
            Avatar.w-full(src="/images/allShops.jpeg" label="Adham Saleh" subText="U-1234567")
            
            InputText(placeholder="First name" name="firstName")
            InputText(placeholder="Last name" name="lastName")
            InputText(placeholder="Email" name="email")
            InputText(placeholder="password" name="password")

            button.rounded-lg.px-3.py-1.w-full(class="bg-orange-500 text-white") Sign in
            div.text-sm.text-center
                span Already have an account ? #[NuxtLink.text-orange-500(to="/auth/login") sing in]

</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<style scoped></style>
