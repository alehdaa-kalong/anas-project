<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeAd">
        <div class="modal-content" @click.stop>
            <button class="close-btn" @click="closeAd">&times;</button>

            <!-- Ad Content -->
            <div class="ad-body">
                <div class="image-container">
                    <img src="/src/assets/images/Ad/AdPoster.png" alt="Special Offer" class="poster-img" />
                </div>
                <div class="ad-text">
                    <h2>Special Offer!</h2>
                    <button class="promo-book-btn" @click="goToBooking">Book a Table Now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const isVisible = ref(false);
const router = useRouter();
let intervalId = null;

onMounted(() => {
    const hasSeenAd = sessionStorage.getItem('posterSeen');

    if (!hasSeenAd) {
        isVisible.value = true;
        sessionStorage.setItem('posterSeen', 'true');
    }

    // Set up interval to clear session storage and show ad every 1 minute
    intervalId = setInterval(() => {
        sessionStorage.removeItem('posterSeen');
        if (!isVisible.value) {
            isVisible.value = true;
            sessionStorage.setItem('posterSeen', 'true');
            console.log('Ad reappeared after 1 minute');
        }
    }, 60000);
});

onBeforeUnmount(() => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

const closeAd = () => {
    isVisible.value = false;
};

const goToBooking = () => {
    isVisible.value = false;
    router.push('/form');
};
</script>

<style scoped>
:root {
    --primary-color: #0F4875;
    --secondary-color: #4E9DD5;
    --accent-color: #000000;
    --background-color: #FFF8ED;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    background-color: var(--background-color);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    max-width: 90vw;
    width: 450px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    animation: popIn 0.4s ease-out;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--accent-color);
    cursor: pointer;
    z-index: 10;
    background-color: rgba(255, 248, 237, 0.8);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.close-btn:hover {
    color: var(--primary-color);
    transform: scale(1.1);
}

.ad-body {
    display: flex;
    flex-direction: column;
}

.image-container {
    padding: 20px 20px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
}

.poster-img {
    width: 60%;
    max-width: 200px;
    height: auto;
    display: block;
    border-radius: 8px;
    margin: 0 auto;
}

.ad-text {
    padding: 20px;
    text-align: center;
    background-color: var(--primary-color);
    color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
}

.ad-text h2 {
    margin: 0 0 10px 0;
    color: var(--secondary-color);
}

.ad-text p {
    margin: 0 0 20px 0;
    font-size: 1.1rem;
}

.promo-book-btn {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border: none;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: "MyCustomFont";
    cursor: pointer;
    transition: all 0.3s ease;
    width: 80%;
}

.promo-book-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@keyframes popIn {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>