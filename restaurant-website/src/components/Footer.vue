<script setup>
</script>

<template>
     <footer class="footer">
          <div class="footer-content" id="contact">
               <!-- Address & Contact -->
               <div class="footer-section address-section">
                    <p>133 Phet Kasem Rd, Nuea Khlong, Nuea Khlong District, Krabi 81130</p>
                    <div class="email-container">
                         <img src="@/assets/images/Icon/email-icon.png" alt="email icon" class="email-icon">
                         <a href="mailto:siym2024island@gmail.com" class="email-link">siym2024island@gmail.com</a>
                    </div>
               </div>

               <!-- Operating Hours -->
               <div class="footer-section hours-section">
                    <div class="hours-block">
                         <span class="day-title">Monday - Friday</span>
                         <span class="time">10am - 9pm</span>
                    </div>
                    <div class="hours-block">
                         <span class="day-title">Saturday & Sunday</span>
                         <span class="time">10 am - 10 pm</span>
                    </div>
               </div>
          </div>

          <!-- Social Icons -->
          <div class="social-icons">
               <!-- YouTube -->
               <a href="https://www.youtube.com/@SiyaM.2024" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/Icon/Youtube-icon.png" alt="YouTube">
               </a>

               <!-- X (Twitter) -->
               <a href="https://twitter.com/siym2024island" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/Icon/Twitter-icon.png" alt="X">
               </a>

               <!-- Instagram -->
               <a href="https://www.instagram.com/siym.2046" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/Icon/Instagram-icon.png" alt="Instagram">
               </a>

               <!-- TikTok -->
               <a href="https://www.tiktok.com/@siyam_2024" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/Icon/TikTok-icon.png" alt="TikTok">
               </a>
          </div>
     </footer>
</template>

<style scoped>
:root {
     --primary-color: #0F4875;
     --secondary-color: #4E9DD5;
     --accent-color: #000000;
     --background-color: #FFF8ED;
}

.footer {
     background-color: var(--secondary-color);
     color: var(--background-color);
     font-size: 1.25rem;
     padding: 2rem 0 0 0;
}

.footer-content {
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
     flex-wrap: wrap;
     max-width: 800px;
     margin: 0 auto;
     padding: 0 5vw 2rem 5vw;
     gap: 2rem;
}

.footer-section {
     display: flex;
     flex-direction: column;
     gap: 1.2rem;
}

/* Address & Email Styling */
.address-section {
     max-width: 300px;
     line-height: 1.5;
}

.address-section p {
     margin: 0;
     color: var(--accent-color);
}

.email-container {
     display: flex;
     align-items: center;
     gap: 10px;
}

.email-icon {
     width: 20px;
}

.email-link {
     color: var(--accent-color);
     text-decoration: none;
     transition: color 0.3s ease;
}

.email-link:hover {
     color: var(--primary-color);
}

.hours-block {
     display: flex;
     flex-direction: column;
     gap: 0.2rem;
     margin-bottom: 1rem;
}

.hours-block:last-child {
     margin-bottom: 0;
}

.day-title {
     color: var(--primary-color);
     font-weight: 600;
}

.time {
     opacity: 0.9;
     color: var(--accent-color);
}

/* Social Icons Styling */
.social-icons {
     display: flex;
     justify-content: center;
     gap: 5vw;
     padding-bottom: 3rem;
}

.social-icons a {
     display: inline-block;
     transition: transform 0.3s ease;
}

.social-icons a:hover {
     transform: scale(1.1);
}

.social-icons img {
     width: 3vw;
     min-width: 30px;
     display: block;
}

/* Responsive Design for Mobile Devices */
@media (max-width: 650px) {
     .footer-content {
          flex-direction: column;
          align-items: center;
          text-align: center;
     }

     .email-container {
          justify-content: center;
     }
}
</style>