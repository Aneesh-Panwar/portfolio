import React, { useState, useEffect, act } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { LayoutGrid, Monitor, Server, Smartphone,Code2,Wrench, Lightbulb } from "lucide-react";
import ConicCircularProgress from "./CircularProgress";
import SwipeHint from "./SwipeHint";

const tabData = [
  { name: "All", icon: <LayoutGrid size={18} />, content: "All projects listed here." },
  { name: "Frontend", icon: <Monitor size={18} />, content: "Frontend projects only." },
  { name: "Backend", icon: <Server size={18} />, content: "Backend projects only." },
  { name: "Mobile", icon: <Smartphone size={18} />, content: "Mobile apps here." },
  { name: "Languages", icon: <Code2 size={18} />, content: "C, Python, Java, etc." },
  { name: "Tools & others", icon: <Wrench size={18} />, content: "Git, VSCode, Postman..." },
  { name: "Learning", icon: <Lightbulb size={18} />, content: "learning" },

];

const skills = [
  { name: "C",
    logo:"",
    catagory: "Languages",
    proficiency: 85,
  },
  { name: "java script",
    logo:"",
    catagory: "Frontend",
    proficiency: 70,
  },
  { name: "Node.js",
    logo:"",
    catagory: "Backend",
    proficiency: 70,
  },
]


// const fetchContent = (name) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Dynamic content for ${name}`);
//     }, 700);
//   });
// };

const AdvancedTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState(tabData);

//   useEffect(() => {
//     fetchContent(tabs[activeTab].name).then((content) => {
//       setTabs((prev) =>
//         prev.map((tab, idx) =>
//           idx === activeTab ? { ...tab, content } : tab
//         )
//       );
//     });
//   }, [activeTab]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1)),
    onSwipedRight: () => setActiveTab((prev) => Math.max(prev - 1, 0)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const tabSkills = (tab)=>{
    
  }

  return (
    <div className=" mx-auto p-4">
      {/* Floating draggable header */}
      

      <div className="overflow-hidden rounded-md shadow-full">
      <motion.div
        className="flex justify-around gap-1 overflow-x-auto whitespace-nowrap scroll-x-custom bg-black rounded-md shadow-lg p-1 cursor-grab"
        
      >
        {tabs.map((tab, i) => (
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

      {/* Tab Content with swipe */}
      <div
        {...swipeHandlers}
        className="relative max-h-100 overflow-auto mt-6 bg-black shadow-inner rounded-lg  p-4  min-h-[120px]"
      >
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            
            {skills.map((skill,i)=>{
              return (skill.catagory === tabs[activeTab].name ? skill.name : "")
            })}
            
            <div className="flex gap-1 flex-wrap justify-around items-center">
            <ConicCircularProgress percent={80} duration={1000}/>
            <ConicCircularProgress percent={80} duration={1000}/>
            <ConicCircularProgress percent={80} duration={1000}/>
            <ConicCircularProgress percent={80} duration={1000}/>
            
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <SwipeHint/>
    </div>
  );
};

export default AdvancedTabs;
