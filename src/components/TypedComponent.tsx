import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

interface TypedComponentProps {
  strings: string[]; // Array of strings to be typed
}

export default function TypedComponent({ strings }: TypedComponentProps) {
  const typedRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (typedRef.current) {
      const options: TypedOptions = {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        cursorChar: "/",
        autoInsertCss: true,
        showCursor: true,
      };

      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy(); // Cleanup the Typed instance on unmount
      };
    }
  }, [strings]);

  return (
    <>
      <span
        ref={typedRef}
        className="typed border-b-[3px] border-highlight-blue pb-[4px]"
      />
    </>
  );
}
