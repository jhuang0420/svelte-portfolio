// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // Add env variables to locals
    event.locals.runtime = {
        env: {
            GMAIL_USER: process.env.GMAIL_USER,
            GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
            YOUR_PERSONAL_EMAIL: process.env.YOUR_PERSONAL_EMAIL
        }
    };

    return resolve(event);
};