import { ChevronRight } from "lucide-react";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";
import profileImg from "../assets/profile-image-about.jpg";
import { SECTION, SECTION_ID, SOCIAL, PROFILE } from "../lib/constants";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setActiveSection } from "../lib/navSlice";

const About = React.memo(({ className }: ClassNameProps) => {
  const title = SECTION.ABOUT;
  const role = "Software Developer";
  const description =
    "I am a highly motivated and detail-oriented individual with a passion for technology. I have a strong background in computer science and have been working as a software developer. In my free time, I enjoy reading about cutting-edge technologies, experimenting with new programming languages and building personal projects.";

  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      dispatch(setActiveSection(SECTION_ID.ABOUT));
    }
  }, [inView, dispatch]);

  const personalInfo = [
    {
      label: "Website",
      value: PROFILE.WEBSITE,
      link: PROFILE.WEBSITE ? `https://${PROFILE.WEBSITE}` : "#",
    },
    { label: "Education", value: "MSc in Computer Science" },
    { label: "City", value: PROFILE.LOCATION },
    { label: "Email", value: PROFILE.EMAIL },
    {
      label: "Linkedin",
      value: "in/hemanth-rasabhathula",
      link: SOCIAL.LINKEDIN,
    },
  ];

  const goalDescription =
    "I am always looking for new challenges and opportunities to learn and grow in my field. I am a team player and enjoy working with others to achieve a common goal. I am also a problem solver and enjoy finding creative solutions to complex issues.";

  return (
    <>
      <section
        className={cn(
          "overflow-hidden flex flex-col justify-center p-4 py-12 w-full",
          className
        )}
        id={SECTION_ID.ABOUT}
        ref={ref}
      >
        <div className="pb-8">
          <div className="relative mb-5 pb-5">
            <h2 className="font-[Raleway] font-bold text-3xl  text-section-title-h2">
              {title}
            </h2>
            <div className="absolute w-12 h-[3px] bg-section-underline bottom-0 left-0"></div>
          </div>
          <p>
            <em>{description}</em>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 md:p-2">
          <div
            className="w-full md:w-1/3 flex justify-center items-center p-4 self-start"
            data-aos="fade-right"
          >
            <img
              src={profileImg}
              className="object-cover rounded-[3%]"
              alt="Profile"
              loading="lazy"
            />
          </div>
          <div
            className="w-full md:w-2/3 flex flex-col justify-center items-start py-6"
            data-aos="fade-left"
          >
            <h3 className="inline-flex font-[raleway] text-2xl text-section-title-h2 pb-6 font-bold">
              {role}
              <lord-icon
                src="https://cdn.lordicon.com/wxwbdnuw.json"
                trigger="loop"
                delay="2000"
                stroke="bold"
                colors="primary:#173b6c,secondary:#cb5eee"
              />
            </h3>
            <div>
              <ul className="list-none">
                {personalInfo.map((info, index) => (
                  <li key={index} className="pb-5">
                    <span className="flex items-center">
                      <ChevronRight className="inline text-highlight-blue size-5 p-0 m-0" />
                      <strong className="pr-2">{info.label}: </strong>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[1rem]">{goalDescription}</p>
          </div>
        </div>
      </section>
    </>
  );
});
export default About;
