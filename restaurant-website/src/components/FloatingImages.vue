<template>
    <section class="floating-container" :style="positionStyle">
        <img :src="currentImage" alt="Floating Graphic" class="floating-img" :class="{ 'flip-image': isFlipped }" />
    </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

// 1. Import your PNG images here
import img1 from '@/assets/images/fish/image1.png';
import img2 from '@/assets/images/fish/image2.png';
import img3 from '@/assets/images/fish/image3.png';
import img4 from '@/assets/images/fish/image4.png';
import img5 from '@/assets/images/fish/image5.png';

const images = [img1, img2, img3, img4, img5];
const currentImage = ref(images[0]);
const positionStyle = ref({ left: '5vw' });
const route = useRoute();

// Tracks whether the image should be flipped horizontally
const isFlipped = ref(false);

const randomizeImage = () => {
    // Pick a random image
    currentImage.value = images[Math.floor(Math.random() * images.length)];

    // Pick a random side
    const isLeft = Math.random() > 0.5;

    if (isLeft) {
        positionStyle.value = { left: '2vw', right: 'auto' };
        isFlipped.value = true; // Flips the image when on the left side
    } else {
        positionStyle.value = { right: '2vw', left: 'auto' };
        isFlipped.value = false; // Keeps original right-facing orientation on the right side
    }
};

onMounted(() => {
    randomizeImage();
});

watch(
    () => route.path,
    () => {
        randomizeImage();
    }
);
</script>

<style scoped>
.floating-container {
    position: fixed;
    bottom: 5vh;
    z-index: 50;
    pointer-events: none;
    animation: floatUpDown 4s infinite ease-in-out;
}

.floating-img {
    width: 90px;
    display: block;
}

.flip-image {
    transform: scaleX(-1);
}

@keyframes floatUpDown {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-30px);
    }
}
</style>