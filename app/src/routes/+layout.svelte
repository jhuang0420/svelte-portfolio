<script>
    import { page } from "$app/stores";
    import { fade, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { afterNavigate } from "$app/navigation";
    import { onMount } from 'svelte';
    import '../app.css'; 
    
    // Theme and UI states
    let darkMode = false;
    let scrolled = false;
    let isLoading = true;
    let activeSection = '';
    let mobileMenuOpen = false;
    
    // Navigation items
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    // Toggle dark mode - corrected version
    function toggleDarkMode() {
        darkMode = !darkMode;
        if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', darkMode);
            localStorage.setItem('darkMode', darkMode.toString());
        }
    }

    // Initialize states - single onMount
    onMount(() => {
        // Load saved theme preference
        if (typeof window !== 'undefined') {
            // Check localStorage
            darkMode = localStorage.getItem('darkMode') === 'true';
            document.documentElement.classList.toggle('dark', darkMode);

            // Scroll observer
            window.addEventListener('scroll', () => {
                scrolled = window.scrollY > 10;
            });

            // Section observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        activeSection = entry.target.id;
                    }
                });
            }, { threshold: 0.5 });
            
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
        }

        // Simulate loading completion
        setTimeout(() => isLoading = false, 800);
    });

    // Close mobile menu on navigation
    afterNavigate(() => (mobileMenuOpen = false));
</script>

{#if isLoading}
    <div class="loader" transition:fly={{ y: 20, duration: 300, easing: quintOut }}>
        <div class="spinner"></div>
    </div>
{:else}
    <nav class="navbar" class:scrolled>
        <div class="nav-container">
            <a href="/" class="logo">JH</a>

            <div class="nav-links">
                {#each navItems as item}
                    <a
                        href={item.href}
                        class:active={activeSection === item.name.toLowerCase() || $page.url.pathname === item.href}
                    >
                        {item.name}
                        <span class="hover-underline"></span>
                    </a>
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
                <button on:click={toggleDarkMode} class="theme-toggle" aria-label="Toggle dark mode">
                    {darkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </div>

        {#if mobileMenuOpen}
            <div class="mobile-menu">
                {#each navItems as item}
                    <a
                        href={item.href}
                        class:active={activeSection === item.name.toLowerCase() || $page.url.pathname === item.href}
                    >
                        {item.name}
                    </a>
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
            <p>&copy; {new Date().getFullYear()} Jeffrey Huang. All rights reserved.</p>
        </div>
    </footer>
{/if}

<style>
    /* Layout Structure */
    main {
        flex: 1;
        padding: 2rem 1rem;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
    }

    /* Navbar Styles */
    .navbar {
        background: var(--bg);
        border-bottom: 1px solid var(--border);
        position: sticky;
        top: 0;
        z-index: 100;
        transition: all 0.3s ease;
    }

    .navbar.scrolled {
        background: rgba(var(--bg-rgb), 0.95);
        backdrop-filter: blur(5px);
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .logo {
        font-weight: bold;
        font-size: 1.25rem;
        color: var(--dark);
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
        color: var(--dark);
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

    .theme-toggle {
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        padding: 0.5rem;
        color: var(--dark);
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
        color: var(--dark);
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
        color: var(--dark);
        padding: 0.5rem 0;
    }

    /* Footer Styles */
    .footer {
        background: var(--bg);
        padding: 2rem 1rem;
        text-align: center;
        color: var(--dark);
        font-size: 0.9rem;
        margin-top: auto;
    }

    .footer-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--primary), transparent);
        margin: 0 auto 1.5rem;
        max-width: 200px;
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
        border: 3px solid rgba(var(--dark-rgb), 0.1);
        border-radius: 50%;
        border-top-color: var(--primary);
        animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
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
            padding: 1.5rem 1rem;
        }

        .footer {
            padding: 1.5rem 1rem;
        }
    }
</style>