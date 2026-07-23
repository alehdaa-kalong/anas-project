/**
 * Formats the reservation data into an email subject and body.
 * Maps directly to the v-model data in the reservation template.
 */
export const formatReservationEmail = (data) => {
    const subject = `New Reservation - ${data.name}`;
    const body = `
Reservation Details:
-------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phoneNumber}
Date: ${data.date}
Meal Time: ${data.mealType}
Guests: ${data.guests}
Occasion: ${data.occasion || 'Not specified'}
Dietary Preferences: ${data.dietaryPreference || 'None'}
Seating Preference: ${data.seatingPreference || 'No preference'}

Additional Information:
${data.additionalInfo || 'None provided'}
    `.trim();

    return { subject, body };
};