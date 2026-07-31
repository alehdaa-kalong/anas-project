<template>
     <nav class="navbar" id="home">
          <section class="logo">
               <RouterLink to="/">
                    <section class="logo-wrapper">
                         <img src="@/assets/images/form-logo.png" alt="Logo Icon" class="logo-png" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 963 138"
                              preserveAspectRatio="xMidYMid meet">>
                              <path fill="#fff" fill-rule="evenodd"
                                   d="m963 23-4 41 1 61-5 8-5 2-5 1h-9l-8-3q-7 4-15 4-9 1-15-2-8-3-14-9l-10-13-4-10a75 75 0 0 1-3-32q2-10 6-19a42 42 0 0 1 15-16l5-3 5-1q6-1 12 1l10 5a49 49 0 0 1 4-21l2-5a21 21 0 0 1 17-10l7 1q4 0 7 3t5 8l1 4zm-63 18-2-1-4 1-7 4-2 3-7 15v4l1 3h2l2-2 2-12 4-7 3-3 4-2h3l1-1zm9-2q0-2-2-1l-2 2v1l1 1 3-1zm12 37-2-7-4-4q-3-2-6-1l-4 3-3 6v13l2 6q1 4 4 5l4 1 4-2 3-3 2-4 1-7zm-66 30q0 9-5 18l-3 6-5 4q-5 2-10 1l-8-5-3-6-1-6-1-18-1-25-2-6-3-3q-2-1-4 1l-3 6v5l-1 5v17l-1 22-3 6q-2 4-5 5l-6 2-7-1-6-5-4-8-3-9q-5-15-6-32a106 106 0 0 1 5-41l4-8q4-3 8-4h8a21 21 0 0 1 14 11l8-6a30 30 0 0 1 17-4l6 2 6 3 5 6 5 8 4 9 2 15zm-75-64-1-1-3 2-2 4-2 6v2l-1 20v2l1 2 2 1 1-2V64l2-15 1-3 2-2zm7-9h-2l-2 1v2l1 1h1l2-1 1-2zm-36 69-3 17-4 8-4 4-6 1-7-3-5-6-7 6-9 3a31 31 0 0 1-25-6l-6-6q-5-5-6-11l-3-12a81 81 0 0 1 9-43l5-8q3-5 9-8a47 47 0 0 1 23-8 41 41 0 0 1 22 5l8 7 7 10 3 13 1 18zm-52-60h-4l-6 4-1 2-2 1-1 2-1 1-2 4-5 15v1l2 1 2-1 1-2v-3l2-6 3-6 1-2 2-2 2-2 2-2 3-2h2l1-2zm10-4-2-1-2 2 1 2h2l1-1zm13 33q0-3-3-4l-4-2h-4l-4 2-4 4-2 4-1 5 1 6 4 5 5 2 5-1 4-4 3-6q2-3 1-6zm-68-9-5 59-2 6-4 5-4 3h-6l-11-4-4-6-5-20a270 270 0 0 1-1-84l5-11q3-4 7-6l8-2h8l7 5 4 6 2 8 1 9zm-27-48h-2l-3 3-3 5-3 10-1 10v5l1 2h3l1-2-1-3 1-12 4-13 2-2 2-1zm6-4h-2q-2 0-1 2l1 1h2l1-2zm-45 113-6 6-8 4-16 2-24-3-10-6-3-4v-4l-1-3 2-10 2-5 3-3 9-1 2 1 14 5h4q3 0 3-2l-1-4-3-2-10-4-12-5-7-7-4-11a42 42 0 0 1 3-25 29 29 0 0 1 15-15q5-2 10-3a62 62 0 0 1 31 2l9 6a22 22 0 0 1 4 21l-6 9-3 2-4 1h-6l-6-2-4-1h-4l-2 1v2l3 3 16 5 8 4 6 7 4 9q2 8-1 16-1 8-7 14m-43-90-3 1-6 3-4 6-3 6-2 11 1 5 2 1h1l2-1v-2l-2-6 5-14 7-6q2 0 3-2zm9-2-3-1-1 1q-1 1 1 3l2-1zm-49 55-6 36-3 6-4 5a12 12 0 0 1-14 0l-5-5-6-17a219 219 0 0 1-7-45V23l3-7a26 26 0 0 1 15-11 20 20 0 0 1 17 3q5 3 6 8l4 9a134 134 0 0 1 2 41zm-29-67-2-1q-2 0-4 4l-4 7-1 4-1 2v15l1 6v2l1 1h2q3-1 2-3V29l2-4 3-4q2 0 1-2m6-5-1-1-2 1-1 1 2 2 2-1zm-86 108a20 20 0 0 1-9 10l-6 1a13 13 0 0 1-10-4l-2-4-2-4-2-15V87l-1-10-1-3-2-3-3-2-2 1-2 4-1 5-4 38-4 6-7 3a15 15 0 0 1-16-9l-2-10-3-31-2-2-2-1-4 1-3 5-2 14-4 31-2 4q0 3-3 4-2 2-5 3h-6l-5-2-5-4-4-8a108 108 0 0 1-8-32 130 130 0 0 1 1-38l3-12q1-6 6-9l10-4a19 19 0 0 1 12 5l4 4 3 4q2-5 7-8 4-3 10-3l7 1 6 3 6 6 4 8 8-10 10-7 6-2a23 23 0 0 1 17 1l8 7 6 9q5 8 5 17l2 18-1 22zM277 41l-3 1-3 4-3 11v18l2 1 2-1V55l2-7 1-2 2-2 2-2zm8-7h-2l-2 3 2 1 2-1 1-2zm-37 68-3 17-4 8-4 4-6 1-7-3-5-6-7 6-9 3a31 31 0 0 1-25-6l-6-6q-4-5-6-11l-3-12a81 81 0 0 1 9-43l5-8q3-5 9-8a47 47 0 0 1 23-8 41 41 0 0 1 22 5l8 7 7 10 3 13 1 18zm-52-60h-4l-6 4-1 2-2 1-1 2-1 1-2 4-5 15v1l2 1 2-1 1-2v-3l2-6 3-6 1-2 2-2 2-2 2-2 3-2h2l1-2zm10-4-2-1-2 2 1 2h2l1-1zm13 33q0-3-3-4l-4-2h-4l-4 2-4 4-2 4-1 5 1 6 4 5 5 2 5-1 4-4 3-6q2-3 1-6zm-71-34-8 7-6 1-15-2-6-3-4-5a17 17 0 0 1-1-12l2-5 5-6a23 23 0 0 1 14-5 24 24 0 0 1 14 4l5 3q2 2 3 5l1 4v5q0 4-4 9m-26-20h-2l-2 1-1 2-3 4-1 3v4l3 1 1-2 1-1v-2l1-4 2-4q3 0 1-2m7-4-2-1-2 3 1 1h2l1-2zm-16 45q3-5 9-7l4-1 11 1 4 2 1 1 6 6a49 49 0 0 1 3 29l-7 34-2 5-4 4-4 2-10 1-5-2-4-3-7-14a86 86 0 0 1-4-30 64 64 0 0 1 5-23zm10 3h1l1-2-1-1h-3v3zm-12 27v3l1 1h2l2-2v-2l-1-2v-7l1-3v-2l2-4 2-4 1-1-1-2h-1l-2 1-2 3-4 13v8M51 54l6 3 19 7 7 6 5 8q3 8 3 16a43 43 0 0 1-9 26 37 37 0 0 1-18 12l-25 3-21-3-7-3-4-3a17 17 0 0 1-6-10 39 39 0 0 1 3-22l5-5 5-1 9 2 10 3 3 1 6 2 4-2 1-3-2-3q0-2-3-2l-10-4-7-2-8-3-6-6q-5-6-8-13a49 49 0 0 1 9-44q5-6 11-8l14-4a78 78 0 0 1 36 3 25 25 0 0 1 15 31q-1 6-7 11l-7 4h-7l-7-2-5-1-6-1-2 1-1 2 2 2zM25 13l-3 1-2 2-2 1-5 7-2 11v8l1 3 1 1h2l1-1v-2l-1-11 4-11 2-2 4-4 1-1zm7-5h-3l-1 2 1 1h1l2-1z" />
                         </svg>
                    </section>
               </RouterLink>
          </section>

          <section class="nav-right">
               <section class="nav-links" :class="{ show: navLinksVisible }">
                    <RouterLink to="/" @click="navLinksVisible = false">Home</RouterLink>
                    <RouterLink to="/menu" @click="navLinksVisible = false">Menu</RouterLink>
                    <RouterLink to="/contact" @click="navLinksVisible = false">Contact</RouterLink>
               </section>
               <button @click="redirect" class="book-btn">Book Table</button>
          </section>

          <section class="menu-icon" @click="toggleNavLinks">&#9776;</section>
     </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const navLinksVisible = ref(false);
const router = useRouter();

const toggleNavLinks = () => {
     navLinksVisible.value = !navLinksVisible.value;
}

const redirect = () => {
     router.push('/form');
}
</script>

<style scoped>
:root {
     --primary-color: #0F4875;
     --secondary-color: #4E9DD5;
     --accent-color: #000000;
     --background-color: #FFF8ED;
}

.navbar {
     background-color: var(--primary-color);
     color: var(--secondary-color);
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 10px 5vw;
     position: sticky;
     top: 0;
     z-index: 1000;
}

.logo-wrapper {
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: 15px;
}

.logo-link {
     text-decoration: none;
}

.logo-png {
     width: 50px;
     height: auto;
     display: block;
     transition: opacity 0.3s ease;
}

.logo svg {
     width: 150px;
     display: block;
}

.logo a:hover svg path {
     fill: #dedede;
}

.logo a:hover .logo-png {
     opacity: 0.8;
}

.nav-right {
     display: flex;
     gap: 50px;
     align-items: center;
}

.nav-links {
     list-style: none;
     display: flex;
     gap: 30px;
     margin: 0;
     padding: 0;
}

.nav-links a {
     color: var(--secondary-color);
     font-size: 2rem;
     text-decoration: none;
     transition: all 0.3s ease;
}

.nav-links a:hover {
     color: var(--background-color);
     text-decoration: underline;
     text-decoration-color: var(--background-color);
     text-underline-offset: 6px;
     text-decoration-thickness: 2px;
}

.book-btn {
     background-color: var(--secondary-color);
     border: none;
     color: var(--primary-color);
     padding: 12px 24px;
     border-radius: 25px;
     font-size: 1.1rem;
     font-weight: 600;
     font-family: "MyCustomFont";
     cursor: pointer;
     transition: all 0.3s ease;
}

.book-btn:hover {
     transform: scale(1.05);
     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.menu-icon {
     display: none;
     color: var(--secondary-color);
}

/* Mobile Styling */
@media (max-width: 800px) {
     .nav-right {
          gap: 20px;
     }

     .nav-links {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--secondary-color);
          width: 100%;
          text-align: center;
          padding: 20px 0;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
     }

     .nav-links.show {
          display: flex;
     }

     .nav-links a {
          padding: 15px 0;
          color: var(--primary-color);
          font-weight: 600;
     }

     .nav-links a:hover {
          background-color: rgba(255, 248, 237, 0.2);
          color: var(--background-color);
     }

     .menu-icon {
          display: block;
          font-size: 28px;
          cursor: pointer;
     }

     .logo-png {
          width: 40px;
     }

     .logo svg {
          width: 120px;
     }

     .book-btn {
          padding: 8px 16px;
          font-size: 0.95rem;
     }
}
</style>