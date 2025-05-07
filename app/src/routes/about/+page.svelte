<!-- src/routes/about/+page.svelte -->
<script lang="ts">
  import profile from "$lib/images/profile.jpg";
</script>

<div class="about-page">
  <section class="about-header">
    <h1>About Me</h1>
    <p class="subtitle">My journey in technology and development</p>
  </section>

  <div class="about-content">
    <div class="about-text">
      <div class="bio-section">
        <img
          src={profile}
          alt="Jeffrey Huang"
          class="profile-image"
          width="400"
          height="400"
          loading="lazy"
        />
        <div class="bio-text">
          <h2>Background</h2>
          <p>
            Computer Science student passionate about building intuitive
            interfaces and solving complex problems. Currently specializing in
            web development and machine learning with experience across the full
            stack.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source
            projects, learning new technologies, or exploring the intersection
            of art and technology.
          </p>
        </div>
      </div>

      <section class="skills-section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>Svelte/SvelteKit</li>
              <li>React/Next.js</li>
              <li>Node.js</li>
              <li>TensorFlow</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>PostgreSQL</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

<style>
  .about-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .about-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .about-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--text);
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .bio-section {
    display: flex;
    gap: 3rem;
    align-items: center;
    margin-bottom: 4rem;
  }

  .profile-image {
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  .bio-text {
    flex: 1;
  }

  .bio-text h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--text);
  }

  .bio-text p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .skills-section h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: var(--text);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .skill-category {
    background: var(--card-bg);
    border-radius: 8px;
    padding: 1.5rem;
    border: 1px solid var(--border);
  }

  .skill-category h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }

  .skill-category ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .skill-category li {
    padding: 0.5rem 0;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
  }

  .skill-category li:last-child {
    border-bottom: none;
  }

  /* Dark mode adjustments */
  :global(.dark) {
    .profile-image {
      border-radius: 12px;
      box-shadow: 0 0 30px rgb(255, 255, 255);
    }

    .skill-category {
      background: var(--dark-bg);
    }
  }

  /* Responsive design */
  @media (max-width: 800px) {
    .bio-section {
      flex-direction: column;
      gap: 2rem;
    }

    .profile-image {
      width: 330px;
      height: 330px;
    }

    .about-content {
      margin: 0 1.5rem;
    }
  }

  @media (max-width: 600px) {
    .about-header h1 {
      font-size: 2rem;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
