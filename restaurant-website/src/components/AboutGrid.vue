<script setup>
import Grid from '@/components/Grid.vue'
import gridImg1 from '@/assets/images/grid-img1.jpg'
import gridImg2 from '@/assets/images/grid-img2.jpg'
import gridImg3 from '@/assets/images/grid-img3.jpg'
</script>

<template>
     <section class="about">
          <section class="about-grid">
               <Grid :image="gridImg1"
                    text="Welcome to Siam Isle – Krabi's coastal gem, where the flavors of the Andaman Sea meet the soul of Thai cuisine." />
               <Grid :image="gridImg2"
                    text="Our chefs honor the kingdom’s ancient recipes while adding subtle modern touches, celebrating the balance of hot, sour, salty, and sweet that defines true Thai cuisine." />
               <Grid :image="gridImg3"
                    text="Immerse yourself in the relaxed rhythm of island life, as our open-air terrace overlooks the limestone cliffs and turquoise waters, setting the stage for unforgettable sunsets and even more memorable meals at Siam Isle" />
          </section>
     </section>
</template>

<style scoped>
.about {
     background: url('@/assets/images/about-background.jpg');
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     display: flex;
     justify-content: center;
     align-items: center;
}

.about-grid>* {
     width: 23vw;
     text-shadow: 1px 1px 1px black;

}

.about-grid .highlighter {
     color: var(--primary-color);
     text-transform: uppercase;
     font-weight: 600;
     text-shadow: none;
}

.about-grid>*:hover {
     transform: scale(1.01);
     box-shadow: 0px 0px 10px black;
}

.about-grid>img {
     height: max-content;
}

.about-grid-img {
     width: 23vw;
     height: 50vh;
}

.about-grid {
     padding: 20vh 0;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
}


@media screen and (min-width:900px) and (max-width: 1126px) {
     .about-grid {
          grid-template-columns: repeat(2, 1fr);
          row-gap: 5px;
     }

     .about-grid-text-p {
          font-size: 1.1rem;
     }
}

@media screen and (max-width: 900px) {

     .about-grid {
          grid-template-columns: repeat(1, 1fr);

     }

     .about-grid-img {
          width: 20vw;
     }

     .about-grid>* {
          width: 80vw;
     }

     .about-grid-text-p {
          width: 80vw;
          padding: 5vh 0;
     }
}
</style>