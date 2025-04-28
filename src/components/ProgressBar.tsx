import { useEffect, useState } from "react";

interface ProgressBarProps {
  skill: string; // Progress value between 0 and 100
  progress: number; // Optional label to display
}

export default function ProgressBar({ skill, progress }: ProgressBarProps) {
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    // Trigger the transition after the component mounts
    const timeout = setTimeout(() => {
      setCurrentWidth(progress);
    }, 100); // Add a slight delay to ensure the transition is visible
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[0.75rem] font-bold text-section-title-h2">
          {skill}
        </span>
        <span className="text-[0.75rem] font-bold text-section-title-h2">
          {progress}%
        </span>
      </div>
      <div className="bg-progress-background h-3 overflow-hidden">
        <div
          className="h-3 transition-all duration-1000 ease-in-out bg-progress-foreground "
          style={{ width: `${currentWidth}%` }}
        ></div>
      </div>
    </div>
  );
}
