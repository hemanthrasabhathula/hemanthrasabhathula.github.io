import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomeContainer from "./pages/HomeContainer";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";

export interface NavBarProps {
  isOpen: boolean;
}

function App() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setIsNavBarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <NavBar
        className={`${isNavBarOpen ? "left-0" : "-left-96"} md:left-0 md:w-72`}
        toggleNavBar={toggleNavBar}
      />
      {isNavBarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-10 z-49 md:hidden"
          onClick={toggleNavBar}
        ></div>
      )}
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
          <About className="bg-section-primary rounded-t-[8px]" />
          <Skills className="bg-section-secondary" />
          <Resume className="bg-section-primary" />
          <Contact className="bg-section-secondary" />
        </div>
      </div>
    </div>
  );
}

export default App;
