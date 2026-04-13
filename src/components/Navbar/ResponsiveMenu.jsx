import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { useEffect } from 'react';

const ResponsiveMenu = ({ open, setOpen }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [open]);

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setOpen(false), 300);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-screen bg-black/60 z-50 flex justify-center items-center font-averia"
        >
          <div className="text-lg font-semibold uppercase bg-secondary text-white py-10 px-8 rounded-3xl relative w-3/4 md:w-1/2">
            {/* Small Close (X) Button */}
            <button 
              onClick={() => setOpen(false)} 
              className="absolute top-4 right-6 text-white text-3xl"
            >
              &times;
            </button>

            <ul className="flex flex-col items-center gap-5">
              <li><button onClick={() => handleScroll("#hero")}>Home</button></li>
              <li><button onClick={() => handleScroll("#about")}>About</button></li>
              <li><button onClick={() => handleScroll("#services")}>Service</button></li>
              <li><button onClick={() => handleScroll("#menu")}>Menu</button></li>
              <li><button onClick={() => handleScroll("#speciality")}>Speciality</button></li>
              <li><button onClick={() => handleScroll("#our-chefs")}>Our Chef</button></li>
              <li><button onClick={() => handleScroll("#contact")}>Contact</button></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default ResponsiveMenu
