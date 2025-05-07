<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
    import { enhance } from "$app/forms";
    import { toast } from "svelte-sonner";

    // Define all types locally
    type FormErrors = {
        name?: string;
        email?: string;
        message?: string;
        server?: string;
    };

    type FormValues = {
        name?: string;
        email?: string;
        message?: string;
    };

    type ActionData = {
        errors?: FormErrors;
        values?: FormValues;
        success?: boolean;
    };

    // Component props and state
    export let form: ActionData;
    let name = form?.values?.name || "";
    let email = form?.values?.email || "";
    let message = form?.values?.message || "";
    let isSubmitting = false;

    // Computed properties
    const formErrors: FormErrors = form?.errors || {};
    $: isFormValid = Boolean(
        name && 
        email && 
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && 
        message
    );

</script>

<div class="contact-page">
    <section class="contact-header" aria-labelledby="contact-heading">
        <h1 id="contact-heading">Get In Touch</h1>
        <p class="subtitle">
            Have a question or want to collaborate? I'll respond within 24
            hours.
        </p>
    </section>

    <div class="contact-container">
        <section class="contact-form-section" aria-labelledby="form-heading">
            <h2 id="form-heading" class="visually-hidden">Contact Form</h2>
            <form
                class="contact-form"
                method="POST"
                use:enhance={({ formElement }) => {
                    isSubmitting = true;
                    return async ({ result }) => {
                        if (result.type === "success") {
                            toast.success("Message sent successfully!");
                            formElement.reset();
                        } else if (result.type === "error") {
                            toast.error(
                                "Failed to send message. Please try again.",
                            );
                        }
                        isSubmitting = false;
                    };
                }}
            >
                {#if formErrors?.server}
                    <div class="server-error" role="alert">
                        {formErrors.server}
                    </div>
                {/if}

                <div class="form-group">
                    <label for="name"
                        >Name <span class="required">*</span></label
                    >
                    <input
                        id="name"
                        name="name"
                        type="text"
                        bind:value={name}
                        required
                        aria-required="true"
                        aria-invalid={!!formErrors?.name}
                        aria-describedby={formErrors?.name
                            ? "name-error"
                            : undefined}
                    />
                    {#if formErrors?.name}
                        <small
                            id="name-error"
                            class="error-message"
                            role="alert"
                        >
                            {formErrors.name}
                        </small>
                    {/if}
                </div>

                <div class="form-group">
                    <label for="email"
                        >Email <span class="required">*</span></label
                    >
                    <input
                        id="email"
                        name="email"
                        type="email"
                        bind:value={email}
                        required
                        aria-required="true"
                        aria-invalid={!!formErrors?.email}
                        aria-describedby={formErrors?.email
                            ? "email-error"
                            : undefined}
                    />
                    {#if formErrors?.email}
                        <small
                            id="email-error"
                            class="error-message"
                            role="alert"
                        >
                            {formErrors.email}
                        </small>
                    {/if}
                </div>

                <div class="form-group">
                    <label for="message"
                        >Message <span class="required">*</span></label
                    >
                    <textarea
                        id="message"
                        name="message"
                        bind:value={message}
                        rows="6"
                        required
                        aria-required="true"
                        aria-invalid={!!formErrors?.message}
                        aria-describedby={formErrors?.message
                            ? "message-error"
                            : undefined}
                    ></textarea>
                    {#if formErrors?.message}
                        <small
                            id="message-error"
                            class="error-message"
                            role="alert"
                        >
                            {formErrors.message}
                        </small>
                    {/if}
                </div>

                <button
                    type="submit"
                    class="button primary"
                    disabled={!isFormValid || isSubmitting}
                    aria-busy={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>

        <aside class="contact-info" aria-labelledby="connect-heading">
            <h2 id="connect-heading">Other Ways to Connect</h2>
            <div class="contact-methods">
                <a href="mailto:jhuang0420@gmail.com" class="contact-method">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
                        />
                    </svg>
                    <span>jhuang0420@gmail.com</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/jeffrey-huang-107288214/"
                    class="contact-method"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                        />
                    </svg>
                    <span>LinkedIn Profile</span>
                </a>

                <a
                    href="https://github.com/jhuang0420"
                    class="contact-method"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        />
                    </svg>
                    <span>GitHub Profile</span>
                </a>
            </div>
        </aside>
    </div>
</div>

<style>
    /* Base Styles */
    .contact-page {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0rem 1rem 1rem 1rem;
    }

    /* Header */
    .contact-header {
        text-align: center;
        margin-bottom: 3rem;
        
    }

    .contact-header h1 {
        font-size: 2.5rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        color: var(--text);
    }

    .subtitle {
        font-size: 1.1rem;
        color: var(--text-secondary);
        max-width: 600px;
        margin: 0 auto;
    }

    /* Layout */
    .contact-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-top: 2rem;
    }

    /* Form Styles */
    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    label {
        font-weight: 500;
        color: var(--text);
    }

    .required {
        color: var(--error);
    }

    input,
    textarea {
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 6px;
        background: var(--input-bg);
        color: var(--text);
        font-family: inherit;
        font-size: 1rem;
        transition: all 0.2s ease;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
    }

    textarea {
        resize: vertical;
        min-height: 150px;
    }

    /* Error Handling */
    .error-message,
    .server-error {
        color: var(--error);
        font-size: 0.85rem;
    }

    .server-error {
        background: rgba(var(--error-rgb), 0.1);
        padding: 1rem;
        border-radius: 6px;
        margin-bottom: 1rem;
    }

    /* Contact Info */
    .contact-info {
        padding: 1rem;
    }

    .contact-info h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: var(--text);
    }

    .contact-methods {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .contact-method {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--text);
        text-decoration: none;
        transition: all 0.2s ease;
        padding: 0.75rem;
        border-radius: 6px;
    }

    .contact-method:hover {
        color: var(--primary);
        background: var(--light);
        transform: translateX(4px);
    }

    .contact-method svg {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    }

    /* Button Styles */
    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s ease;
        cursor: pointer;
        border: none;
        font-size: 1rem;
    }

    .button.primary {
        background: var(--primary);
        color: var(--text-inverse);
    }

    .button.primary:hover:not(:disabled) {
        background: var(--primary-hover);
    }

    .button.primary:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    /* Loading Spinner */
    button[aria-busy="true"] {
        position: relative;
        pointer-events: none;
    }

    button[aria-busy="true"]::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 50%;
        left: 50%;
        margin-left: -8px;
        margin-top: -8px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    /* Accessibility */
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    /* Dark Mode */
    :global(.dark) {

        input,
        textarea {
            background: var(--dark-bg);
        }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .contact-container {
            grid-template-columns: 1fr;
        }

        .contact-header h1 {
            font-size: 2rem;
        }
    }

    @media (max-width: 480px) {
        .contact-page {
            padding: 1.5rem 1rem;
        }

        .contact-header {
            margin-bottom: 2rem;
        }

        textarea {
            min-height: 120px;
        }
    }

    :root {
        --error: #dc2626;
        --error-rgb: 220, 38, 38;
        --input-bg: #ffffff;
    }
    
</style>
