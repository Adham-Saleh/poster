<template lang="pug">
    .container.mx-auto.py-8.w-100(class="lg:px-32 px-2")
        .flex.justify-center.min-w-100
                div.flex-1(class=" max-w-[250px] py-2 sticky top-0 h-screen hidden md:block")
                    VerticalNavigation(:links)
                div.flex-1.py-2
                    .flex.justify-center
                        slot
                div.flex-1(class="max-w-[300px] py-2 hidden sticky top-0 h-screen lg:block")
                  InputText(type="text" name="search" placeholder="Search")
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
