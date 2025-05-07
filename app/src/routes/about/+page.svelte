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
            I'm an eager Software Engineer and Data Scientist with an interest
            in building full-stack applications and deriving insights from big
            data. I believe the best learning comes from diving head-first into
            projects - whether that's deploying a machine learning model to
            production or optimizing a React component's rendering performance.
          </p>
          <p>
            When I'm not on the computer, I enjoy: cooking/baking, digital
            photography (portrait + street), brewing coffee (currently trying
            darker roasts), & vintage thrifting (small and unique charms).
          </p>
          <p>
            I approach both technology and life with the same philosophy: dive
            deep, iterate often, and stay curious. Currently seeking
            opportunities where I can apply this mindset to learn and build
            impactful solutions at the intersection of software and data.
          </p>
        </div>
      </div>

      <section class="skills-section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <!-- Software Engineering -->
          <div class="skill-category">
            <h3>Software Engineering</h3>
            <ul>
              <li>
                <strong>Languages:</strong> Python, JavaScript/TypeScript, Java,
                C/C++, SQL
              </li>
              <li>
                <strong>Web Development:</strong> Svelte/SvelteKit, React, Node.js,
                Flask
              </li>
              <li><strong>Databases:</strong> PostgreSQL, MongoDB</li>
            </ul>
          </div>

          <!-- Data Science -->
          <div class="skill-category">
            <h3>Data Science & ML</h3>
            <ul>
              <li><strong>Data Analysis:</strong> Pandas, NumPy, SciPy, R</li>
              <li>
                <strong>Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn
              </li>
              <li>
                <strong>Data Visualization:</strong> Matplotlib, Seaborn, Plotly,
                Tableau
              </li>
              <li><strong>NLP/CV:</strong> Transformers, OpenCV, NLTK</li>
            </ul>
          </div>

          <!-- Tools & Methodologies -->
          <div class="skill-category">
            <h3>Tools & Methodologies</h3>
            <ul>
              <li><strong>Version Control:</strong> Git, GitHub</li>
              <li>
                <strong>IDEs:</strong> VS Code, PyCharm, Jupyter Notebooks
              </li>
              <li><strong>Other:</strong> Linux, Bash, LaTeX</li>
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
    max-height: 450px;
    overflow-y: scroll;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For IE/Edge */
  }
  
  .bio-text::-webkit-scrollbar {
    display: none;
  }

  .bio-text h2 {
    font-size: 1.8rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
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

    .bio-text {
      max-height: fit-content;
    }
  }
</style>
