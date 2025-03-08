<template lang="pug">
    .border-b-2.pb-2
        Avatar(src="/images/allShops.jpeg" label="Adham Saleh" :subText="data?.createdAt")
        .content.mt-2
            p {{ data?.content }}
        .media.mt-2
            div(v-if="data?.media?.length === 1")
                div.rounded-lg.overflow-hidden(class="max-w-full") 
                    img(src="/images/allShops.jpeg" class="max-w-full")
            div(v-if="data?.media?.length === 2")
                .grid.grid-cols-2.gap-2
                    div.rounded-lg.overflow-hidden(class="max-w-full aspect-[4/7]") 
                        img(src="/images/allShops.jpeg" class="h-full object-cover hover:scale-110 ease-in-out duration-300")
                    div.rounded-lg.overflow-hidden(class="max-w-full aspect-[4/7]") 
                        img(src="/images/allShops.jpeg"  class="h-full object-cover hover:scale-110 ease-in-out duration-300")
            div(v-if="data?.media?.length > 2")
                .grid.grid-cols-2.gap-2
                    div.rounded-lg.overflow-hidden(class="max-w-full aspect-[4/7]") 
                        img(src="/images/allShops.jpeg" class="h-full object-cover hover:scale-110 ease-in-out duration-300")
                    .grid.grid-rows-2(class="aspect-[4/7] gap-2")
                        div.rounded-lg.overflow-hidden(class="max-w-full") 
                            img(src="/images/allShops.jpeg"  class="h-full w-full object-cover hover:scale-110 ease-in-out duration-300")
                        div.rounded-lg.overflow-hidden.relative(class="max-w-full") 
                            img(src="/images/allShops.jpeg"  class="h-full w-full object-cover opacity-30 hover:scale-110 ease-in-out duration-300")
                            .more-media.absolute.flex.gap-1.items-center.text-sm
                                Icon.shrink-0(name="Plus")
                                span.whitespace-nowrap 5 more
        .actions.flex.gap-3.items-center.mt-2(class="max-w-full")
            button.flex.gap-1.items-center
                Icon(name="Like")
                span like 
            button.flex.gap-1.items-center 
                Icon(name="Comment")
                span Comment 
            button.flex.gap-1.items-center 
                Icon(name="Bookmark")
                span Bookmark 




</template>

<script setup lang="ts">
const { data } = defineProps(["data"]);
</script>

<style scoped></style>
