<template>
     <img class="about-grid-img" :src="`${image}`" alt="restaurant image" />
     <section class="about-grid-text">
          <p class="about-grid-text-p">
               {{ text }}
          </p>
     </section>
</template>

<script setup>
defineProps({
     image: String,
     text: String
})
</script>

<style scoped>
.about-grid-text {
     background-color: hsla(194, 48%, 50%, 0.831);
     color: white;
     text-align: center;
     font-size: 1.5rem;
     display: flex;
     justify-content: center;
     align-items: center;
}

.about-grid-text-p {
     width: 20vw;
}

.about-grid-img {
     width: 23vw;
     height: 50vh;
}

@media screen and (min-width:900px) and (max-width: 1126px) {
     .about-grid-text-p {
          font-size: 1.1rem;
     }
}

@media screen and (max-width: 900px) {
     .about-grid-img {
          width: 20vw;
     }

     .about-grid-text-p {
          width: 80vw;
          padding: 5vh 0;
     }
}
</style>
