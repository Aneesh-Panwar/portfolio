// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Home, Info, Mail, User } from 'lucide-react';

// const icons = [
//   { id: 'home', icon: <Home />, label: 'Home' },
//   { id: 'about', icon: <Info />, label: 'About' },
//   { id: 'contact', icon: <Mail />, label: 'Contact' },
//   { id: 'profile', icon: <User />, label: 'Profile' }
// ];

// export default function ExpandingNav() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(prev => !prev);

//   return (
//     <div className="fixed inset-0 flex justify-center items-end pb-8 z-50">
//       <div className="relative z-50 flex items-center justify-center">
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 flex gap-6 px-4 py-2 rounded-xl bg-black/30 backdrop-blur-md"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               {icons.map((item, index) => (
//                 <motion.button
//                   key={item.id}
//                   className="w-12 h-12 rounded-full bg-white shadow-lg text-blue-600 flex items-center justify-center"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.05 }}
//                   whileHover={{ scale: 1.2 }}
//                 >
//                   {item.icon}
//                 </motion.button>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <motion.button
//           onClick={toggleMenu}
//           className="z-50 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg backdrop-blur-md"
//           whileTap={{ scale: 0.95 }}
//         >
//           <User size={28} />
//         </motion.button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, Mail, User } from 'lucide-react';

const icons = [
  { id: 'home', icon: <Home />, label: 'Home' },
  { id: 'about', icon: <Info />, label: 'About' },
  { id: 'contact', icon: <Mail />, label: 'Contact' },
  { id: 'profile', icon: <User />, label: 'Profile' },
];

export default function ExpandingNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const leftIcons = icons.slice(0, Math.floor(icons.length / 2));
  const rightIcons = icons.slice(Math.floor(icons.length / 2));

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative z-50 flex  items-center justify-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-8 translate-y-1/2 left-1/2 transform -translate-x-1/2 flex items-center px-10 py-0 rounded-xl"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <motion.div className="absolute inset-0 -z-10 flex justify-center items-center px-2 py-6 rounded-4xl bg-black/50 backdrop-blur-md" />
              {leftIcons.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="w-12 h-12 rounded-full bg-white shadow-lg text-blue-600 flex items-center justify-center mx-0.5"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: -15 * (leftIcons.length - index) }}
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10, delay: index * 0.05 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {item.icon}
                </motion.button>
              ))}

              <motion.button
                onClick={toggleMenu}
                className="z-50 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg backdrop-blur-md mx-1"
                whileTap={{ scale: 0.95 }}
              >
                <User size={28} />
              </motion.button>

              {rightIcons.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="w-12 h-12 rounded-full bg-white shadow-lg text-blue-600 flex items-center justify-center mx-0.5"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 15 * (index + 1) }}
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10, delay: index * 0.05 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {item.icon}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.button
            onClick={toggleMenu}
            className="z-50 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg backdrop-blur-md"
            whileTap={{ scale: 0.95 }}
          >
            <User size={28} />
          </motion.button>
        )}
      </div>
    </div>
  );
}


