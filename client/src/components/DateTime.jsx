import React, { useState, useEffect } from "react";

export default function DateTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = currentTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short", // Jun, Jul, etc.
    year: "numeric"
  });

  const time = currentTime.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  return (
    <div className="text-sm text-gray-500 mt-2">
      {date} — {time}
    </div>
  );
}
