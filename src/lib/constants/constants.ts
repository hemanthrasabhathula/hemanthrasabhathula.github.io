// API Configuration from environment variables
export const API_CONFIG = {
  GITHUB_GIST_BASE_URL:
    import.meta.env.VITE_GITHUB_GIST_BASE_URL ||
    "https://api.github.com/gists/",
  GIST_ID: import.meta.env.VITE_GIST_ID || "dummy-gist-id",
  FILE_NAME: import.meta.env.VITE_FILE_NAME || "config.json",
} as const;

export const SECTION = {
  HOME: "Home",
  ABOUT: "About",
  SKILLS: "Skills",
  RESUME: "Resume",
  CONTACT: "Contact",
};

export const RESUME_SECTION_TITLES = {
  SUMMARY: "Summary",
  EDUCATION: "Education",
  PROJECTS: "Projects",
  PROFESSIONAL_EXPERIENCE: "Professional Experience",
};

export const SECTION_ID = {
  HOME: "home",
  ABOUT: "about",
  SKILLS: "skills",
  RESUME: "resume",
  CONTACT: "contact",
};

export const SOCIAL = {
  GITHUB: "https://github.com/hemanthrasabhathula",
  LINKEDIN: "https://www.linkedin.com/in/hemanth-rasabhathula",
  TWITTER: "https://twitter.com/_HemanthR",
  INSTAGRAM: "https://www.instagram.com/hemanth.rasabhathula",
};

export const PROFILE = {
  NAME: "Hemanth Rasabhathula",
  FIRST_NAME: "Hemanth",
  LAST_NAME: "Rasabhathula",
  EMAIL: "Hemanth.Rasabhathula@gmail.com",
  WEBSITE: "www.hemanthrasabhathula.co.in",
  LOCATION: "Lee's Summit, MO",
};

export const GITHUB_GIST_BASE_URL = "https://api.github.com/gists/";
export const GIST_ID = "247a9d64bc13aceb4f5c5f5d02470f54";
export const FILE_NAME = "portfolio-config.json";

export const UNIVERSITY = {
  NAME: "UNIVERSITY OF CENTRAL MISSOURI",
  SHORT_NAME: "UCM",
  LOCATION: "Missouri, US",
};
