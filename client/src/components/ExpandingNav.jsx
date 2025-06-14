
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, BadgeCheck, Briefcase, Code, Hammer, Home, Info, KanbanSquare, LayoutDashboard, Mail, PenTool, PenToolIcon, Route, Sparkles, User } from 'lucide-react';

const icons = [
  { id: 'skills', icon: <Code/>, label: 'Skills' },
  { id: 'home', icon: <User />, label: 'About' },
  { id: 'projects', icon: <LayoutDashboard />, label: 'Projects' },
  { id: 'journey', icon: <Route />, label: 'Journey' },
];

export default function ExpandingNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const leftIcons = icons.slice(0, Math.floor(icons.length / 2));
  const rightIcons = icons.slice(Math.floor(icons.length / 2));

  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative z-50 flex items-center justify-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-8 translate-y-1/2 left-1/2 transform -translate-x-1/2 flex items-center px-10 py-0 rounded-xl"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <motion.div className="absolute inset-0 -z-10 flex justify-center items-center px-2 py-6 rounded-lg bg-black/50 backdrop-blur-md" />

              {leftIcons.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="w-12 h-12 rounded-lg bg-black shadow-full text-gray-400 flex flex-col items-center justify-center mx-0.5"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -15 * (leftIcons.length - index) }}
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10, delay: index * 0.05 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {item.icon}
                  <p className='font-kode text-[10px]'>{item.label}</p>
                </motion.button>
              ))}

              <motion.button
                onClick={toggleMenu}
                className="z-50 w-16 h-16 rounded-full bg-transparent text-white flex items-center justify-center shadow-lg backdrop-blur-lg mx-1"
                whileTap={{ scale: 0.95 }}
              >
                <img src="./logos/silverF.png" alt="" />
              </motion.button>

              {rightIcons.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="w-12 h-12 rounded-lg bg-black shadow-full text-gray-400 flex flex-col items-center justify-center mx-0.5"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 15 * (index + 1) }}
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10, delay: index * 0.05 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {item.icon}
                  <p className='font-kode text-[10px]'>{item.label}</p>

                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.button
            onClick={toggleMenu}
            className="z-50 w-16 h-16 rounded-full text-white flex items-center justify-center shadow-lg backdrop-blur-xl"
            whileTap={{ scale: 0.95 }}
          >
            <div className='shadow-inner rounded-full'>
              <img src="./logos/silverF.png" alt="" className='bg-black/40 rounded-full' />
            </div>
          </motion.button>
        )}
      </div>
    </div>
  );
}
