import React from 'react'
import { ImSpoonKnife } from 'react-icons/im'
import { MdOutlineShoppingCart} from 'react-icons/md'
import { FaArrowUp } from "react-icons/fa6";
import { MdMenu } from 'react-icons/md'
import ResponsiveMenu from './ResponsiveMenu'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

// const NavbarMenu = [
//     {
//         id:1,
//         title: "Home",
//         link: "/"
//     },
//     {
//         id:2,
//         title: "About",
//         link: "/"
//     },
//     {
//         id:3,
//         title: "Service",
//         link: "/"
//     },
//     {
//         id:4,
//         title: "Menu",
//         link: "/"
//     },
//     {
//         id:5,
//         title: "Speciality",
//         link: "/"
//     },
//     {
//         id:6,
//         title: "Our Chefs",
//         link: "/"
//     },
//     {
//         id:7,
//         title: "Contact",
//         link: "/"
//     },
// ]

// const Navbar = () => {
//     const [open, setOpen] = React.useState(false);

//   return (
//     <>
//     <nav>
//     {/*flex - all items in straight line justify- make left right alignment py4-top padding  */}
//         <motion.div
//                 initial={{opacity: 0}}
//                 animate= {{opacity: 1}}
//                 transition= {{duration: 0.5, delay: 0.5}}
//          className="container flex justify-between items-center py-4 md:pt-4">
//             {/* Logo */}
//                  {/* size, flex- in same line gap- spacing bet*/}
//             <div className='text-2xl flex items-center gap-2 font-bold uppercase font-averia'>
//                 <p className='text-primary'>Bite &</p>
//                 <p className='text-secondary'>Bliss</p>
//                 <ImSpoonKnife className='text-blue-900'/>
//             </div>

//             {/* Menu */}
//             <div className='hidden md:block font-averia'>
//                 <ul className="flex items-center gap-3 text-gray-600">
//                     {NavbarMenu.map((menu) => (
//                         <li key={menu.id} className="text-lg">
//                                         {/* py-1 - padding from upper side px-3 - inbetween padding */}
//                             <a href={menu.link} className='inline-block py-1 px-3 hover:text-secondary hover:shadow-[0_3px_0_-1px_#fea928] font-semibold'>{menu.title}</a>
//                         </li>
//                     ))}
//                     <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
//                         <MdOutlineShoppingCart/>
//                     </button>
//                 </ul>
//             </div>

//             {/* mobile hamburger menu section */}
//             <div className="md:hidden" onClick={() =>{
//                 setOpen(!open)
//             }}>
//                 <MdMenu className ="text-4xl"/>
//             </div>
//         </motion.div>
//     </nav>
    
//     {/* Mobile Menu Section */}
//     <ResponsiveMenu open={open}/>
//     </>
//   )
// }

const NavbarMenu = [
    { id: 1, title: "Home", link: "#hero" },
    { id: 2, title: "About", link: "#about" },
    { id: 3, title: "Service", link: "#services" },
    { id: 4, title: "Menu", link: "#menu" },
    { id: 5, title: "Special Dishes", link: "#speciality" },
    { id: 6, title: "Our Chefs", link: "#our-chefs" },
    { id: 7, title: "Contact", link: "#contact" },
  ];
  
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Function to handle smooth scrolling
    const handleScroll = (id) => {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Show/hide scroll-to-top button
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setShowScrollButton(true);
          } else {
            setShowScrollButton(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  
      // Scroll to top function
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };


    return (
      <>
        <nav className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="container flex justify-between items-center py-4 md:pt-4"
          >
            {/* Logo */}
            <div className="text-2xl flex items-center gap-2 font-bold uppercase font-averia">
              <p className="text-primary">Bite &</p>
              <p className="text-secondary">Bliss</p>
              <ImSpoonKnife className="text-blue-900" />
            </div>

            {/* Menu (Desktop) */}
            <div className="hidden md:block font-averia">
              <ul className="flex items-center gap-3 text-gray-600">
                {NavbarMenu.map((menu) => (
                  <li key={menu.id} className="text-lg">
                    <button 
                      onClick={() => handleScroll(menu.link)} 
                      className="inline-block py-1 px-3 hover:text-secondary hover:shadow-[0_3px_0_-1px_#fea928] font-semibold"
                    >
                      {menu.title}
                    </button>
                  </li>
                ))}
                <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                  <MdOutlineShoppingCart />
                </button>
              </ul>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl" />
            </div>
          </motion.div>
        </nav>

        {/* Mobile Menu Section */}
        <ResponsiveMenu open={open} setOpen={setOpen} />

        {/* Scroll to Top Button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-secondary hover:shadow-xl transition-all focus:outline-none"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}
      </>
    );
};

export default Navbar
