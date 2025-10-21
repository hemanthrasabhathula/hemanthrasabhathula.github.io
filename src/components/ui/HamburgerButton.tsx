import { cn } from "../../lib/utils";

interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
  className?: string;
}

export const HamburgerButton = ({
  open,
  onClick,
  className,
}: HamburgerButtonProps) => {
  return (
    <>
      <button
        className={cn(
          `flex items-center justify-center relative w-6 h-6`,
          className
        )}
        onClick={onClick}
        aria-label="Toggle menu"
      >
        <span
          className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-300 ${
            open ? "rotate-45" : "-translate-y-[7px]"
          }`}
        ></span>
        <span
          className={`absolute w-6 h-0.5 p-0 b-0 bg-white rounded transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-300 ${
            open ? "-rotate-45" : "translate-y-[7px]"
          }`}
        ></span>
      </button>
    </>
  );
};
