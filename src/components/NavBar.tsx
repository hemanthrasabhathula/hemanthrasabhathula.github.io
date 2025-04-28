import { File, Home, Mail, UserRound } from "lucide-react";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
import { FaChartSimple } from "react-icons/fa6";
import { useEffect, useState } from "react";
import profileImg from "../assets/profile-image-cropped.jpg";

interface NavBarProps extends ClassNameProps {
  toggleNavBar: () => void;
}

export default function NavBar({ className, toggleNavBar }: NavBarProps) {
  const [activeSection, setActiveSection] = useState<string>("home");

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
          currentSection = section.getAttribute("id") || "home";
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
          `fixed top-0 h-screen bg-nav-bar-bg z-50 flex flex-col items-center py-10 px-4 space-y-6 transition-all duration-500 ease-in-out font-[poppins] rounded-r-[8px]`,
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
            <a href="">Hemanth Rasabhathula</a>
          </h1>
          <div className="flex flex-row space-x-3">
            <a
              href="https://github.com/hemanthrasabhathula"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-white bg-social-icons-bg w-8 h-8 rounded-[50%]
              hover:bg-social-icons-bg-hover transition duration-300 ease-in-out"
            >
              <LuGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-rasabhathula"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-white bg-social-icons-bg w-8 h-8 rounded-[50%]
               hover:bg-social-icons-bg-hover transition duration-300 ease-in-out
              "
            >
              <LuLinkedin />
            </a>
            <a
              href="https://twitter.com/_HemanthR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-white bg-social-icons-bg w-8 h-8 rounded-[50%]
               hover:bg-social-icons-bg-hover transition duration-300 ease-in-out
              "
            >
              <LuTwitter />
            </a>
            <a
              href="https://www.instagram.com/hemanth.rasabhathula"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-white bg-social-icons-bg w-8 h-8 rounded-[50%]
               hover:bg-social-icons-bg-hover transition duration-300 ease-in-out
              "
            >
              <LuInstagram />
            </a>
          </div>
        </div>

        <nav className="flex flex-col space-y-10 md:space-y-6  items-start p-4">
          <a
            href="#home"
            onClick={toggleNavBar}
            className={cn(
              "text-white text-lg hover:text-cyan-500 flex gap-2 justify-center items-center transition-colors duration-100 ease-in-out",
              isActive("home")
            )}
          >
            <Home className="size-5" />
            Home
          </a>
          <a
            href="#about"
            onClick={toggleNavBar}
            className={cn(
              "text-white text-lg hover:text-cyan-500 flex gap-2 justify-center items-center transition-colors duration-100 ease-in-out",
              isActive("about")
            )}
          >
            <UserRound className="size-5" />
            About
          </a>
          <a
            href="#skills"
            onClick={toggleNavBar}
            className={cn(
              "text-white text-lg hover:text-cyan-500 flex gap-2 justify-center items-center transition-colors duration-100 ease-in-out",
              isActive("skills")
            )}
          >
            <FaChartSimple className="size-5" />
            Skills
          </a>
          <a
            href="#resume"
            onClick={toggleNavBar}
            className={cn(
              "text-white text-lg hover:text-cyan-500 flex gap-2 justify-center items-center transition-colors duration-100 ease-in-out",
              isActive("resume")
            )}
          >
            <File className="size-5" />
            Resume
          </a>
          <a
            href="#contact"
            onClick={toggleNavBar}
            className={cn(
              "text-white text-lg hover:text-cyan-500 flex gap-2 justify-center items-center transition-colors duration-100 ease-in-out",
              isActive("contact")
            )}
          >
            <Mail className="size-5" />
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}
