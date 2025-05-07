<!-- src/routes/+page.svelte -->
<script>
    import profile from "$lib/images/profile.jpg";
    import project_img from "$lib/images/project.jpg";
</script>

<div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Hi, I'm Jeffrey Huang</h1>
                <p class="subtitle">Developer & Problem Solver</p>
                <p class="description">
                    Passionate about uncovering meaningful insights from raw
                    data. Curious about new technologies from machine learning
                    and statistical analysis to efficient algorithms and
                    visualization.
                </p>
                <div class="hero-buttons">
                    <a href="/projects" class="button primary">View My Work</a>
                    <a href="/about" class="button secondary">Learn About Me</a>
                </div>
            </div>
            <div class="hero-image">
                <img
                    src={profile}
                    alt="Jeffrey Huang"
                    width="400"
                    height="400"
                    class="profile-photo"
                />
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="section skills">
        <h2>My Skills</h2>
        <div class="skills-grid">
            <div class="skill-card">
                <h3>Web Development</h3>
                <p>
                    Svelte, React, JavaScript/TypeScript, HTML/CSS, Flutter,
                    Figma
                </p>
            </div>
            <div class="skill-card">
                <h3>Backend Development</h3>
                <p>Node.js, Python, SQL, REST APIs, Flask, MongoDB</p>
            </div>
            <div class="skill-card">
                <h3>Data Science & ML</h3>
                <p>
                    Pandas, NumPy, Scikit-Learn, TensorFlow, Keras, EDA,
                    Computer Vision
                </p>
            </div>
            <div class="skill-card">
                <h3>Languages</h3>
                <p>Python, C/C++, Java, R, JavaScript/TypeScript, SQL</p>
            </div>
        </div>
    </section>

    <!-- Featured Project -->
    <section class="section featured-project">
        <h2>Featured Project</h2>
        <div class="project-card">
            <div class="project-content">
                <h3>Portfolio Website</h3>
                <p>
                    This very website you're viewing! Built with SvelteKit to
                    showcase my skills and projects with a clean, responsive
                    design.
                </p>
                <div class="tech-tags">
                    <span>SvelteKit</span>
                    <span>TypeScript</span>
                    <span>CSS</span>
                </div>
                <a href="/projects/portfolio" class="button primary">
                    View Project Details
                </a>
            </div>
            <div class="project-image">
                <img
                    src={project_img}
                    alt="Portfolio Website Screenshot"
                    width="600"
                    height="400"
                    loading="lazy"
                />
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="section cta">
        <h2>Let's Connect</h2>
        <p>Interested in working together or have questions about my work?</p>
        <a href="/contact" class="button primary">Get In Touch</a>
    </section>
</div>

<style>
    :global(html, body) {
        min-width: 400px;
        overflow-x: auto; /* Allows horizontal scrolling if needed */
    }

    /* Base Styles */
    .homepage {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        padding-bottom: 4rem;
    }

    section {
        scroll-margin-top: 2rem;
    }

    h1,
    h2,
    h3 {
        margin: 0 0 1rem 0;
        line-height: 1.2;
        color: var(--text);
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    p {
        margin: 0 0 1.5rem 0;
        color: var(--text-secondary);
        line-height: 1.6;
    }

    /* Hero Section */
    .hero {
        border-radius: 12px;
        padding: 3rem 0;
    }

    .hero-content {
        display: flex;
        align-items: center;
        gap: 3rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 5rem;
    }

    .hero-text {
        flex: 1;
    }

    .hero-image {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .subtitle {
        font-size: 1.25rem;
        color: var(--primary);
        font-weight: 500;
        margin-bottom: 1.5rem;
    }

    .description {
        font-size: 1.1rem;
        max-width: 600px;
    }

    .hero-buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }

    .hero-image {
        border-radius: 12px;
        box-shadow: 0 0 30px rgb(255, 255, 255);
        max-height: 400px;
        max-width: 400px;
    }

    .profile-photo {
        border-radius: 12px;
        max-height: 400px;
        max-width: 400px;
        width: 100%;
        height: auto;
    }

    /* Skills Section */
    .skills {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .skill-card {
        background: var(--card-bg);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
    }

    .skill-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    /* Project Section */
    .featured-project {
        background: linear-gradient(135deg, var(--light) 0%, var(--bg) 100%);

        padding: 3rem 0;
        border-radius: 12px;
    }

    .project-card {
        display: flex;
        gap: 3rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .project-content {
        flex: 3;
        padding: 2rem;
    }

    .project-image {        
        flex: 2;
        display: flex;
        align-items: center;
        border-radius: 8px;
    }

    .project-image img {
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
        max-width: 100%;
        height: auto;
    }

    .tech-tags {
        display: flex;
        gap: 0.5rem;
        margin: 1.5rem 0;
        flex-wrap: wrap;
    }

    .tech-tags span {
        background: var(--primary);
        color: var(--text-inverse);
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.85rem;
    }

    /* CTA Section */
    .cta {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 2rem;
        text-align: center;
    }

    /* Buttons */
    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
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

    .button.primary:hover {
        background: var(--primary-hover);
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.2);
    }

    .button.secondary {
        background: var(--button-secondary-bg);
        color: var(--primary);
        border: 1px solid var(--primary);
    }

    .button.secondary:hover {
        background: var(--button-secondary-hover);
    }

    /* Dark Mode Specific Adjustments */
    :global(.dark) {
        .hero {
            background: transparent;
        }

        .button.primary:hover {
            box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.3);
        }

        .skill-card {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .profile-photo,
        .project-image img {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
    }

    /* Responsive Design */
    @media (max-width: 800px) {
        .hero-content {
            flex-direction: column;
            max-width: 400px;
        }

        .hero-text {
            order: 2;
            text-align: center;
        }

        .hero-buttons {
            justify-content: center;
        }

        .hero-image {
            order: 1;
        }

        .project-card {
            flex-direction: column;
            align-items: center;
        }

        .project-image {
            order: 1;
            margin-left: 2rem;
            margin-right: 2rem ;
            max-width: 450px;
        }

        .project-content {
            order: 2;
            text-align: center; /* Center text content */
            display: flex;
            flex-direction: column;
            align-items: center; /* Center child elements */
            max-width: 500px;
        }

        .tech-tags {
            justify-content: center; /* Center tech tags */
        }

        .button {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.75rem;
        }

        .hero-buttons {
            flex-direction: column;
        }

        .hero-content,
        .skills,
        .skills-grid {
            grid-template-columns: 1fr;
        }
        .project-card {
            padding: 0 1rem;
        }
        .project-image img {
            max-width: 100%; /* Ensure image doesn't overflow */
        }
        .cta {
            padding: 0 1.5rem;
        }
    }
</style>
