// src/routes/contact/+page.server.ts
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Basic validation
    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Name is required';
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email.toString())) {
      errors.email = 'Please enter a valid email';
    }
    if (!message) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors });
    }

    // Here you would typically:
    // 1. Send an email (using Nodemailer, SendGrid, etc.)
    // 2. Save to database
    // 3. Or connect to your preferred contact form service

    // For now we'll just log and return success
    console.log('New contact form submission:', { name, email, message });

    return { success: true };
  }
};