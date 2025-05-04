<script lang="ts">
  import type { PageData } from './$types';
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
              <a href={project.github} class="button secondary" aria-label="GitHub repository">
                <svg class="github-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                Code
              </a>
            {/if}
          </div>
        </div>
        
        {#if project.image}
          <div class="project-image">
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
        {/if}
      </article>
    {/each}
  </div>
</div>

<style>
  .projects-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .projects-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .projects-header h1 {
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

  .projects-grid {
    display: grid;
    gap: 2rem;
  }

  .project-card {
    display: flex;
    gap: 3rem;
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .project-content {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }

  .project-card h2 {
    font-size: 1.5rem;
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
  }

  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: auto;
  }

  .project-image {
    flex: 1;
    display: flex;
    align-items: center;
    background: var(--light);
  }

  .project-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .github-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }

  /* Dark mode adjustments */
  :global(.dark) {
    .project-card {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .project-card:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }
  }

  /* Responsive layout */
  @media (max-width: 900px) {
    .project-card {
      flex-direction: column;
      gap: 0;
    }

    .project-image {
      order: -1;
      max-height: 300px;
    }
  }

  @media (max-width: 600px) {
    .projects-header h1 {
      font-size: 2rem;
    }

    .project-links {
      flex-direction: column;
    }
  }
</style>