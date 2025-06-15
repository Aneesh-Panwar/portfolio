// import React, { useEffect, useRef, useState } from 'react';

// const CircularProgress = ({ percent = 0, size = 120, strokeWidth = 10, duration = 1000 }) => {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;

//   const [displayedPercent, setDisplayedPercent] = useState(0);
//   const requestRef = useRef();
//   const startTimeRef = useRef();

//   const animate = (timestamp) => {
//     if (!startTimeRef.current) startTimeRef.current = timestamp;
//     const elapsed = timestamp - startTimeRef.current;

//     const progress = Math.min(elapsed / duration, 1); // Clamp [0, 1]
//     const current = Math.round(progress * percent);

//     setDisplayedPercent(current);

//     if (progress < 1) {
//       requestRef.current = requestAnimationFrame(animate);
//     }
//   };

//   useEffect(() => {
//     setDisplayedPercent(0);
//     startTimeRef.current = null;
//     cancelAnimationFrame(requestRef.current);
//     requestRef.current = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(requestRef.current);
//   }, [percent]);

//   const offset = circumference - (displayedPercent / 100) * circumference;

//   return (
//     <div style={{ width: size, height: size, position: 'relative' }}>
//       <svg width={size} height={size} className="rotate-[-90deg]">
//         <defs>
//           <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#f43f5e" />
//             <stop offset="25%" stopColor="#f59e0b" />
//             <stop offset="50%" stopColor="#10b981" />
//             <stop offset="75%" stopColor="#3b82f6" />
//             <stop offset="100%" stopColor="#8b5cf6" />
//           </linearGradient>
//         </defs>

//         {/* Background */}
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke="#e5e7eb"
//           strokeWidth={strokeWidth}
//           fill="none"
//         />

//         {/* Foreground Progress */}
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke="url(#gradient)"
//           strokeWidth={strokeWidth}
//           fill="none"
//           strokeDasharray={circumference}
//           strokeDashoffset={offset}
//           strokeLinecap="round"
//         />
//       </svg>

//       {/* Centered Text */}
//       <div
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           fontSize: '1rem',
//           fontWeight: 'bold',
//           color: '#1f2937',
//         }}
//       >
//         {displayedPercent}%
//       </div>
//     </div>
//   );
// };

// export default CircularProgress;


// import {
//   CircularProgressbarWithChildren,
//   buildStyles
// } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// export default function MyProgress({ percent }) {
//   return (
//     <div style={{ width: 60, height: 60 }}>
//       <CircularProgressbarWithChildren
//         value={percent}
//         styles={buildStyles({
//           pathColor: `url(#gradient)`,
//           trailColor: "#eee",
//           strokeLinecap: "round",
//         })}
//       >
//         <div style={{ fontSize: 12, marginTop: 0 }}>
//           <strong>{percent}%</strong>
//         </div>

//         {/* Inject gradient via SVG defs */}
//         <svg style={{ height: 0 }}>
//           <defs>
//             <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
//               <stop offset="0%" stopColor="#f43f5e" />
//               <stop offset="25%" stopColor="#f59e0b" />
//               <stop offset="50%" stopColor="#10b981" />
//               <stop offset="75%" stopColor="#3b82f6" />
//               <stop offset="100%" stopColor="#8b5cf6" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </CircularProgressbarWithChildren>
//     </div>
//   );
// }


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
        background: `conic-gradient(red, green, blue, purple, black ${displayedPercent + 10}%)`,
      }}
      className="rounded-full flex items-center justify-center relative"
    >
      <div
        style={{
          width: size * 0.75,
          height: size * 0.75,
        }}
        className="absolute rounded-full z-0 bg-black"
      />
      <div className="flex flex-col justify-center items-center font-jura absolute z-2">
        <p className="text-[10px] font-semibold text-gray-400">proficiency</p>
        <p className="text-white">{displayedPercent}%</p>
      </div>
    </div>
  );
});

export default ConicCircularProgress;



