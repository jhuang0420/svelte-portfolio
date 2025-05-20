<!-- src/routes/+page.svelte -->
<script>
    import profile from "$lib/images/profile.jpg";
    import project_img from "$lib/images/never.jpg";
</script>

<div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Hi, I'm Jeffrey Huang</h1>
                <p class="subtitle">Full-Stack Developer & Data Analyst</p>
                <p class="description">
                    Based in <b>New York City 📌</b> - Building optimized and scalable systems.
                    Specializing in data-intensive applications and real-time dashboard
                    development.
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
                <h3>Mobile Development</h3>
                <p>
                    React Native (Expo), Flutter, Firebase (Auth/Realtime DB),
                    Mobile CI/CD
                </p>
            </div>
            <div class="skill-card">
                <h3>Full-Stack Web</h3>
                <p>
                    React/Svelte, Node.js, Python (Flask/FastAPI), REST APIs
                </p>
            </div>
            <div class="skill-card">
                <h3>Machine Learning</h3>
                <p>
                    PyTorch, TensorFlow, Computer Vision, Scikit-Learn, MLflow
                </p>
            </div>

            <div class="skill-card">
                <h3>Languages</h3>
                <p>
                    C/C++, Java, Python, JavaScript/TypeScript, CUDA, HTML/CSS, R
                </p>
            </div>
        </div>
    </section>

    <!-- Featured Project -->
    <section class="section featured-project">
        <h2>Currently Working on ...</h2>
        <div class="project-card">
            <div class="project-content">
                <h3>Neverlasting App</h3>
                <p>
                    Match with a stranger for a one-time, in-person coffee chat. 
                    Conversations are anonymously recorded by users (with consent), then 
                    vanish forever—unless both choose to archive them as crowd-sourced 
                    audio art.
                </p>
                <div class="tech-tags">
                    <span>React Native</span>
                    <span>Firebase</span>
                    <span>FFmpeg</span>
                </div>
                <a href="https://github.com/jhuang0420/Neverlasting" class="button primary">
                    View Project
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
        padding-bottom: 0rem;
    }

    section {
        margin-top: 1rem;
        margin-bottom: 1rem;
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
        padding: 1.5rem 1.5rem 1rem 1.5rem;
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
        background: transparent;
        padding-bottom: 0rem;
        padding-top: 0;
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
        padding: 0 1rem;
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

    /* Glowing Divider Configuration */
    .hero,
    .skills,
    .featured-project {
        position: relative;
        padding-bottom: 2rem;
    }

    /* Divider for sections that should have it */
    .hero::after,
    .skills::after,
    .featured-project::after {
        content: "";
        position: absolute;
        margin-top: 3rem;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 1000px;
        height: 1px;
        background: linear-gradient(
            90deg,
            transparent,
            var(--primary),
            transparent
        );
    }

    /* No divider for CTA section */
    .cta {
        position: relative;
        padding-bottom: 1rem;
    }
    .cta::after {
        display: none;
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
            gap: 1rem;
        }

        .project-image {
            order: 1;
            margin-left: 2rem;
            margin-right: 2rem;
            margin-bottom: 0rem;
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
