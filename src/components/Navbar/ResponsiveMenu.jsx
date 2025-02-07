import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const ResponsiveMenu = ({open, setOpen }) => {

   // Function to handle smooth scrolling and close the menu
   const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false); // Close menu after clicking
    }
  };

  
   return (
    
    <AnimatePresence mode = "wait">
    {open &&(
        <motion.div
        initial={{opacity: 0, y: -100}}
        animate= {{opacity: 1, y: 0}} 
        exit={{opacity: 0, y: -100}}
        transition= {{duration: 0.3}}
        className='absolute top-20 left-0 w-full h-screen z-20 font-averia'>
                                                                    {/* m-6 - margin all side by 6 rounded - border radius */}
            <div className='text-lg font-semibold uppercase bg-secondary text-white py-10 m-6 rounded-3xl'>
                <ul className='flex flex-col items-center gap-5'>
                <li>
                <button onClick={() => handleScroll("#hero")}>Home</button>
              </li>
              <li>
                <button onClick={() => handleScroll("#about")}>About</button>
              </li>
              <li>
                <button onClick={() => handleScroll("#services")}>Service</button>
              </li>
              <li>
                <button onClick={() => handleScroll("#menu")}>Menu</button>
              </li>
              <li>
                <button onClick={() => handleScroll("#speciality")}>Speciality</button>
              </li>
              <li>
                <button onClick={() => handleScroll("#our-chefs")}>Our Chef</button>
              </li>
              <li>
                <button onClick={() => handleScroll("#contact")}>Contact</button>
              </li>
                </ul>
            </div>
        </motion.div>

    )}
    </AnimatePresence>

  )
}

export default ResponsiveMenu
