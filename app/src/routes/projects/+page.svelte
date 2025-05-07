<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  function handleImageLoad(e: Event) {
    const target = e.currentTarget as HTMLImageElement;
    target.parentElement?.classList.add("loaded");
  }
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
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              on:load={handleImageLoad}
            />
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
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 1.5rem 3rem;
  }

  .projects-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .projects-header h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    background: linear-gradient(to right, var(--primary), #4069ab);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin: 0.5rem 0 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
  }

  .project-card {
    position: relative;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(130, 156, 240, 0.928);
    
    overflow: hidden;
    backdrop-filter: blur(16px);
    background: rgba(var(--bg-rgb), 0.6);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  .project-card:hover {
    transform: translateY(-8px);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(var(--primary-rgb), 0.4);
  }

  .project-bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    will-change: transform;
    transition: transform 0.5s ease-out;
  }

  .project-bg-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(8px) brightness(0.6);
    transform: scale(1.05);
  }

  .project-card:hover .project-bg-image {
    transform: scale(1.05) translateY(-5px);
  }

  .project-bg-image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(var(--bg-rgb), 0) 0%,
      rgba(var(--bg-rgb), 0.3) 50%,
      rgba(var(--bg-rgb), 0) 100%
    );
    z-index: 1;
  }

  .project-content-overlay {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    background:rgba(255, 255, 255, 0.983);
  }

  .project-content {
    flex: 1;
    padding: 2.5rem;
    max-width: 60%;
  }

  .project-card h2 {
    font-size: clamp(1.5rem, 2vw, 1.8rem);
    font-weight: 600;
    margin: 0.5rem 0 1.25rem;
    color: var(--text);
    line-height: 1.3;
  }

  .project-description {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .tech-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  .tech-tag {
    background: rgba(var(--primary-rgb), 0.15);
    color: var(--primary);
    border: 1px solid rgba(var(--primary-rgb), 0.3);
    padding: 0.35rem 0.2rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.2s ease;
    backdrop-filter: blur(4px);
  }

  .tech-tag:hover {
    background: rgba(var(--primary-rgb), 0.3);
    transform: translateY(-1px);
    box-shadow: 0 0 10px rgba(var(--primary-rgb), 0.2);
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
    position: relative;
    overflow: hidden;
  }

  .project-links a.button.primary {
    background: var(--primary);
    color: var(--text-inverse);
  }

  .project-links a.button.primary:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
  }

  .project-links a.button.primary::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }

  .project-links a.button.primary:hover::after {
    left: 100%;
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
    .project-card {
      border-radius: 12px;
      box-shadow: 0 0 10px rgb(255, 255, 255);
    }

    .project-bg-image img {
      filter: blur(4px) brightness(0.4) contrast(1);
    }

    .project-content-overlay {
      background: linear-gradient(
        135deg,
        rgba(23, 23, 23, 0.9) 0%,
        rgba(23, 23, 23, 0.6) 100%
      );
    }

    .tech-tag {
      border-color: rgba(var(--primary-rgb), 0.5);
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
    .projects-page {
      padding: 1.5rem 1.25rem 2.5rem;
    }

    .project-content {
      max-width: 70%;
      padding: 2rem;
    }
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .projects-header {
      margin-bottom: 3rem;
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
