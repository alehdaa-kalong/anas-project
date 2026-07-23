<template>
    <div class="contact-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011431.6120556642!2d98.89206979272859!3d8.008760559020798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30518d792d7f9309%3A0x10223bc2c364c90!2sKrabi!5e0!3m2!1sen!2sth!4v1784499033356!5m2!1sen!2sth"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        <div class="contact">
            <div class="contact-info">
                <p id="address">133 Phet Kasem Rd, Nuea Khlong, Nuea Khlong District, Krabi 81130 <br>
                </p>
                <a href="mailto:siym2024island@gmail.com">Email : siym2024island@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="css" scoped>
.contact-container {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
}

iframe {
    min-width: 250px;
    min-height: 100px;
}

.contact {
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    color: white;
}

#address {
    width: 200px;
}

a {
    font-size: 1.4rem;
    color: white;
}

a:hover {
    color: var(--accent-color);
}
</style>