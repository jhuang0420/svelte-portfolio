<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="projects-page">
  <section class="projects-header">
    <h1>My Projects</h1>
    <p class="subtitle">A collection of my recent work and contributions</p>
  </section>

  <div class="projects-grid">
    {#each data.projects as project}
      <article class="project-card">
        {#if project.image}
          <div class="project-bg-image">
            <img src={project.image} alt="" aria-hidden="true" loading="lazy" />
          </div>
        {/if}

        <div class="project-content-overlay">
          <div class="project-content">
            <h2>{project.title}</h2>
            <p class="project-description">{project.description}</p>

            <div class="tech-tags">
              {#each project.technologies as tech}
                <span class="tech-tag">{tech}</span>
              {/each}
            </div>

            <div class="project-links">
              {#if project.link}
                <a href={project.link} class="button primary">View Project</a>
              {/if}
              {#if project.github}
                <a
                  href={project.github}
                  class="button secondary"
                  aria-label="GitHub repository"
                >
                  <svg
                    class="github-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                  Code
                </a>
              {/if}
            </div>
          </div>
        </div>
      </article>
    {/each}
  </div>
</div>

<style>
  .projects-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0rem 1rem 1rem 1rem;
  }

  .projects-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .projects-header h1 {
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

  .projects-grid {
    display: grid;
    gap: 2rem;
  }

  .project-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  .project-bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .project-bg-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(8px) brightness(0.7);
    transform: scale(1.05); /* Prevents blur edge artifacts */
  }

  .project-content-overlay {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(
      to right,
      rgba(var(--bg-rgb), 0.9) 0%,
      rgba(var(--bg-rgb), 0.7) 50%,
      rgba(var(--bg-rgb), 0.4) 100%
    );
  }

  .project-content {
    flex: 1;
    padding: 2.5rem;
    max-width: 60%;
  }

  .project-card h2 {
    font-size: 1.8rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text);
  }

  .project-description {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .tech-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  .tech-tag {
    background: var(--primary);
    color: var(--text-inverse);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    backdrop-filter: blur(5px);
  }

  .project-links {
    display: flex;
    gap: 1rem;
  }

  .project-links a {
    text-decoration: none;
    color: var(--text);
    font-size: 1rem;
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .project-links a.button.primary {
    background: var(--primary);
    color: var(--text-inverse);
  }

  .project-links a.button.primary:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
  }

  .project-links a.button.secondary {
    background: rgba(var(--primary-rgb), 0.1);
    color: var(--primary);
    border: 1px solid var(--primary);
  }

  .project-links a.button.secondary:hover {
    background: rgba(var(--primary-rgb), 0.2);
    transform: translateY(-2px);
  }

  .github-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }

  /* Dark mode adjustments */
  :global(.dark) {
    .project-bg-image img {
      filter: blur(8px) brightness(0.4);
    }

    .project-card {
      border-radius: 12px;
      box-shadow: 0 0 10px rgb(255, 255, 255);
    }

    .project-content-overlay {
      background: linear-gradient(
        to right,
        rgba(var(--dark-bg-rgb), 0.9) 0%,
        rgba(var(--dark-bg-rgb), 0.7) 50%,
        rgba(var(--dark-bg-rgb), 0.4) 100%
      );
    }

    .project-links a.button.secondary {
      background: rgba(var(--primary-rgb), 0.2);
    }

    .project-links a.button.secondary:hover {
      background: rgba(var(--primary-rgb), 0.3);
    }
  }

  /* Responsive layout */
  @media (max-width: 900px) {
    .project-content {
      max-width: 70%;
      padding: 2rem;
    }
  }

  @media (max-width: 700px) {
    .project-card {
      min-height: 300px;
    }

    .project-content {
      max-width: 100%;
      padding: 1.5rem;
    }

    .project-links a {
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 500px) {
    .projects-header h1 {
      font-size: 2rem;
    }

    .project-card {
      min-height: 250px;
    }

    .project-content {
      padding: 1.25rem;
    }

    .project-links {
      flex-direction: column;
    }
  }
</style>
