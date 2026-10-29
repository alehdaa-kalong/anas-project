<template>
    <section class="contact-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011431.6120556642!2d98.89206979272859!3d8.008760559020798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30518d792d7f9309%3A0x10223bc2c364c90!2sKrabi!5e0!3m2!1sen!2sth!4v1784499033356!5m2!1sen!2sth"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        <section class="contact">
            <section class="contact-info">
                <p id="address">133 Phet Kasem Rd, Nuea Khlong, Nuea Khlong District, Krabi 81130 <br>
                </p>
                <a href="mailto:siym2024island@gmail.com">Email : siym2024island@gmail.com</a>
                <p class="thailand-time">
                    <strong>Thailand time:</strong><br>
                    <span v-if="thailandTime">{{ formattedThailandTime }}</span>
                    <span v-else-if="timeError">Time is currently unavailable.</span>
                    <span v-else>Loading...</span>
                </p>
            </section>
        </section>
    </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const thailandTime = ref(null);
const timeError = ref(false);
let clockInterval;
let refreshInterval;

const formattedThailandTime = computed(() => {
    if (thailandTime.value === null) return '';

    return new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Bangkok',
        dateStyle: 'medium',
        timeStyle: 'medium',
    }).format(thailandTime.value);
});

const fetchThailandTime = async () => {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Bangkok');
        if (!response.ok) {
            throw new Error(`WorldTimeAPI returned ${response.status}`);
        }

        const data = await response.json();
        const time = new Date(data.datetime);
        if (Number.isNaN(time.getTime())) {
            throw new Error('WorldTimeAPI returned an invalid time');
        }

        thailandTime.value = time;
        timeError.value = false;
    } catch (error) {
        console.error('Failed to load Thailand time:', error);
        timeError.value = true;
    }
};

onMounted(() => {
    fetchThailandTime();
    clockInterval = setInterval(() => {
        if (thailandTime.value !== null) {
            thailandTime.value = new Date(thailandTime.value.getTime() + 1000);
        }
    }, 1000);
    refreshInterval = setInterval(fetchThailandTime, 300000);
});

onBeforeUnmount(() => {
    clearInterval(clockInterval);
    clearInterval(refreshInterval);
});
</script>

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