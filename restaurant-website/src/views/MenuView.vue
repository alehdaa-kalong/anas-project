<template>
    <div class="main">
        <div class="background-design" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>

        <div class="main-text">
            <div class="main-body">
                <p><span class="yellow">Our menu </span>____________</p>
                <p class="main-2">
                    Discover <br />
                    Our Menu
                </p>
            </div>

            <!-- Dynamically loop through sections (Starters, Main Course, Desserts) -->
            <div v-for="section in menuData" :key="section.title">
                <h2>{{ section.title }}</h2>

                <!-- Dynamically loop through subcategories (Veg / Non-Veg) -->
                <div v-for="sub in section.subcategories" :key="sub.name">
                    <h3 v-if="sub.name">{{ sub.name }}</h3>

                    <!-- Dynamically loop through the menu cards -->
                    <div class="menu-grid">
                        <!-- Wrapped item.imgPath in the getImageUrl function -->
                        <MenuCard v-for="item in sub.items" :key="item.title" :imgPath="getImageUrl(item.imgPath)"
                            :imgTitle="item.title" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MenuCard from '@/components/MenuCard.vue';
import Footer from '@/components/Footer.vue';
import backgroundImage from '@/assets/images/new_background.png';

const menuData = ref([]);

// ADDED: This converts the plain filename into a working Vite image URL
const getImageUrl = (filename) => {
    return new URL(`../assets/images/food/${filename}`, import.meta.url).href;
};

// Fetch the db.json file when the component loads
onMounted(async () => {
    try {
        // import.meta.env.BASE_URL automatically handles '/Siam-Island-restaurant-website/'
        const response = await fetch(`${import.meta.env.BASE_URL}db.json`);
        const data = await response.json();
        menuData.value = data.sections;
    } catch (error) {
        console.error('Failed to load menu data:', error);
    }
});
</script>

<style lang="css" scoped>
.menu-icon {
    display: block;
    font-size: 28px;
    cursor: pointer;
    margin-right: -4rem;
}

.background-design {
    width: 5vw;
    opacity: 0.8;
    background-repeat: repeat-y;
    background-position: top center;
    background-size: contain;
}

.main {
    margin-top: 5vh;
    margin-bottom: 10vh;
    display: flex;
    gap: 10vw;
    font-size: 2rem;
    color: white;
}

.yellow {
    color: var(--secondary-color);
}

.main-2 {
    margin-top: 4vh;
    font-size: 4.5rem;
}

.menu-grid {
    margin-top: 1vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.main-text h2 {
    margin-top: 2vh;
    font-size: 3rem;
    font-weight: normal;
}

.main-text h3 {
    font-size: 2rem;
    font-weight: normal;
}
</style>