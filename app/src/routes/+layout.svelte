<script>
    import { page } from "$app/stores";
    import { fade, fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { afterNavigate } from "$app/navigation";
    import { onMount } from "svelte";
    import resume from "$lib/files/resume.pdf"; // Add this import at the top
    import "../app.css";

    // Theme and UI states
    let darkMode = false;
    let scrolled = false;
    let isLoading = true;
    let activeSection = "";
    let mobileMenuOpen = false;

    // Navigation items
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Resume", href: resume, external: true },
    ];

    // Toggle dark mode
    function toggleDarkMode() {
        darkMode = !darkMode;
        if (typeof document !== "undefined") {
            document.documentElement.classList.toggle("dark", darkMode);
            localStorage.setItem("darkMode", darkMode.toString());
        }
    }

    // Initialize states
    onMount(() => {
        // Load saved theme preference
        if (typeof window !== "undefined") {
            darkMode = localStorage.getItem("darkMode") === "true";
            document.documentElement.classList.toggle("dark", darkMode);

            // Scroll observer
            window.addEventListener("scroll", () => {
                scrolled = window.scrollY > 10;
            });

            // Section observer
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            activeSection = entry.target.id;
                        }
                    });
                },
                { threshold: 0.5 },
            );

            document.querySelectorAll("section").forEach((section) => {
                observer.observe(section);
            });
        }

        // Simulate loading completion
        setTimeout(() => (isLoading = false), 800);
    });

    // Close mobile menu on navigation
    afterNavigate(() => (mobileMenuOpen = false));

    // Bubble configuration
    let bubbles = Array.from({ length: 12 }, () => ({
        size: Math.random() * 20 + 20,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 15,
        opacity: Math.random() * 0.5 + 0.3,
    }));
</script>

{#if isLoading}
    <div
        class="loader"
        transition:fly={{ y: 20, duration: 300, easing: quintOut }}
    >
        <div class="spinner"></div>
    </div>
{:else}
    <div class="layout-container">
        <div class="bubble-background" aria-hidden="true">
            {#each bubbles as bubble, i}
                <div
                    class="bubble"
                    style={`
                        width:${bubble.size}px;
                        height:${bubble.size}px;
                        left:${bubble.left}%;
                        animation-duration:${bubble.duration}s;
                        animation-delay:-${Math.random() * bubble.duration}s;
                        opacity:${bubble.opacity};
                    `}
                ></div>
            {/each}
        </div>

        <nav class="navbar" class:scrolled>
            <div class="nav-container">
                <a href="/" class="logo">JH</a>

                <div class="nav-links">
                    {#each navItems as item}
                        {#if item.external}
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                class:active={$page.url.pathname === item.href}
                            >
                                {item.name}
                                <span class="hover-underline"></span>
                            </a>
                        {:else}
                            <a
                                href={item.href}
                                class:active={activeSection ===
                                    item.name.toLowerCase() ||
                                    $page.url.pathname === item.href}
                            >
                                {item.name}
                                <span class="hover-underline"></span>
                            </a>
                        {/if}
                    {/each}
                </div>

                <div class="nav-controls">
                    <button
                        class="mobile-toggle"
                        on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
                        aria-label="Menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? "✕" : "☰"}
                    </button>
                    <button
                        on:click={toggleDarkMode}
                        class="theme-toggle"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>
                </div>
            </div>

            {#if mobileMenuOpen}
                <div class="mobile-menu">
                    {#each navItems as item}
                        {#if item.external}
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                class:active={$page.url.pathname === item.href}
                            >
                                {item.name}
                            </a>
                        {:else}
                            <a
                                href={item.href}
                                class:active={activeSection ===
                                    item.name.toLowerCase() ||
                                    $page.url.pathname === item.href}
                            >
                                {item.name}
                            </a>
                        {/if}
                    {/each}
                </div>
            {/if}
        </nav>

        <main in:fade={{ duration: 200 }}>
            <slot />
        </main>

        <footer class="footer">
            <div class="footer-content">
                <div class="footer-divider"></div>
                <p>
                    &copy; {new Date().getFullYear()} Jeffrey Huang. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
{/if}

<style>
    /* Layout Structure */
    .layout-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative;
    }

    main {
        flex: 1;
        padding: 2rem min(5vw, 3rem);
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    /* Navbar Styles */
    .navbar {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: var(--bg);
        border-bottom: 1px solid var(--border);
        transition: all 0.3s ease;
        width: 100%;
    }

    .navbar.scrolled {
        background: rgba(var(--bg-rgb), 0.95);
        backdrop-filter: blur(5px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem min(5vw, 3rem);
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .logo {
        font-weight: bold;
        font-size: 1.25rem;
        color: var(--text);
        text-decoration: none;
        white-space: nowrap;
        margin-right: 1rem;
    }

    /* Navigation Links */
    .nav-links {
        display: flex;
        gap: 1.5rem;
        transition: all 0.3s ease;
    }

    .nav-links a {
        text-decoration: none;
        color: var(--text);
        white-space: nowrap;
        font-size: clamp(0.9rem, 1.5vw, 1rem);
        padding: 0.25rem 0;
        position: relative;
        transition: color 0.2s ease;
    }

    .nav-links a:hover {
        color: var(--primary);
    }

    .nav-links a.active {
        color: var(--primary);
        font-weight: 600;
    }

    .hover-underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary);
        transition: width 0.3s ease;
    }

    .nav-links a:hover .hover-underline {
        width: 100%;
    }

    .nav-links a.active .hover-underline {
        width: 100%;
    }

    /* Nav Controls */
    .nav-controls {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .nav-links a[href="/resume"]::after {
        content: "↗";
        display: inline-block;
        margin-left: 0.25rem;
        font-size: 0.8em;
        opacity: 0.7;
    }

    .theme-toggle {
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        padding: 0.5rem;
        color: var(--text);
        transition: transform 0.3s ease;
    }

    .theme-toggle:hover {
        transform: scale(1.1);
    }

    /* Mobile Menu */
    .mobile-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text);
    }

    .mobile-menu {
        display: none;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        background: var(--bg);
        border-top: 1px solid var(--border);
    }

    .mobile-menu a {
        text-decoration: none;
        color: var(--text);
        padding: 0.5rem 1rem;
        transition: color 0.2s ease;
    }

    .mobile-menu a:hover {
        color: var(--primary);
    }

    .mobile-menu a[href="/resume"]::after {
        content: "↗";
        display: inline-block;
        margin-left: 0.25rem;
        font-size: 0.8em;
        opacity: 0.7;
    }

    /* Footer Styles */
    .footer {
        background: transparent;
        padding: 2rem 1rem;
        padding-bottom: 0.5rem;
        text-align: center;
        color: var(--text);
        font-size: 0.9rem;
        margin-top: auto;
    }

    .footer-divider {
        height: 1px;
        background: linear-gradient(
            90deg,
            transparent,
            var(--primary),
            transparent
        );
        margin: 0 auto 1.5rem;
        width: 80%;
        max-width: 800px;
    }

    .footer-content {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 min(5vw, 3rem);
        box-sizing: border-box;
    }

    /* Loading Animation */
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
        background: var(--bg);
        z-index: 999;
    }

    .spinner {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(var(--text-rgb), 0.1);
        border-radius: 50%;
        border-top-color: var(--primary);
        animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    /* Bubble Background */
    .bubble-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
        pointer-events: none;
    }

    .bubble {
        position: absolute;
        bottom: -60px;
        border-radius: 50%;
        animation-name: floatBubble;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    /* Dark Mode Bubbles */
    :root.dark .bubble {
        background: rgba(172, 136, 245, 0.2);
        filter: blur(7px);
    }

    /* Light Mode Bubbles */
    :root:not(.dark) .bubble {
        background: rgba(99, 148, 240, 0.421);
        filter: blur(6px);
    }

    @keyframes floatBubble {
        0% {
            transform: translateY(0) scale(1);
        }
        50% {
            transform: translateY(-50vh) scale(1.2);
        }
        100% {
            transform: translateY(-100vh) scale(1);
        }
    }

    /* Responsive Behavior */
    @media (max-width: 1100px) {
        .nav-links {
            gap: 1.25rem;
        }
    }

    @media (max-width: 1000px) {
        .nav-links {
            gap: 1rem;
        }
    }

    @media (max-width: 900px) {
        .nav-links a {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }

        .mobile-toggle {
            display: block;
        }

        .mobile-menu {
            display: flex;
        }

        main {
            padding: 1.5rem min(4vw, 2rem);
        }

        .nav-container {
            padding: 1rem min(4vw, 2rem);
        }

        .footer {
            padding: 1.5rem 1rem;
        }
    }

    @media (max-width: 480px) {
        main {
            padding: 1rem min(3vw, 1.5rem);
        }

        .footer-divider {
            width: 90%;
        }
    }
</style>
