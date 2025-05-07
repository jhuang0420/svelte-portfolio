import type { PageLoad } from './$types';
import parallel from "$lib/images/parallel.jpeg"
import hand from "$lib/images/hand.jpeg"
import kagg from "$lib/images/kagg.jpeg"
import port from "$lib/images/port.jpeg"
import stock from "$lib/images/stock.jpeg"
import web from "$lib/images/web.jpeg"

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
      title: "Parallel k-NN Search",
      description: "Achieved 5x speedup on 100K+ data points by implementing parallel k-d tree construction and search with a custom thread pool.",
      technologies: ["C++", "STL", "ThreadPool", "Parallel Computing"],
      github: "https://github.com/jhuang0420/parallel-knn",
      image: parallel,
    },
    {
      title: "OpenCV Gesture Recognition",
      description: "Real-time hand gesture recognition system using CNN with 97% accuracy, featuring Mediapipe and OpenCV pipelines.",
      technologies: ["Python", "TensorFlow/Keras", "OpenCV", "Mediapipe"],
      github: "https://github.com/jhuang0420/comp-vision-hand-numbers",
      image: hand,
    },
    {
      title: "Kaggle Competition (Top 20%)",
      description: "Stack ensemble of XGBoost/LightGBM/CatBoost with feature engineering and Optuna tuning for insurance premium prediction.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Optuna", "EDA"],
      github: "https://github.com/jhuang0420/Kaggle_Insurance_Premium",
      image: kagg,
    },
    {
      title: "Alpaca Stock Forecasting",
      description: "LSTM model predicting stock performance using Alpaca API data, achieving 52.1% mean accuracy across 655 tickers.",
      technologies: ["Python", "TensorFlow", "LSTM", "Alpaca API", "Financial Analysis"],
      github: "https://github.com/jhuang0420/alpaca_bot",
      image: stock,
    },
    {
      title: "Web-link Vulnerability Classifier",
      description: "Logistic regression model classifying risky links using metadata and API data (84% test accuracy).",
      technologies: ["Python", "Scikit-Learn", "Feature Engineering", "Web Scraping"],
      github: "https://github.com/yourusername/link-classifier",
      image: web,
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with Svelte, deployed via Vercel.",
      technologies: ["Svelte", "TypeScript", "HTML/CSS"],
      link: "https://jhuang-portfolio.vercel.app/",
      github: "https://github.com/jhuang0420/svelte-portfolio",
      image: port,
    }
];

  return {
    projects
  };
};