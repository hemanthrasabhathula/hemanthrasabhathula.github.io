import ProgressBar from "../components/ProgressBar";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";

export default function Skills({ className }: ClassNameProps) {
  const title = "Skills";
  const skillsDescription =
    "As an accomplished developer, I possess a profound expertise in a wide array of programming languages, including Java, Kotlin, Python and JavaScript. My proficiency extends to cutting-edge web development technologies, encompassing Angular, React, and HTML&CSS. Furthermore, I have a substantial background in database management and a comprehensive grasp of SQL.";

  const skills = [
    { tech: "JAVA", progress: 85 },
    { tech: "KOTLIN", progress: 75 },
    { tech: "PYTHON", progress: 80 },
    { tech: "JAVASCRIPT", progress: 90 },
    { tech: "REACT", progress: 90 },
    { tech: "SQL", progress: 70 },
  ];

  // Split skills into two columns
  const column1 = skills.slice(0, Math.ceil(skills.length / 2));
  const column2 = skills.slice(Math.ceil(skills.length / 2));

  return (
    <>
      <section
        className={cn("flex flex-col justify-center p-4 py-12", className)}
        id="skills"
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
}
