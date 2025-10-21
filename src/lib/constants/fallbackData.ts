import {
  Education,
  ExperienceSection,
  ProjectsSection,
  ResumeSection,
  Summary,
} from "../types";
import {
  PROFILE,
  RESUME_SECTION_TITLES,
  SECTION,
  UNIVERSITY,
} from "./constants";

export const FALLBACK_DATA = {
  RESUME: {
    title: SECTION.RESUME,
    description:
      "As a highly skilled and experienced software engineer, I am well-versed in a variety of development methodologies and always seeking new opportunities to learn and grow. With my ability to think strategically and communicate effectively, I am confident in my capacity to make a valuable contribution to any organization.",
  } as ResumeSection,

  SUMMARY: {
    title: RESUME_SECTION_TITLES.SUMMARY,
    name: PROFILE.NAME,
    description:
      "Deadline-driven and innovative software developer with experience in designing and developing user-centered software solutions from initial concept to the polished end product.",
    items: [PROFILE.LOCATION, PROFILE.EMAIL],
  } as Summary,

  EDUCATION: {
    title: RESUME_SECTION_TITLES.EDUCATION,
    degree: "MSc in Computer Science",
    duration: "2024 - 2025",
    university: `${UNIVERSITY.SHORT_NAME} - ${UNIVERSITY.LOCATION}`,
    description:
      "I am currently pursuing my Master of Science degree in Computer Science at the University of Central Missouri, where I focus on the fields of Artificial Intelligence and Machine Learning.",
  } as Education,

  PROJECTS: {
    title: RESUME_SECTION_TITLES.PROJECTS,
    projects: [
      {
        name: "AI Resume Builder",
        tools: "Next.js, TypeScript, Prisma, PostgreSQL, Open AI, Stripe",
        description:
          "A web application that generates resumes using OpenAI API, allowing users to create and download resumes in PDF format. Integrated Stripe for payment processing.",
        link: "https://ai-resume-builder-dev.vercel.app",
      },
      {
        name: "Best Lines of Books Web App",
        tools: "TypeScript, React, Python, Flask, Bootstrap, MongoDB",
        description:
          "A book collection platform, showcasing the best lines of books with a beautiful backgrounds, and integrated an AI API for effortless book additions.",
        link: "https://best-lines-of-books.web.app",
      },
      {
        name: "Machine Learning Project",
        tools: "Python, TensorFlow, Pandas, Scikit",
        description:
          "Executed machine learning projects in Classification, Regression, and Neural Networks on extensive open-source datasets, achieving up to 85% accuracy on classification tasks using TensorFlow and Scikit-learn.",
        link: "https://github.com/hemanthrasabhathula/Machine-Learning",
      },
      {
        name: "Housie Picker App",
        tools: "Java, XML, MaterialDesign",
        description:
          "Published a responsive application with material design, optimized for mobile and tablet screens, achieving over 100,000+ downloads on Google Play Store.",
        link: "https://play.google.com/store/apps/details?id=com.numbergenerate.housieapp",
      },
      {
        name: "WhatsOnOtt App",
        tools: "Kotlin, XML, MVVM, GitHub Gist API",
        description:
          "Designed and developed an MVVM-based mobile application in Kotlin for tracking the latest trending entertainment on 6 OTT platforms.",
        link: "https://play.google.com/store/apps/details?id=com.rasabhathula.android.whatsonott",
      },
    ],
  } as ProjectsSection,

  EXPERIENCE: {
    title: RESUME_SECTION_TITLES.PROFESSIONAL_EXPERIENCE,
    experiences: [
      {
        title: "Full-Stack Engineer (Intern)",
        companyName: "Blockhouse Labs",
        companyLink: "https://blockhouse.app/",
        location: "NYC, US",
        duration: "Sep 2024 - Dec 2024",
        responsibilities: [
          "Built and maintained full-stack web applications using Next.js, Prisma, TypeScript, and Django, delivering over 25 key features while ensuring pixel-perfect translation of designs from Figma.",
          "Refined application performance by implementing efficient API calls, caching strategies, and PostgreSQL query optimization, improving response time by 30%.",
          "Established a Cypress end-to-end testing suite for core functionalities, achieving 95% test coverage and ensuring robust application quality and reliability.",
          "Set up an automated CI/CD pipeline with GitHub Actions to run Cypress tests on Pull Requests, reducing manual testing effort by 40%.",
          "Participated in Agile methodologies, using PostHog for application monitoring and optimizations that enhanced user experience by 20%.",
        ],
      },
      {
        title: "Software Engineer",
        companyName: "Optum",
        companyLink: "https://www.optum.com",
        location: "Hyderabad, IN",
        duration: "2021 - 2023",
        responsibilities: [
          "Architected and established a GraphQL API solution for the legacy application to enhance system performance and efficiency by 20%.",
          "Spearheaded optimization efforts in REDIS cache management and PostgreSQL data management, resulting in a notable 30% reduction in API latency.",
          "Pioneered the externalization of micro-apps APIs with KONG API Gateway, effectively integrating OAuth2 Authorization; achieved secure access for over 50 endpoints.",
          "Led initiatives to revamp the UI/UX of the About/Contact Us sections, resulting in 25% boost in user interaction.",
          "Implemented cross-domain cache management for URL redirection in the frontend, ensuring seamless webpage transitions for authenticated users.",
        ],
      },
      {
        title: "Senior Software Developer",
        companyName: "Mindtree Ltd",
        companyLink: "https://www.ltimindtree.com/",
        location: "Bangalore, IN",
        duration: "2018 - 2021",
        responsibilities: [
          "Delivered an innovative module for seamless SSL RDP connections, boosting remote connectivity efficiency by 40%.",
          "Resulted in a 30% boost in user engagement and a 25% increase in client satisfaction with well-executed UI/UX designs.",
          "Managed Red Hat Linux environments, applying Bash scripting to automate system processes and improve task efficiency.",
          "Developed and implemented complex business logic utilizing Java 8 features across multiple monitoring platforms.",
          "Optimized data pipelines with Kafka to efficiently handle and validate events triggered across multiple monitoring platforms.",
        ],
      },
    ],
  } as ExperienceSection,
} as const;
