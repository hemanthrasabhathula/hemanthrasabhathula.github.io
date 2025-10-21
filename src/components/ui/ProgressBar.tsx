import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ProgressBarProps {
  skill: string; // Progress value between 0 and 100
  progress: number; // Optional label to display
}

const ProgressBar = React.memo(({ skill, progress }: ProgressBarProps) => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (!inView) return; // Only run if the component is in view
    // Trigger the transition after the component mounts
    const timeout = setTimeout(() => {
      setCurrentWidth(progress);
    }, 100); // Add a slight delay to ensure the transition is visible
    return () => clearTimeout(timeout);
  }, [inView, progress]);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[0.75rem] font-bold text-section-title-h2">
          {skill}
        </span>
        <span className="text-[0.75rem] font-bold text-section-title-h2">
          {progress}%
        </span>
      </div>
      <div className="bg-progress-background h-3 overflow-hidden rounded-sm">
        <div
          className="h-3 transition-all duration-1000 ease-in-out bg-progress-foreground rounded-sm"
          style={{ width: `${currentWidth}%` }}
        ></div>
      </div>
    </div>
  );
});
export default ProgressBar;
