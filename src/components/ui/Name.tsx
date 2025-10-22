import React from "react";
import { ClassNameProps } from "../../lib/types";
import { cn } from "../../lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNameData } from "../../lib/hooks";
import { TypedComponent } from "./";

const Name = React.memo(({ className }: ClassNameProps) => {
  const { firstName, lastName, typedStrings } = useNameData();

  return (
    <>
      <div
        className={cn(
          "flex flex-col text-4xl sm:text-6xl text-white font-bold transition-all duration-300 ease-in-out font-[poppins]",
          className
        )}
        data-aos="fade-in"
      >
        <span>{firstName}</span>
        <span>{lastName}</span>
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
