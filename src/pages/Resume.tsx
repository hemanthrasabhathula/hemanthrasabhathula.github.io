import { EMAIL, LOCATION, RESUME_ID } from "../lib/constants";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";
import React from "react";

const Resume = React.memo(({ className }: ClassNameProps) => {
  const title = "Resume";
  const resumeDescription =
    "As a highly skilled and experienced software engineer with over 6 years of experience in the field, I am well-versed in a variety of development methodologies, I am always looking for new opportunities to learn and grow. With my ability to think strategically and communicate effectively, I am confident in my ability to make a valuable contribution to any organization.";

  return (
    <>
      <section
        className={cn("flex flex-col justify-center p-4 py-12", className)}
        id={RESUME_ID}
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
  const title = "Summary";
  const name = "Hemanth Rasabhathula";
  const summaryDescription =
    "Deadline-driven and innovative software developer with experience in designing and developing user-centered software solutions from initial concept to the polished end product.";
  const summaryItems = [LOCATION, EMAIL];

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
  const title = "Education";
  const degree = "MSc in Computer Science";
  const duration = "2024 - 2025";
  const university = "UCM - Missouri, US";
  const description =
    "I am currently pursuing my Master of Science degree in Computer Science at the University of Central Missouri, where I focus on the fields of Artificial Intelligence and Machine Learning.";

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
  const title = "Projects";

  const projects = [
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
  ];

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
  const title = "Professional Experience";

  const jobs = [
    {
      title: "Full-Stack Engineer (Intern)",
      companyName: "Blockhouse Labs",
      companyLink: "https://blockhouse.app/",
      location: "NYC, US",
      duration: "Sep 2024 - Dec 2024",
      responsibilities: [
        "Built and maintained full-stack web applications using Next.js, Prisma, TypeScript, and Django, delivering over 25 key features while ensuring pixel-perfect translation of designs from Figma.",
        "Refined application performance by implementing efficient API calls, caching strategies, and PostgreSQL query optimization, improving response time by 30%.",
        "Established a Cypress end-to-end testing suite for core functionalities, achieving 95% test coverage and ensuring robust application quality and reliability. ",
        "Set up an automated CI/CD pipeline with GitHub Actions to run Cypress tests on Pull Requests, reducing manual testing effort by 40%.",
        "Participated in Agile methodologies, using PostHog for application monitoring and optimizations that enhanced user experience by 20%.",
      ],
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/mebvgwrs.json"
          trigger="loop"
          delay="3000"
          stroke="bold"
        />
      ),
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
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/szoiozyr.json"
          trigger="loop"
          stroke="bold"
          delay="3000"
          colors="primary:#121331,secondary:#4bb3fd,tertiary:#f9c9c0,quaternary:#ad6836,quinary:#4faef9"
        />
      ),
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
      icon: (
        <lord-icon
          src="https://cdn.lordicon.com/mebvgwrs.json"
          trigger="loop"
          delay="3000"
          stroke="bold"
        />
      ),
    },
  ];

  return (
    <>
      <div className="Professional-Experience">
        <h3 className="text-2xl text-resume-heading-h3 pb-4 font-bold font-[Raleway]">
          {title}
        </h3>
        <div className="flex flex-col border-l-[2px] border-resume-line-border pl-4 m-0 p-0 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`${job.companyName}-experience relative`}
            >
              <div className="absolute w-[16px] h-[16px] rounded-full -left-[24.5px] top-0 bg-section-secondary border-resume-line-border border-[2px]"></div>
              <h4 className="inline-flex items-center gap-2 text-lg text-resume-heading-h3 pb-1 font-[600] m-0 uppercase font-[poppins] relative -top-2">
                {job.title}
                {job.icon}
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
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="pb-2">
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
