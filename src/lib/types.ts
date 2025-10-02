export interface ClassNameProps {
  className?: string; // Optional className prop
}

// Content types

export interface Education {
  title: string;
  degree: string;
  duration: string;
  university: string;
  description: string;
}

export interface SectionData<T> {
  enabled: boolean;
  data: T;
}

export interface PortfolioConfig {
  sections: {
    education: SectionData<Education>;
  };
  metadata: {
    lastUpdated: string;
    version: string;
  };
}
