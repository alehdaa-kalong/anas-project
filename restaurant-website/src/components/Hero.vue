<template>
    <div class="main" id="home">
      <div class="background-des">
        <img src="@/assets/images/new_background.png" alt="design" />
      </div>
      <div class="container">
        <div class="text-container">
          <p>Taste the authentic Thai cuisine</p>
        </div>
        <div class="image-container">
          <img src="@/assets/images/thai-food.jpg" alt="Image" />
          <h1>
            Taste the Tradition,<br />
            Love the Flavors...
          </h1>
        </div>
      </div>
    </div>
</template>

<script setup>
</script>


<style scoped>
    .main{
     display: flex;
     margin-top: 2vh;
}
.container{
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     height: max-content;
}
.image-container img{
     width: 300px;
     box-shadow: 1px 5px 20px 1px rgba(0, 0, 0, 0.879);
     border-radius: 5px;
}
.image-container img:hover{
     transform: scale(0.99);
}
.image-container h1{
     color: var(--secondary-color);
     border-top: 3px solid var(--secondary-color);
     border-bottom: 3px solid var(--secondary-color);
     padding: 1.2rem;
     margin: 1.2rem;
     font-size: 1.8rem;
     text-align: center;
     font-weight: normal;
}
.background-des img{
     height: 70svh;
     opacity: 50%;
}
.container .text-container{
     font-size: 2.3rem;
     color: white;
     text-align: center;
     height: max-content;
}
@media screen and (min-width: 546px) and (max-width: 1157px){
     .image-container img{
          width: 40vw; 
          justify-self: center;
     } 
     .text-container p{
          font-size: 3.5rem;
          width: 50vw;
     }
     .image-container h1{
          font-size: 2rem;
     }
     .image-container{
          display: flex;
          flex-direction: column;
          justify-content: center;
     }
     
}
@media screen and (min-width: 1157px){
     .image-container img{
          width: 40vw;   
     } 
     .container{
          align-items: flex-start; 
     }
     .text-container p{
          font-size: 6.8rem;
          width: 50vw;
     }
     .text-container{
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
     }
     .image-container h1{
          font-size: 2.7rem;
          margin-top: 3rem;
     }

}
</style>