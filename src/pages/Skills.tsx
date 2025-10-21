import React, { useEffect } from "react";
import ProgressBar from "../components/ProgressBar";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setActiveSection } from "../store/slices/navSlice";
import { useSkillsData } from "../lib/hooks/useSkillsData";

const Skills = React.memo(({ className }: ClassNameProps) => {
  const { title, skillsDescription, skills, sectionId } = useSkillsData();
  // Split skills into two columns
  const column1 = skills.slice(0, Math.ceil(skills.length / 2));
  const column2 = skills.slice(Math.ceil(skills.length / 2));

  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      dispatch(setActiveSection(sectionId));
    }
  }, [inView, dispatch]);

  return (
    <>
      <section
        className={cn("flex flex-col justify-center p-4 py-12", className)}
        id={sectionId}
        ref={ref}
      >
        <div className="pb-8">
          <div className="relative mb-5 pb-5">
            <h2 className="text-3xl font-bold text-section-title-h2 font-[Raleway] ">
              {title}
            </h2>
            <div className="absolute w-12 h-[3px] bg-highlight-blue bottom-0 left-0"></div>
          </div>
          <p className="text-[1rem]">{skillsDescription}</p>
          <div className="font-[poppins] grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6" data-aos="fade-up">
              {column1.map((skill, index) => (
                <ProgressBar
                  key={index}
                  skill={skill.tech}
                  progress={skill.progress}
                />
              ))}
            </div>
            {/* Column 2 */}
            <div
              className="flex flex-col gap-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {column2.map((skill, index) => (
                <ProgressBar
                  key={index}
                  skill={skill.tech}
                  progress={skill.progress}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
export default Skills;
