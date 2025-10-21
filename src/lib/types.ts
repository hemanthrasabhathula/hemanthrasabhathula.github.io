export interface ClassNameProps {
  className?: string; // Optional className prop
}

// Base interface for sections with titles
export interface BaseSection {
  title: string;
}

export interface ResumeSection extends BaseSection {
  description: string;
}

export interface Summary extends BaseSection {
  name: string;
  description: string;
  items: string[];
}

export interface Education extends BaseSection {
  degree: string;
  duration: string;
  university: string;
  description: string;
}

export interface ProjectsSection extends BaseSection {
  projects: Project[];
}

export interface Project {
  name: string;
  description: string;
  link: string;
  tools: string;
}

export interface ExperienceSection extends BaseSection {
  experiences: Experience[];
}

export interface Experience {
  title: string;
  companyName: string;
  companyLink: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface SectionData<T> {
  enabled: boolean;
  data: T;
}

export interface PortfolioConfig {
  sections: {
    resume: SectionData<ResumeSection>;
    summary: SectionData<Summary>;
    education: SectionData<Education>;
    projects: SectionData<ProjectsSection>;
    experience: SectionData<ExperienceSection>;
  };
  metadata: {
    lastUpdated: string;
    version: string;
  };
}
