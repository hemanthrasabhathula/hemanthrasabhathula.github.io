import { ArrowUp } from "lucide-react";
import Name from "../components/Name";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";
import { SECTION_ID } from "../lib/constants";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setActiveSection } from "../lib/navSlice";
import { HamburgerButton } from "../components/hamburgerButton";

interface HomeContainerProps extends ClassNameProps {
  toggleNavBar: () => void;
  isNavBarOpen: boolean;
}

const HomeContainer = React.memo(
  ({ className, isNavBarOpen, toggleNavBar }: HomeContainerProps) => {
    const [showIcon, setShowIcon] = useState(false); // State to track icon visibility

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowIcon(true); // Show the icon when scrolled down
        } else {
          setShowIcon(false); // Hide the icon when at the top
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const dispatch = useDispatch();
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
      if (inView) {
        dispatch(setActiveSection(SECTION_ID.HOME));
      }
    }, [inView, dispatch]);

    return (
      <>
        <section
          className={cn(
            "h-svh flex flex-col items-center justify-center p-4 relative",
            className
          )}
          id={SECTION_ID.HOME}
          ref={ref}
        >
          {/* Toggle Button */}
          {/* <div
            className={cn(
              "fixed top-4 right-4 md:hidden z-50 bg-highlight-blue rounded-full p-2 cursor-pointer transition-all duration-500 ease-in-out opacity-90",
              isNavBarOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
            )}
            onClick={toggleNavBar}
          >
            {isNavBarOpen ? (
              <X className="text-white size-6" />
            ) : (
              <Menu className="text-white size-6" />
            )}
          </div> */}
          {/* Hamburger Button */}
          <div className="fixed top-4 right-4 md:hidden z-50 bg-highlight-blue rounded-full p-2 cursor-pointer transition-all duration-500 ease-in-out opacity-90">
            <HamburgerButton
              open={isNavBarOpen}
              onClick={toggleNavBar}
              className="w-6 h-6"
            />
          </div>
          <Name className="absolute bottom-50 left-10 md:bottom-40 md:left-30" />

          {/* Scroll-based Icon */}
          <div
            className={cn(
              "fixed bottom-4 right-4 z-50 bg-highlight-blue rounded-full p-2 cursor-pointer transition-opacity duration-500 ease-in-out ",
              showIcon
                ? "opacity-80 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="text-white size-6" />
          </div>
        </section>
      </>
    );
  }
);

export default HomeContainer;
