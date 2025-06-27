import React, { useEffect, useState, memo } from "react";

const ConicCircularProgress = memo(({ percent = 0, size = 80, duration = 1000 }) => {
  const [displayedPercent, setDisplayedPercent] = useState(0);

  useEffect(() => {
    let start = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressPercent = Math.min((progress / duration) * percent, percent);
      setDisplayedPercent(Math.round(progressPercent));
      if (progressPercent < percent) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [percent, duration]);

  return (
    <div
      style={{
        width: size,
        height: size,
        background: `conic-gradient(#3b82f6 ${displayedPercent}%, black ${displayedPercent}%)`,
      }}
      className="rounded-full flex items-center justify-center relative shadow-md"
    >
      <div
        style={{
          width: size * 0.75,
          height: size * 0.75,
        }}
        className="absolute rounded-full bg-black shadow-inner"
      />
      <div className="flex flex-col items-center justify-center absolute z-10">
        <p className="text-[10px] text-gray-500">Proficiency</p>
        <p className="text-sm font-bold text-blue-600">{displayedPercent}%</p>
      </div>
    </div>
  );
});

export default ConicCircularProgress;
