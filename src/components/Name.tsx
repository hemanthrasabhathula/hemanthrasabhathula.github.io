import React from "react";
import { ClassNameProps } from "../lib/types";
import { cn } from "../lib/utils";
import TypedComponent from "./TypedComponent";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Name = React.memo(({ className }: ClassNameProps) => {
  const typedStrings = [
    "Developer",
    "Techie",
    "Cyber geek",
    "UI Designer",
    "AI Fanatic",
    "Futurist",
  ];

  const name = {
    firstName: "Hemanth",
    lastName: "Rasabhathula",
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-col text-4xl sm:text-6xl text-white font-bold transition-all duration-300 ease-in-out font-[poppins]",
          className
        )}
        data-aos="fade-in"
      >
        <span>{name.firstName}</span>
        <span>{name.lastName}</span>
        <p className="text-2xl mt-3 font-medium font-[poppins]">
          <span className="waving-hand">👋</span> I'm a
          <ChevronLeft className="inline-block" />
          <TypedComponent strings={typedStrings} />
          <ChevronRight className="inline-block" />
        </p>
      </div>
    </>
  );
});

export default Name;
