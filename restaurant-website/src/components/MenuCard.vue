<template>
    <section class="box">
        <img :src="imgPath" alt="food img" />
        <p>{{ imgTitle }}</p>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

// Define props
defineProps({
    imgPath: String,
    imgTitle: String,
});

// Resolve image path dynamically
const resolveImagePath = (path) => new URL(path, import.meta.url).href;
</script>

<style lang="css" scoped>
.box {
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
}

.box img {
    width: 200px;
    height: 200px;
    image-rendering: optimizeSpeed;
    object-position: center;
    object-fit: cover;
}

.box p {
    font-size: 1.5rem;
    align-items: center;
}
</style>