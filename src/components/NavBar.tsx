import { File, Home, Mail, UserRound } from "lucide-react";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import { FaChartSimple, FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import profileImg from "../assets/profile-image-cropped.jpg";
import {
  ABOUT,
  CONTACT,
  GITHUB_URL,
  HOME,
  HOME_ID,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  RESUME,
  SKILLS,
  TWITTER_URL,
} from "../lib/constants";

interface NavBarProps extends ClassNameProps {
  toggleNavBar: () => void;
}

export default function NavBar({ className, toggleNavBar }: NavBarProps) {
  const name = "Hemanth Rasabhathula";
  const socialIcons = [
    { icon: <LuGithub />, link: GITHUB_URL },
    {
      icon: <LuLinkedin />,
      link: LINKEDIN_URL,
    },
    {
      icon: <LuInstagram />,
      link: INSTAGRAM_URL,
    },
    { icon: <FaXTwitter />, link: TWITTER_URL },
  ];

  const navItems = [
    { name: HOME, icon: <Home className="size-5" /> },
    { name: ABOUT, icon: <UserRound className="size-5" /> },
    { name: SKILLS, icon: <FaChartSimple className="size-5" /> },
    { name: RESUME, icon: <File className="size-5" /> },
    { name: CONTACT, icon: <Mail className="size-5" /> },
  ];

  const [activeSection, setActiveSection] = useState<string>(HOME_ID);

  const isActive = (section: string) => {
    return activeSection === section ? "text-cyan-500" : "text-white";
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") || HOME_ID;
        }
      });

      // Update state only if the section has changed
      setActiveSection((prevSection) => {
        if (prevSection !== currentSection) {
          return currentSection;
        }
        return prevSection;
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <nav className="flex flex-col space-y-10 md:space-y-6  items-start p-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.name.toLowerCase()}`}
              onClick={toggleNavBar}
              className={cn(
                "text-white text-lg hover:text-cyan-500 flex gap-2 justify-center items-center transition-colors duration-100 ease-in-out",
                isActive(item.name.toLowerCase())
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
}
