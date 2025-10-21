import { File, Home, Mail, UserRound } from "lucide-react";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import { FaChartSimple, FaXTwitter } from "react-icons/fa6";
import React from "react";
import profileImg from "../assets/profile-image-cropped.jpg";
import {
  PROFILE,
  SECTION,
  SECTION_ID,
  SOCIAL,
} from "../lib/constants/constants";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface NavBarProps extends ClassNameProps {
  toggleNavBar: () => void;
}

const NavBar = React.memo(({ className, toggleNavBar }: NavBarProps) => {
  const name = PROFILE.NAME;
  const socialIcons = [
    { icon: <LuGithub />, link: SOCIAL.GITHUB },
    {
      icon: <LuLinkedin />,
      link: SOCIAL.LINKEDIN,
    },
    {
      icon: <LuInstagram />,
      link: SOCIAL.INSTAGRAM,
    },
    { icon: <FaXTwitter />, link: SOCIAL.TWITTER },
  ];

  const navItems = [
    {
      name: SECTION.HOME,
      id: SECTION_ID.HOME,
      icon: <Home className="size-5" />,
    },
    {
      name: SECTION.ABOUT,
      id: SECTION_ID.ABOUT,
      icon: <UserRound className="size-5" />,
    },
    {
      name: SECTION.SKILLS,
      id: SECTION_ID.SKILLS,
      icon: <FaChartSimple className="size-5" />,
    },
    {
      name: SECTION.RESUME,
      id: SECTION_ID.RESUME,
      icon: <File className="size-5" />,
    },
    {
      name: SECTION.CONTACT,
      id: SECTION_ID.CONTACT,
      icon: <Mail className="size-5" />,
    },
  ];

  //const [activeSection, setActiveSection] = useState<string>(HOME_ID);

  const activeSection = useSelector(
    (state: RootState) => state.nav.activeSection
  );

  // console.log("Active Section from Redux:", activeSection);
  const isActive = (section: string) => {
    // console.log("Active Section:", activeSection, "Current Section:", section);
    return activeSection === section ? "text-cyan-500" : "text-white";
  };

  return (
    <>
      <header
        className={cn(
          `fixed top-0 h-screen bg-nav-bar-bg z-50 flex flex-col items-center py-10 px-4 space-y-6 transition-all duration-400 ease-in-out font-[poppins] rounded-r-[8px]`,
          className
        )}
      >
        <div className="flex flex-col items-center justify-center mb-8 space-y-3 ">
          <img
            src={profileImg}
            alt="Logo"
            className="w-30 h-30 rounded-full border-8 border-profile-outline"
            loading="lazy"
          />
          <h1 className="text-[22px] font-[600] text-white text-center">
            <a href="/">{name}</a>
          </h1>

          {/* Social Icons */}
          <div className="flex flex-row space-x-3">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center text-white bg-social-icons-bg w-10 h-10 rounded-[50%]
               hover:bg-social-icons-bg-hover transition duration-300 ease-in-out"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* NAV ITEMS */}
        <nav className="flex flex-col space-y-10 md:space-y-6 items-start p-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={toggleNavBar}
              className={cn(
                "text-white text-lg hover:text-cyan-500 flex gap-2 justify-center items-center transition-colors duration-100 ease-in-out",
                isActive(item.id)
              )}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
});

export default NavBar;
