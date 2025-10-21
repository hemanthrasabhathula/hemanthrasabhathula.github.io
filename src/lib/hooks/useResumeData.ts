import { useSelector } from "react-redux";

import { SECTION } from "../constants/constants";
import { RootState } from "../../store/store";
import { FALLBACK_DATA } from "../constants/fallbackData";
export const useResumeData = () => {
  const resumeConfig = useSelector(
    (state: RootState) => state.portfolio.config?.sections.resume
  );

  const data = resumeConfig?.data || FALLBACK_DATA.RESUME;
  const title = data.title || SECTION.RESUME;
  const description = data.description || "";

  return { title, description };
};

export const useSummaryData = () => {
  const summaryConfig = useSelector(
    (state: RootState) => state.portfolio.config?.sections.summary
  );

  // Check if section is explicitly disabled
  const isDisabled = summaryConfig && !summaryConfig.enabled;

  const data = summaryConfig?.data || FALLBACK_DATA.SUMMARY;
  const title = data.title || FALLBACK_DATA.SUMMARY.title;
  const name = data.name || FALLBACK_DATA.SUMMARY.name;
  const description = data.description || "";
  const items = data.items || FALLBACK_DATA.SUMMARY.items;

  return {
    isDisabled,
    title,
    name,
    description,
    items,
  };
};

export const useEducationData = () => {
  const educationConfig = useSelector(
    (state: RootState) => state.portfolio.config?.sections.education
  );

  // Check if section is explicitly disabled
  const isDisabled = educationConfig && !educationConfig.enabled;

  const data = educationConfig?.data || FALLBACK_DATA.EDUCATION;
  const title = data.title || FALLBACK_DATA.EDUCATION.title;
  const degree = data.degree || "";
  const duration = data.duration || "";
  const university = data.university || "";
  const description = data.description || "";

  return {
    isDisabled,
    title,
    degree,
    duration,
    university,
    description,
  };
};

export const useProjectsData = () => {
  const projectsConfig = useSelector(
    (state: RootState) => state.portfolio.config?.sections.projects
  );

  // Check if section is explicitly disabled
  const isDisabled = projectsConfig && !projectsConfig.enabled;

  const data = projectsConfig?.data || FALLBACK_DATA.PROJECTS;
  const title = data.title || FALLBACK_DATA.PROJECTS.title;
  const projects = data.projects || [];

  return {
    isDisabled,
    title,
    projects,
  };
};

export const useExperienceData = () => {
  const experienceConfig = useSelector(
    (state: RootState) => state.portfolio.config?.sections.experience
  );

  // Check if section is explicitly disabled
  const isDisabled = experienceConfig && !experienceConfig.enabled;

  const data = experienceConfig?.data || FALLBACK_DATA.EXPERIENCE;
  const title = data.title || FALLBACK_DATA.EXPERIENCE.title;
  const experiences = data.experiences || [];

  return {
    isDisabled,
    title,
    experiences,
  };
};
