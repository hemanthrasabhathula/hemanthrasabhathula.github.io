import { SECTION, SECTION_ID } from "../constants/constants";

export const useSkillsData = () => {
  const title = SECTION.SKILLS;
  const skillsDescription =
    "As an accomplished developer, I possess a profound expertise in a wide array of programming languages, including Java, Kotlin, Python, and JavaScript. My proficiency extends to cutting-edge web development technologies, encompassing Angular, React, and HTML & CSS. Furthermore, I have a substantial background in database management with PostgreSQL and MongoDB, along with a comprehensive grasp of SQL and cloud platforms such as AWS and Azure.";

  const skills = [
    { tech: "JAVA", progress: 85 },
    { tech: "KOTLIN", progress: 75 },
    { tech: "PYTHON", progress: 80 },
    { tech: "JAVASCRIPT", progress: 90 },
    { tech: "REACT", progress: 90 },
    { tech: "SQL", progress: 70 },
  ];

  return { title, skillsDescription, skills, sectionId: SECTION_ID.SKILLS };
};
