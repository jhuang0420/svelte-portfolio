import type { PageLoad } from './$types';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const load: PageLoad = async () => {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio built with SvelteKit featuring dark mode, responsive design and smooth animations.",
      technologies: ["SvelteKit", "TypeScript", "CSS"],
      link: "/",
      github: "https://github.com/yourusername/portfolio",
      image: "/portfolio-screenshot.jpg"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with product management, cart functionality, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example-store.com",
      github: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Machine Learning Model",
      description: "Image classification model trained to recognize various plant species with 92% accuracy.",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      github: "https://github.com/yourusername/plant-classifier"
    }
  ];

  return {
    projects
  };
};