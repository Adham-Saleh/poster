<template lang="pug">
    .flex.flex-col
      InputPost(type="textarea" placeholder="What are thinking about ? ..." name="postContent")
        template(#prefix) 
          Avatar(src="images/allShops.jpeg")
        template(#actions) 
          .flex.items-center.justify-between
            .upload.flex.-items-center.gap-3
              button 
                Icon(name="UploadImage")
              button 
                Icon(name="UploadVideo")
            .post
              button.border-2.rounded-lg.px-5.py-1.font-media(name="submitPost" class="border-gray-200 hover:bg-gray-200" @click="login") Post
      .flex.flex-col.gap-5.mt-5(class="max-w-[500px]")
          div(v-for="post in posts")
              PostCard(:data="post")
</template>

<script setup lang="ts">
const posts = [
  {
    content:
      "What is vue js the progressive framwork and how does it work in server side rendering and client side rendering?",
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
    content:
      "What is vue js the progressive framwork and how does it work in server side rendering and client side rendering?",
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
    content:
      "What is vue js the progressive framwork and how does it work in server side rendering and client side rendering?",
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
