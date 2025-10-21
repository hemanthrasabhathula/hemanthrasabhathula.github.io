import { SECTION, SECTION_ID, SOCIAL, PROFILE } from "../constants/constants";
import profileImg from "../../assets/profile-image-about.jpg";

export const useAboutData = () => {
  const title = SECTION.ABOUT;
  const role = "Software Developer";
  const description =
    "I am a highly motivated and detail-oriented individual with a passion for technology. I have a strong background in computer science and have been working as a software developer. In my free time, I enjoy reading about cutting-edge technologies, experimenting with new programming languages and building personal projects.";

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

  const profileImage = {
    src: profileImg,
    alt: "Profile",
  };

  return {
    title,
    role,
    description,
    personalInfo,
    goalDescription,
    profileImage,
    sectionId: SECTION_ID.ABOUT,
  };
};
