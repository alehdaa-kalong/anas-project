<template>
    <main>
        <section class="heading">
            <img :src="logo" alt="logo" width="100" class="shadow-img" />
            <h1>Book a Table</h1>
            <p class="subtitle">Reserve your dining experience with us</p>
        </section>

        <form @submit.prevent="validateForm">
            <section class="form-grid">

                <!-- Personal Information -->
                <section class="form-section">
                    <h2 class="section-title">Personal Details</h2>
                    <section class="form-row">
                        <label for="name" class="form-label">
                            <span class="label-text">Full Name</span>
                            <input type="text" v-model="name" id="name" placeholder="Enter your full name" required />
                            <span class="hint">Your reservation will be under this name</span>
                        </label>
                    </section>
                    <section class="form-row">
                        <label for="email" class="form-label">
                            <span class="label-text">Email Address</span>
                            <input type="email" v-model="email" id="email" placeholder="your.email@example.com"
                                required />
                            <span class="hint">We'll send confirmation to this email</span>
                        </label>
                    </section>
                    <section class="form-row">
                        <label for="number" class="form-label">
                            <span class="label-text">Phone Number</span>
                            <input type="tel" v-model="phoneNumber" id="number"
                                placeholder="Enter 10-digit phone number" required pattern="[0-9]{10}" />
                            <span class="hint">We'll contact you for reservation confirmation</span>
                        </label>
                    </section>
                </section>

                <!-- Reservation Details -->
                <section class="form-section">
                    <h2 class="section-title">Reservation Details</h2>
                    <section class="form-row">
                        <label for="date" class="form-label">
                            <span class="label-text">Date</span>
                            <input type="date" v-model="date" id="date" required />
                            <span class="hint">Select your preferred date</span>
                        </label>
                    </section>
                    <section class="form-row">
                        <label for="meal-type" class="form-label">
                            <span class="label-text">Meal Time</span>
                            <select v-model="mealType" id="meal-type" required>
                                <option value="" disabled selected>Select meal time</option>
                                <option value="breakfast">Breakfast (8:00 AM - 10:30 AM)</option>
                                <option value="lunch">Lunch (12:00 PM - 3:30 PM)</option>
                                <option value="dinner">Dinner (7:00 PM - 10:00 PM)</option>
                            </select>
                            <span class="hint">Choose when you'd like to dine</span>
                        </label>
                    </section>
                    <section class="form-row">
                        <label for="guests" class="form-label">
                            <span class="label-text">Number of Guests</span>
                            <input type="number" v-model="guests" id="guests" placeholder="1-25 guests" required min="1"
                                max="25" />
                            <span class="hint">Maximum 25 guests per reservation</span>
                        </label>
                    </section>
                </section>

                <!-- Special Requests -->
                <section class="form-section full-width">
                    <h2 class="section-title">Special Requests</h2>
                    <section class="form-row">
                        <label for="occasion" class="form-label">
                            <span class="label-text">Occasion</span>
                            <select v-model="occasion" id="occasion">
                                <option value="" disabled selected>Select occasion (optional)</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="business">Business Dinner</option>
                                <option value="family">Family Gathering</option>
                                <option value="romantic">Romantic Dinner</option>
                                <option value="other">Other</option>
                            </select>
                            <span class="hint">Let us know if you're celebrating something special</span>
                        </label>
                    </section>
                    <section class="form-row">
                        <label for="preferences" class="form-label">
                            <span class="label-text">Dietary Preferences</span>
                            <select v-model="dietaryPreference" id="preferences">
                                <option value="" disabled selected>Select preference (optional)</option>
                                <option value="none">No dietary restrictions</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="vegan">Vegan</option>
                                <option value="gluten-free">Gluten-Free</option>
                                <option value="halal">Halal</option>
                                <option value="keto">Keto</option>
                                <option value="other">Other</option>
                            </select>
                            <span class="hint">We cater to various dietary needs</span>
                        </label>
                    </section>
                    <section class="form-row">
                        <label for="seating" class="form-label">
                            <span class="label-text">Seating Preference</span>
                            <select v-model="seatingPreference" id="seating">
                                <option value="" disabled selected>Select seating (optional)</option>
                                <option value="indoor">Indoor</option>
                                <option value="outdoor">Outdoor</option>
                                <option value="window">Window Seat</option>
                                <option value="private">Private Area</option>
                                <option value="any">No Preference</option>
                            </select>
                            <span class="hint">We'll accommodate your preference if available</span>
                        </label>
                    </section>
                    <section class="form-row">
                        <label for="addinfo" class="form-label">
                            <span class="label-text">Additional Information</span>
                            <textarea v-model="additionalInfo" id="addinfo" cols="30" rows="4"
                                placeholder="Special requests, allergies, accessibility needs, or any other details..."></textarea>
                            <span class="hint">Let us know how we can make your experience memorable</span>
                        </label>
                    </section>
                </section>
            </section>

            <!-- Verification and Submit -->
            <section class="form2">
                <section class="verification-section">
                    <p class="verify-text">Please verify you're human</p>
                    <section class="valid-container">
                        <span>{{ num1 }}</span>
                        <span class="operator">+</span>
                        <span>{{ num2 }}</span>
                        <span class="equals">=</span>
                        <input v-model="answer" id="ans" type="text" placeholder="?" required />
                    </section>
                    <span class="hint">Enter the sum to confirm your reservation</span>
                </section>
                <button id="submit" type="submit" class="submit-btn">Complete Reservation</button>
                <p class="footer-note">We look forward to serving you!</p>
            </section>
        </form>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import logo from '@/assets/images/form-logo.png';
import { formatReservationEmail } from '@/utils/emailFormatter';

const name = ref('');
const phoneNumber = ref('');
const email = ref('');
const guests = ref(1);
const date = ref('');
const mealType = ref('');
const additionalInfo = ref('');
const occasion = ref('');
const dietaryPreference = ref('');
const seatingPreference = ref('');
const answer = ref('');
const num1 = ref(0);
const num2 = ref(0);
const sum = ref(0);

const validate = () => {
    num1.value = Math.floor(Math.random() * 10);
    num2.value = Math.floor(Math.random() * 10);
    sum.value = num1.value + num2.value;
};

onMounted(() => {
    validate();
});

const validateForm = () => {
    const userSum = parseInt(answer.value);

    if (sum.value === userSum) {
        const emailContent = formatReservationEmail({
            name: name.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            date: date.value,
            mealType: mealType.value,
            guests: guests.value,
            occasion: occasion.value,
            dietaryPreference: dietaryPreference.value,
            seatingPreference: seatingPreference.value,
            additionalInfo: additionalInfo.value
        });

        const restaurantEmail = "siym2024island@gmail.com";

        const mailtoLink = `mailto:${restaurantEmail}?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`;

        window.location.href = mailtoLink;

        alert('Opening your email app to complete the reservation!');

        name.value = '';
        phoneNumber.value = '';
        email.value = '';
        guests.value = 1;
        date.value = '';
        mealType.value = '';
        additionalInfo.value = '';
        occasion.value = '';
        dietaryPreference.value = '';
        seatingPreference.value = '';
        answer.value = '';
        validate();
    } else {
        alert('Please verify that you are human. Try again!');
    }
};

</script>

<style scoped>
:root {
    --primary-color: #0F4875;
    --secondary-color: #4E9DD5;
    --accent-color: #000000;
    --background-color: #FFF8ED;
    --color-light: #275d6e;
}

* {
    box-sizing: border-box;
}

main {
    background-image: linear-gradient(rgba(15, 72, 117, 0.85), rgba(15, 72, 117, 0.95)),
        url('@/assets/images/form-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
}

.heading h1 {
    font-size: 3rem;
    font-weight: 300;
    color: var(--background-color);
    margin: 0.5rem 0 0.2rem 0;
    letter-spacing: 2px;
}

.subtitle {
    color: var(--background-color);
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 300;
    margin-top: 0;
}

.shadow-img {
    filter: drop-shadow(0 5px 8px rgba(255, 248, 237, 0.2));
}

form {
    width: 75vw;
    max-width: 800px;
    background: rgba(255, 248, 237, 0.95);
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.form-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-section.full-width {
    grid-column: 1 / -1;
}

.section-title {
    color: var(--primary-color);
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--secondary-color);
    letter-spacing: 0.5px;
}

.form-row {
    width: 100%;
}

.form-label {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;
}

.label-text {
    color: var(--primary-color);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.3px;
}

.form-label input,
.form-label select,
.form-label textarea {
    width: 100%;
    padding: 10px 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 0.95rem;
    background: white;
    transition: border-color 0.3s ease;
    color: var(--accent-color);
    box-sizing: border-box;
}

.form-label input:focus,
.form-label select:focus,
.form-label textarea:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(78, 157, 213, 0.1);
}

.form-label textarea {
    resize: vertical;
    min-height: 80px;
    font-family: inherit;
}

.hint {
    font-size: 0.75rem;
    color: #666;
    margin-top: 0.2rem;
    font-style: italic;
}

.form2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px solid rgba(15, 72, 117, 0.1);
}

.verification-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    width: 100%;
}

.verify-text {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.95rem;
    margin: 0;
}

.valid-container {
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    background: rgba(78, 157, 213, 0.05);
    padding: 0.5rem 1.5rem;
    border-radius: 12px;
    border: 2px solid rgba(78, 157, 213, 0.2);
}

.valid-container input {
    width: 60px;
    height: 45px;
    font-size: 1.5rem;
    border: 2px solid var(--secondary-color);
    border-radius: 6px;
    text-align: center;
    margin-left: 0.5rem;
    background: white;
}

.valid-container input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(78, 157, 213, 0.2);
}

.operator,
.equals {
    color: var(--primary-color);
}

#submit {
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    width: 100%;
    max-width: 350px;
    height: 55px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(78, 157, 213, 0.3);
}

.submit-btn {
    font-family: "MyCustomFont"
}

#submit:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 20px #0a2436b3;
    background-color: var(--primary-color);
}

#submit:active {
    transform: scale(0.98);
}

.footer-note {
    color: var(--primary-color);
    font-size: 0.9rem;
    margin-top: 0.8rem;
    opacity: 0.7;
    font-style: italic;
}

@media (max-width: 768px) {
    form {
        width: 90vw;
        padding: 1.5rem;
    }

    .form-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .heading h1 {
        font-size: 2rem;
    }

    .valid-container {
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
    }

    .valid-container input {
        width: 50px;
        height: 40px;
        font-size: 1.2rem;
    }

    #submit {
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .heading h1 {
        font-size: 1.5rem;
    }

    .subtitle {
        font-size: 0.9rem;
    }

    form {
        padding: 1rem;
    }

    .section-title {
        font-size: 1rem;
    }
}
</style>