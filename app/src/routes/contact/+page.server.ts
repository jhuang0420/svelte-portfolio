// src/routes/contact/+page.server.ts
import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { Actions } from './$types';

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465 (SSL), false for 587 (TLS)
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD // Use an App Password, NOT your regular password
    }
});

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        // Validation
        const errors: Record<string, string> = {};
        if (!name) errors.name = 'Name is required';
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = 'Please enter a valid email';
        }
        if (!message) errors.message = 'Message is required';

        if (Object.keys(errors).length > 0) {
            return fail(400, { errors });
        }

        try {
            // Send email
            await transporter.sendMail({
                from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
                to: process.env.YOUR_PERSONAL_EMAIL, // Where you want to receive messages
                subject: `New message from ${name} (Portfolio)`,
                text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
                html: `
                    <h2>New Portfolio Message</h2>
                    <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `
            });

            return { success: true };
        } catch (error) {
            console.error('Email failed:', error);
            return fail(500, {
                errors: { server: 'Failed to send message. Please try again later.' }
            });
        }
    }
};