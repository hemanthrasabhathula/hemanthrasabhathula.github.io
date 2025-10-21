import { useCallback, useEffect, useState } from "react";

import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import HomeContainer from "./components/sections/Home";
import Resume from "./components/sections/Resume";
import Skills from "./components/sections/Skills";
import { useDispatch } from "react-redux";

import { fetchPortfolioConfig } from "./store/slices/portfolioSlice";
import { AppDispatch } from "./store/store";
import NavBar from "./components/layout/NavBar";

export interface NavBarProps {
  isOpen: boolean;
}

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  // Fetch portfolio config on app load
  useEffect(() => {
    dispatch(fetchPortfolioConfig());
  }, [dispatch]);

  const toggleNavBar = useCallback(() => {
    setIsNavBarOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <NavBar
        className={`${isNavBarOpen ? "left-0" : "-left-96"} md:left-0 md:w-72`}
        toggleNavBar={toggleNavBar}
      />

      {/* Overlay for navbar open */}

      <div
        className={`fixed inset-0 bg-black z-49 md:hidden transition-opacity duration-300 ease-in-out ${
          isNavBarOpen ? "opacity-10 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleNavBar}
      ></div>

      {/* Main Content */}
      <div className="md:ml-72 flex flex-col w-full transition-all duration-300 ease-in-out">
        {/* Background Image */}
        <div className="fixed h-svh inset-0 -z-10 bg-gray-100 bg-[url('/src/assets/background-img.jpg')] bg-cover bg-top bg-no-repeat"></div>

        {/* Overlay */}
        <div className="fixed h-svh inset-0 -z-10 bg-[rgba(5,13,24,0.3)]"></div>

        {/* Main Content */}
        <div className="flex flex-col w-full">
          <HomeContainer
            toggleNavBar={toggleNavBar}
            isNavBarOpen={isNavBarOpen}
          />
          <About className="bg-section-primary rounded-t-[24px] md:rounded-t-[16px]" />
          <Skills className="bg-section-secondary" />
          <Resume className="bg-section-primary" />
          <Contact className="bg-section-secondary" />
        </div>
      </div>
    </div>
  );
}

export default App;
