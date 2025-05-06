// src/routes/contact/$types.d.ts
import type { ActionResult } from '@sveltejs/kit';

export type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
    server?: string;
};

export type ActionData = {
    errors?: FormErrors;
    success?: boolean;
} | Exclude<ActionResult, { type: 'success' }>;