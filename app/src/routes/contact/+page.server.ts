// src/routes/contact/+page.server.ts
import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { GMAIL_USER, GMAIL_APP_PASSWORD, YOUR_PERSONAL_EMAIL } from '$env/static/private';

export const actions: Actions = {
    default: async ({ request }) => {

        // Validate environment configuration
        if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !YOUR_PERSONAL_EMAIL) {
            console.error('Missing email configuration:', {
                GMAIL_USER: !!GMAIL_USER,
                GMAIL_APP_PASSWORD: !!GMAIL_APP_PASSWORD,
                YOUR_PERSONAL_EMAIL: !!YOUR_PERSONAL_EMAIL
            }); 
            return fail(500, {
                errors: { server: 'Server configuration error' },
                values: Object.fromEntries(await request.formData())
            });
        }

        // Create email transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_APP_PASSWORD
            }
        });

        // Get and validate form data
        const formData = await request.formData();
        const name = (formData.get('name')?.toString() || '').trim();
        const email = (formData.get('email')?.toString() || '').trim();
        const message = (formData.get('message')?.toString() || '').trim();

        // Validate inputs
        const errors: Record<string, string> = {};
        if (!name) errors.name = 'Name is required';
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Invalid email format';
        }
        if (!message) errors.message = 'Message is required';

        if (Object.keys(errors).length > 0) {
            return fail(400, { errors, values: { name, email, message } });
        }

        // Send email
        try {
            await transporter.sendMail({
                from: `"Portfolio Contact" <${GMAIL_USER}>`,
                to: YOUR_PERSONAL_EMAIL,
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
        } catch (err) {
            console.error('Failed to send email:', err);
            return fail(500, {
                errors: { server: 'Failed to send message. Please try again later.' },
                values: { name, email, message }
            });
        }
    }
};