import { useDispatch } from "react-redux";
import { SECTION_ID } from "../../lib/constants/constants";
import { ClassNameProps } from "../../lib/types";
import { cn } from "../../lib/utils";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { setActiveSection } from "../../store/slices/navSlice";
import {
  useResumeData,
  useSummaryData,
  useEducationData,
  useProjectsData,
  useExperienceData,
} from "../../lib/hooks/useResumeData";

const Resume = React.memo(({ className }: ClassNameProps) => {
  const { title, description } = useResumeData();
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
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
        <p className="text-[1rem]">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6" data-aos="fade-up">
            <SummarySection />
            <EducationSection className="hidden md:block" />
            <ProjectsSection className="hidden md:block" />
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6" data-aos="fade-up">
            <ProfessionalExperienceSection />
          </div>

          {/* SHOW IN MOBILE VIEW */}
          <div className="flex flex-col gap-6 md:hidden" data-aos="fade-up">
            <EducationSection className="md:hidden" />
            <ProjectsSection className="md:hidden" />
          </div>
        </div>
      </section>
    </>
  );
});

const SummarySection = () => {
  const { isDisabled, title, name, description, items } = useSummaryData();

  if (isDisabled) {
    return null;
  }

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
            <em>{description}</em>
          </p>
          <ul className="text-[1rem] list-disc pl-5 pt-4">
            {items.map((item, index) => (
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
  const { isDisabled, title, degree, duration, university, description } =
    useEducationData();

  if (isDisabled) {
    return null;
  }

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
  const { isDisabled, title, projects } = useProjectsData();

  if (isDisabled) {
    return null;
  }

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
  const { isDisabled, title, experiences } = useExperienceData();

  if (isDisabled) {
    return null;
  }

  // Icon mapping based on job index
  const getCompanyIcon = (index: number) => {
    if (index === 0) {
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

export default Resume;
