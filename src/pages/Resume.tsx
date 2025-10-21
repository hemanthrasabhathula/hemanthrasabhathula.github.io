import { useDispatch, useSelector } from "react-redux";
import {
  SECTION,
  SECTION_ID,
  PROFILE,
  RESUME_SECTION_TITLES,
  UNIVERSITY,
} from "../lib/constants";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { setActiveSection } from "../lib/navSlice";
import { RootState } from "../lib/store";

const Resume = React.memo(({ className }: ClassNameProps) => {
  const resumeConfig = useSelector(
    (state: RootState) => state.portfolio.config?.sections.resume
  );

  // Fallback resume data in case the dynamic data is not available
  const fallbackResume = {
    title: SECTION.RESUME,
    description:
      "As a highly skilled and experienced software engineer, I am well-versed in a variety of development methodologies and always seeking new opportunities to learn and grow. With my ability to think strategically and communicate effectively, I am confident in my capacity to make a valuable contribution to any organization.",
  };

  const data = resumeConfig?.data || fallbackResume;
  const title = data.title || SECTION.RESUME;
  const resumeDescription = data.description || "";

  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      // console.log("Resume section is in view");
      dispatch(setActiveSection(SECTION_ID.RESUME));
    }
  }, [inView, dispatch]);

  return (
    <>
      <section
        className={cn("flex flex-col justify-center p-4 py-12", className)}
        id={SECTION_ID.RESUME}
        ref={ref}
      >
        {/* RESUME HEADLINE */}
        <div className="relative mb-5 pb-5">
          <h2 className="text-3xl font-bold text-section-title-h2 font-[Raleway]">
            {title}
          </h2>
          <div className="absolute w-12 h-[3px] bg-highlight-blue bottom-0 left-0"></div>
        </div>
        <p className="text-[1rem]">{resumeDescription}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="flex flex-col gap-6" data-aos="fade-up">
            {/*  SUMMARY SECTION */}
            <SummarySection />

            {/*  EDUCATION SECTION */}
            <EducationSection className="hidden md:block" />

            {/* PROJECTS */}
            <ProjectsSection className="hidden md:block" />
          </div>

          <div className="flex flex-col gap-6" data-aos="fade-up">
            {/* PROFESSIONAL EXPERIENCE */}
            <ProfessionalExperienceSection />
          </div>

          {/* SHOW IN MOBILE VIEW */}
          <div className="flex flex-col gap-6 md:hidden" data-aos="fade-up">
            {/*  EDUCATION SECTION */}
            <EducationSection className="md:hidden" />
            {/* PROJECTS */}
            <ProjectsSection className="md:hidden" />
          </div>
        </div>
      </section>
    </>
  );
});
export default Resume;

const SummarySection = () => {
  const summaryConfig = useSelector(
    (state: RootState) => state.portfolio.config?.sections.summary
  );

  // Only return null if the section is explicitly disabled (enabled: false)
  // If summaryConfig is undefined, we should show fallback data
  if (summaryConfig && !summaryConfig.enabled) {
    return null; // Do not render the section if it's explicitly disabled
  }
  // Fallback summary data in case the dynamic data is not available
  const fallbackSummary = {
    title: RESUME_SECTION_TITLES.SUMMARY,
    name: PROFILE.NAME,
    description:
      "Deadline-driven and innovative software developer with experience in designing and developing user-centered software solutions from initial concept to the polished end product.",
    items: [PROFILE.LOCATION, PROFILE.EMAIL],
  };

  const data = summaryConfig?.data || fallbackSummary;
  const title = data.title || RESUME_SECTION_TITLES.SUMMARY;
  const name = data.name || PROFILE.NAME;
  const summaryDescription = data.description || "";
  const summaryItems = data.items || [PROFILE.LOCATION, PROFILE.EMAIL];

  return (
    <>
      <div className="Summary">
        <h3 className="text-2xl text-resume-heading-h3 pb-4 font-bold font-[Raleway]">
          {title}
        </h3>

        <div className="border-l-[2px] border-resume-line-border pl-4 relative m-0 p-0">
          <div className="absolute w-[16px] h-[16px] rounded-full -left-[9px] top-0 bg-section-secondary border-resume-line-border border-[2px]"></div>
          <h4 className="text-lg text-resume-heading-h3 pb-4 font-[600] m-0 leading-4 uppercase font-[poppins]">
            {name}
          </h4>
          <p>
            <em>{summaryDescription}</em>
          </p>
          <ul className="text-[1rem] list-disc pl-5 pt-4">
            {summaryItems.map((item, index) => (
              <li key={index} className="pb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const EducationSection = ({ className }: ClassNameProps) => {
  const educationConfig = useSelector(
    (state: RootState) => state.portfolio.config?.sections.education
  );

  // Only return null if the section is explicitly disabled (enabled: false)
  // If educationConfig is undefined, we should show fallback data
  if (educationConfig && !educationConfig.enabled) {
    return null; // Do not render the section if it's explicitly disabled
  }

  // Fallback education data in case the dynamic data is not available
  const fallbackEducation = {
    title: RESUME_SECTION_TITLES.EDUCATION,
    degree: "MSc in Computer Science",
    duration: "2024 - 2025",
    university: `${UNIVERSITY.SHORT_NAME} - ${UNIVERSITY.LOCATION}`,
    description:
      "I am currently pursuing my Master of Science degree in Computer Science at the University of Central Missouri, where I focus on the fields of Artificial Intelligence and Machine Learning.",
  };

  const data = educationConfig?.data || fallbackEducation;
  const title = data.title || RESUME_SECTION_TITLES.EDUCATION;
  const degree = data.degree || "";
  const duration = data.duration || "";
  const university = data.university || "";
  const description = data.description || "";

  return (
    <>
      <div className={cn("Education", className)}>
        <h3 className="text-2xl text-resume-heading-h3 pb-4 font-bold font-[Raleway]">
          {title}
        </h3>
        <div className="border-l-[2px] border-resume-line-border pl-4 relative m-0 p-0">
          <div className="absolute w-[16px] h-[16px] rounded-full -left-[9px] top-0 bg-white border-resume-line-border border-[2px]"></div>
          <h4 className="inline-flex items-center text-lg text-resume-heading-h3 pb-1 font-[600] m-0 uppercase font-[poppins] gap-2 relative -top-2">
            {degree}
            <lord-icon
              src="https://cdn.lordicon.com/kjtalhau.json"
              trigger="loop"
              delay="3000"
              stroke="light"
            />
          </h4>
          <h5 className="text-[1rem] px-3 py-1 bg-resume-date-item w-fit rounded-[5px] text-section-title-h2 font-[600] font-[Raleway]">
            {duration}
          </h5>
          <p className="text-[1rem] text-section-title-h2 pb-4 pt-2">
            <em>{university}</em>
          </p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

const ProjectsSection = ({ className }: ClassNameProps) => {
  const projectsConfig = useSelector(
    (state: RootState) => state.portfolio.config?.sections.projects
  );

  // Only return null if the section is explicitly disabled (enabled: false)
  // If projectsConfig is undefined, we should show fallback data
  if (projectsConfig && !projectsConfig.enabled) {
    return null; // Do not render the section if it's explicitly disabled
  }

  // Fallback projects section data in case the dynamic data is not available
  const fallbackProjectsSection = {
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
  };

  const data = projectsConfig?.data || fallbackProjectsSection;
  const title = data.title || RESUME_SECTION_TITLES.PROJECTS;
  const projects = data.projects || [];

  return (
    <>
      <div className={cn("Projects", className)}>
        <h3 className="inline-flex items-center gap-2 text-2xl text-resume-heading-h3 pb-4 font-bold font-[Raleway]">
          {title}
          <lord-icon
            src="https://cdn.lordicon.com/yqmzxvos.json"
            trigger="loop"
            delay="3000"
            stroke="bold"
            colors="primary:#050d18,secondary:#4bb3fd,tertiary:#ebe6ef"
          />
        </h3>

        <div className="border-l-[2px] border-resume-line-border pl-4 relative m-0 p-0">
          <div className="absolute w-[16px] h-[16px] rounded-full -left-[9px] top-0 bg-section-primary border-resume-line-border border-[2px]"></div>
          <ul className="flex flex-col text-[1rem] list-disc pl-5 gap-4">
            {projects.map((project, index) => (
              <div key={index}>
                <li className="pb-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight-blue hover:text-highlight-blue-hover hover:underline"
                  >
                    <h6 className="font-[raleway] font-medium">
                      {project.name}
                    </h6>
                  </a>
                  <div className="text-[0.8rem] font-normal">
                    ({project.tools})
                  </div>
                </li>
                <span>
                  <em>{project.description}</em>
                </span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const ProfessionalExperienceSection = () => {
  const experienceConfig = useSelector(
    (state: RootState) => state.portfolio.config?.sections.experience
  );

  // Only return null if the section is explicitly disabled (enabled: false)
  // If experienceConfig is undefined, we should show fallback data
  if (experienceConfig && !experienceConfig.enabled) {
    return null; // Do not render the section if it's explicitly disabled
  }

  // Fallback experience section data in case the dynamic data is not available
  const fallbackExperienceSection = {
    title: RESUME_SECTION_TITLES.PROFESSIONAL_EXPERIENCE,
    experiences: [
      {
        title: "Senior Software Developer",
        companyName: "Optum",
        companyLink: "https://www.optum.com",
        location: "Minnesota, US (Remote)",
        duration: "2022 - Present",
        responsibilities: [
          "Architected and established a GraphQL API solution for the legacy application to enhance system performance and efficiency by 20%.",
          "Leveraged Next.js Image Optimization, Lighthouse audits, and React Profiler to improve load time, Core Web Vitals, and overall frontend performance.",
          "Spearheaded optimization efforts in REDIS cache management and PostgreSQL data management, resulting in a notable 30% reduction in API latency.",
          "Pioneered the externalization of micro-apps APIs with KONG API Gateway, effectively integrating OAuth2Authorization; achieved secure access for over 50 endpoints, significantly improving system reliability and user trust.",
          "Led initiatives to revamp the UI/UX of the About/Contact Us sections, resulting in 25% boost in user interaction, amplifying overall better user experience.",
          "Implemented cross-domain cache management for URL redirection in the frontend, ensuring seamless webpage transitions for authenticated users.",
        ],
      },
      {
        title: "Full Stack Developer",
        companyName: "Siemens",
        companyLink: "https://www.siemens.com",
        location: "Hyderabad, IN (Remote)",
        duration: "2019 - 2022",
        responsibilities: [
          "Implemented virtualization (React Virtualized, React Window) to enhance the performance of large lists and tables.",
          "Integrated Framer Motion for smooth animations and enhanced user interactions. Used React.memo, useMemo, and useCallback to optimize component performance and prevent unnecessary computations.",
          "Implemented form validations using libraries like React Hook Form and Yup, enhancing user input integrity and error handling.",
          "Utilized React-Router to convert applications into single-page applications (SPAs), enhancing user experience.",
          "Integrated Firebase Auth and Firestore for real-time data sync in a serverless web app built with React and Node.js",
        ],
      },
      {
        title: "Software Engineer",
        companyName: "Mindtree",
        companyLink: "https://www.ltimindtree.com/",
        location: "Bangalore, IN",
        duration: "2016 - 2019",
        responsibilities: [
          "Integrated third-party libraries such as ngx-bootstrap, Angular Material, and PrimeNG to enrich UI components and speed up development.",
          "Developed and implemented complex business logic utilizing Java 8 features, such as Streams and Lambda expressions, across multiple monitoring platforms.",
          "Managed Red Hat Linux environments, applying Bash scripting to automate system processes and improve task efficiency, achieving a 60% increase in operational efficiency.",
        ],
      },
    ],
  };

  const data = experienceConfig?.data || fallbackExperienceSection;
  const title = data.title || RESUME_SECTION_TITLES.PROFESSIONAL_EXPERIENCE;
  const experiences = data.experiences || [];

  // Icon mapping based on job index
  const getCompanyIcon = (index: number) => {
    if (index === 0) {
      // First job gets the special Optum icon
      return (
        <lord-icon
          src="https://cdn.lordicon.com/szoiozyr.json"
          trigger="loop"
          stroke="bold"
          delay="3000"
          colors="primary:#121331,secondary:#4bb3fd,tertiary:#f9c9c0,quaternary:#ad6836,quinary:#4faef9"
        />
      );
    } else {
      // All other jobs get the default icon
      return (
        <lord-icon
          src="https://cdn.lordicon.com/mebvgwrs.json"
          trigger="loop"
          delay="3000"
          stroke="bold"
        />
      );
    }
  };

  return (
    <>
      <div className="Professional-Experience">
        <h3 className="text-2xl text-resume-heading-h3 pb-4 font-bold font-[Raleway]">
          {title}
        </h3>
        <div className="flex flex-col border-l-[2px] border-resume-line-border pl-4 m-0 p-0 gap-6">
          {experiences.map((job, index) => (
            <div
              key={index}
              className={`${job.companyName}-experience relative`}
            >
              <div className="absolute w-[16px] h-[16px] rounded-full -left-[24.5px] top-0 bg-section-secondary border-resume-line-border border-[2px]"></div>
              <h4 className="inline-flex items-center gap-2 text-lg text-resume-heading-h3 pb-1 font-[600] m-0 uppercase font-[poppins] relative -top-2">
                {job.title}
                {getCompanyIcon(index)}
              </h4>
              <h5 className="text-[1rem] px-3 py-1 bg-resume-date-item w-fit rounded-[5px] text-section-title-h2 font-[600] font-[Raleway]">
                {job.duration}
              </h5>
              <p
                className="text-[1rem] text-section-title-h2 pb-3 pt-2 cursor-pointer hover:underline"
                onClick={() => window.open(job.companyLink, "_blank")}
              >
                <em>
                  {job.companyName} - {job.location}
                </em>
              </p>
              <ul className="text-[1rem] list-disc pl-5">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="pb-2">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
