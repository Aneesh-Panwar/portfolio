import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import {
  LayoutGrid,
  Monitor,
  Server,
  Smartphone,
  Code2,
  Wrench,
  Lightbulb,
} from "lucide-react";
import ConicCircularProgress from "./CircularProgress";
import SwipeHint from "./SwipeHint";
import { skills } from "../data.js/skills";

const tabData = [
  { name: "All", icon: <LayoutGrid size={18} /> },
  { name: "Frontend", icon: <Monitor size={18} /> },
  { name: "Backend", icon: <Server size={18} /> },
  { name: "Mobile", icon: <Smartphone size={18} /> },
  { name: "Languages", icon: <Code2 size={18} /> },
  { name: "Tools & others", icon: <Wrench size={18} /> },
  { name: "Learning", icon: <Lightbulb size={18} /> },
];

const AdvancedTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveTab((prev) => Math.min(prev + 1, tabData.length - 1)),
    onSwipedRight: () => setActiveTab((prev) => Math.max(prev - 1, 0)),
    preventScrollOnSwipe: false,
    trackMouse: true,
  });

  const filteredSkills = useMemo(() => {
    const current = tabData[activeTab].name;
    return current === "All"
      ? skills
      : skills.filter((skill) => skill.catagory === current);
  }, [activeTab]);

  return (
    <div className="mx-auto p-4">
      {/* Tab Bar */}
      <div className="overflow-hidden rounded-md shadow-full">
        <motion.div className="flex justify-around gap-1 overflow-x-auto whitespace-nowrap scroll-x-custom bg-black rounded-md shadow-lg p-1 cursor-grab">
          {tabData.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`relative z-10 w-full px-3 py-2 text-sm font-kode font-bold flex items-center justify-center gap-1 transition duration-200 ${
                activeTab === i ? "text-white" : "text-gray-600"
              }`}
            >
              {activeTab === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gray-800 rounded-md z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                {tab.icon} {tab.name}
              </span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Tab Content */}
      <div
        {...swipeHandlers}
        className="relative max-h-100 overflow-auto mt-6 bg-black shadow-inner rounded-lg p-4 min-h-[120px]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >

            <div className="flex flex-wrap gap-4 justify-evenly items-center">
              {filteredSkills.length ? filteredSkills.map((skill, index) => (
                <div key={skill.name} className="flex flex-col items-center bg-slaty/60 w-25 rounded-md cursor-pointer">
                  <div className="py-4">
                    <ConicCircularProgress
                    percent={skill.proficiency} duration={800 + index * 200} />
                  </div>
                  <div className="flex items-center bg-slaty-100 font-jura w-full rounded-sm overflow-hidden">
                    <img src={skill.logo} alt="logo"  className="h-5 w-5 bg-white"/>
                    <p className="text-xs text-white px-2">{skill.name}</p>
                  </div>
                </div>
              )):
              <div className="font-jura text-center">
                Wellcome Buddy..!! <br />
                It will be something soon here <span className="text-xl">☺️</span>
              </div>
              }
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
      <SwipeHint />
    </div>
  );
};

export default AdvancedTabs;
