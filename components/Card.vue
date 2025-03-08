<template lang="pug">
    .border.rounded-lg.p-4.flex.flex-col.gap-2 
        slot(name="header")
        slot 
        slot(name="footer")
</template>

<script setup lang="ts"></script>

<style scoped></style>
