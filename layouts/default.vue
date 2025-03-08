<template lang="pug">
    .container.mx-auto.py-8(class="lg:px-32 px-2")
        .grid(class="grid-cols-1 md:grid-cols-7  lg:grid-cols-10")
                div(class="col-span-1 md:col-span-2 hidden md:block")
                    VerticalNavigation(:links)
                div(class="col-span-1 md:col-span-5")
                    .flex.justify-center
                        slot
                div(class="lg:col-span-3 hidden lg:block")
                  InputText(name="search" placeholder="Search")
                    template(#prefix) 
                      Icon(name="Search")
                  Card.mt-2
                    template(#header)
                      h1.text-xl.font-medium Start exploring 
                    template(#default)
                      div(class="max-h-[300px] overflow-y-scroll flex flex-col gap-2")
                        div(v-for="i in 10")
                          PostAvatar(src="images/allShops.jpeg" label="What is vue js ?!" subText="Fill up your knowladge")
                  Card.mt-2
                    template(#header)
                      h1.text-xl.font-medium Who to follow
                    template(#default)
                      div(class="max-h-[300px] overflow-y-scroll flex flex-col gap-2")
                        div(v-for="i in 10")
                          Avatar(src="images/allShops.jpeg" label="Adham Saleh" subText="@AdhamS2")
</template>

<script setup lang="ts">
const links = [
  {
    label: "Home",
    link: "/",
    icon: "Home",
  },
  {
    label: "Explore",
    link: "/explore",
    icon: "Explore",
  },
  {
    label: "Notifications",
    link: "/notifications",
    icon: "Notification",
  },
  {
    label: "Bookmarks",
    link: "/bookmarks",
    icon: "Bookmark",
  },
  {
    label: "Settings",
    link: "/settings",
    icon: "Settings",
  },
];
</script>

<style scoped></style>
