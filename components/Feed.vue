<template lang="pug">
    .flex.flex-col.gap-5(class="max-w-[500px]")
        div(v-for="post in posts")
            PostCard(:data="post")
</template>

<script setup lang="ts">
const posts = [
  {
    content: "What is vue js the progressive framwork and how does it work in server side rendering and client side rendering?",
    media: [
      {
        src: "/images/allShops.jpeg",
        type: "image",
      },
    ],
    likes: 0,
    isPublic: true,
    createdAt: "2h ago",
  },
  {
    content: "What is vue js the progressive framwork and how does it work in server side rendering and client side rendering?",
    media: [
      {
        src: "/images/allShops.jpeg",
        type: "image",
      },
      {
        src: "/images/allShops.jpeg",
        type: "image",
      },
    ],
    likes: 0,
    isPublic: true,
    createdAt: "2h ago",
  },
  {
    content: "What is vue js the progressive framwork and how does it work in server side rendering and client side rendering?",
    media: [
      {
        src: "/images/allShops.jpeg",
        type: "image",
      },
      {
        src: "/images/allShops.jpeg",
        type: "image",
      },
      {
        src: "/images/allShops.jpeg",
        type: "image",
      },
    ],
    likes: 0,
    isPublic: true,
    createdAt: "2h ago",
  },
];
</script>

<style scoped></style>
