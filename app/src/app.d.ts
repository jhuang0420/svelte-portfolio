// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
            runtime: {
                env: {
                    GMAIL_USER?: string;
                    GMAIL_APP_PASSWORD?: string;
                    YOUR_PERSONAL_EMAIL?: string;
                };
            };
        }
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
