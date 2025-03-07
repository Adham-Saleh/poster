<template lang="pug">
    .container.mx-auto.py-8(class="lg:px-32 px-2")
        .grid(class="grid-cols-1 lg:grid-cols-12 md:grid-cols-10")
                div(class="lg:col-span-2 md:col-span-3")
                    VerticalNavigation(:links)
                div(class="lg:col-span-7 md:col-span-6 lg:px-24 md:px-8 px-2")
                    Feed
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
];
</script>

<style scoped></style>
