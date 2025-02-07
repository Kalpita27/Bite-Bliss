import React from 'react'
import { ImSpoonKnife } from 'react-icons/im'
import { MdOutlineShoppingCart} from 'react-icons/md'
import { FaArrowUp } from "react-icons/fa6";
import ResponsiveMenu from './ResponsiveMenu'
import { motion } from 'framer-motion'
import {useState, useEffect} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';


const NavbarMenu = [
    { id: 1, title: "Home", link: "#hero" },
    { id: 2, title: "About", link: "#about" },
    { id: 3, title: "Service", link: "#services" },
    { id: 4, title: "Menu", link: "#menu" },
    { id: 5, title: "Speciality", link: "#speciality" },
    { id: 6, title: "Our Chefs", link: "#our-chefs" },
    { id: 7, title: "Contact", link: "#contact" },
  ];
  
// const Navbar = () => {
//     const [open, setOpen] = React.useState(false);
//     const [showScrollButton, setShowScrollButton] = useState(false);

//     // Function to handle smooth scrolling
//     const handleScroll = (id) => {
//       const section = document.querySelector(id);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     };

//     // Show/hide scroll-to-top button
//     useEffect(() => {
//         const handleScroll = () => {
//           if (window.scrollY > 300) {
//             setShowScrollButton(true);
//           } else {
//             setShowScrollButton(false);
//           }
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//       }, []);
  
//       // Scroll to top function
//       const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       };


//     return (
//       <>
//         <nav className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="container flex justify-between items-center py-4 md:pt-4"
//           >
//             {/* Logo */}
//             <div className="text-2xl flex items-center gap-2 font-bold uppercase font-averia">
//               <p className="text-primary">Bite &</p>
//               <p className="text-secondary">Bliss</p>
//               <ImSpoonKnife className="text-blue-900" />
//             </div>

//             {/* Menu (Desktop) */}
//             <div className="hidden md:block font-averia">
//               <ul className="flex items-center gap-3 text-gray-600">
//                 {NavbarMenu.map((menu) => (
//                   <li key={menu.id} className="text-lg">
//                     <button 
//                       onClick={() => handleScroll(menu.link)} 
//                       className="inline-block py-1 px-3 hover:text-secondary hover:shadow-[0_3px_0_-1px_#fea928] font-semibold"
//                     >
//                       {menu.title}
//                     </button>
//                   </li>
//                 ))}
//                 <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
//                   <MdOutlineShoppingCart />
//                 </button>
//               </ul>
//             </div>

//             {/* Mobile Hamburger Menu */}
//             <div className="md:hidden" onClick={() => setOpen(!open)}>
//               <MdMenu className="text-4xl" />
//             </div>
//           </motion.div>
//         </nav>

//         {/* Mobile Menu Section */}
//         <ResponsiveMenu open={open} setOpen={setOpen} />

//         {/* Scroll to Top Button */}
//         {showScrollButton && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-secondary hover:shadow-xl transition-all focus:outline-none"
//           >
//             <FaArrowUp className="text-xl" />
//           </button>
//         )}
//       </>
//     );
// };


// Close and open menu with each section
// const Navbar = () => {
//   const [open, setOpen] = React.useState(false);
//   const [showScrollButton, setShowScrollButton] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   // Function to handle smooth scrolling
//   const handleScroll = (id) => {
//     const section = document.querySelector(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//       setTimeout(() => setOpen(false), 300); // Ensure menu closes smoothly
//     }
//   };

//   // Save scroll position when opening menu
//   const handleMenuToggle = () => {
//     if (!open) {
//       setScrollPosition(window.scrollY); // Store current scroll position
//     }
//     setOpen(!open);
//   };

//   // Prevent automatic scrolling to top when menu opens
//   useEffect(() => {
//     if (open) {
//       window.scrollTo({ top: scrollPosition, behavior: "instant" });
//     }
//   }, [open, scrollPosition]);

//   // Show/hide scroll-to-top button
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowScrollButton(true);
//       } else {
//         setShowScrollButton(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="container flex justify-between items-center py-4 md:pt-4"
//         >
//           {/* Logo */}
//           <div className="text-2xl flex items-center gap-2 font-bold uppercase font-averia">
//             <p className="text-primary">Bite &</p>
//             <p className="text-secondary">Bliss</p>
//             <ImSpoonKnife className="text-blue-900" />
//           </div>

//           {/* Menu (Desktop) */}
//           <div className="hidden md:block font-averia">
//             <ul className="flex items-center gap-3 text-gray-600">
//               {NavbarMenu.map((menu) => (
//                 <li key={menu.id} className="text-lg">
//                   <button 
//                     onClick={() => handleScroll(menu.link)} 
//                     className="inline-block py-1 px-3 hover:text-secondary hover:shadow-[0_3px_0_-1px_#fea928] font-semibold"
//                   >
//                     {menu.title}
//                   </button>
//                 </li>
//               ))}
//               <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
//                 <MdOutlineShoppingCart />
//               </button>
//             </ul>
//           </div>

//          {/* Mobile Hamburger Menu */}
//             <div className="md:hidden">
//               {!open && (
//                 <button onClick={() => setOpen(true)} className="text-4xl">
//                   <GiHamburgerMenu />
//                 </button>
//               )}
//             </div>
//         </motion.div>
//       </nav>

//       {/* Mobile Menu Section */}
//       <ResponsiveMenu open={open} setOpen={setOpen} />

//       {/* Scroll to Top Button */}
//       {showScrollButton && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-secondary hover:shadow-xl transition-all focus:outline-none"
//         >
//           <FaArrowUp className="text-xl" />
//         </button>
//       )}
//     </>
//   );
// };

// const Navbar = () => {
//   const [open, setOpen] = React.useState(false);
//   const [showScrollButton, setShowScrollButton] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0); // Save scroll position

//   // Function to handle smooth scrolling
//   const handleScroll = (id) => {
//     const section = document.querySelector(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//       setTimeout(() => setOpen(false), 300); // Ensure menu closes smoothly
//     }
//   };

//   // Save scroll position before opening the menu
//   const handleMenuToggle = () => {
//     if (!open) {
//       setScrollPosition(window.scrollY); // Store the current scroll position
//     }
//     setOpen(!open);
//   };

//   // Prevent scrolling when menu is open & restore when closed
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden"; // Prevent scrolling
//       window.scrollTo(0, scrollPosition); // Keep page at the same position
//     } else {
//       document.body.style.overflow = "auto"; // Restore scrolling
//     }
//   }, [open, scrollPosition]);

//   // Show/hide scroll-to-top button
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollButton(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="container flex justify-between items-center py-4 md:pt-4"
//         >
//           {/* Logo */}
//           <div className="text-2xl flex items-center gap-2 font-bold uppercase font-averia">
//             <p><span className='text-primary'>Bite & </span><span className="text-secondary">Bliss</span></p>
            
//             <ImSpoonKnife className="text-secondary" />
//           </div>

//           {/* Menu (Desktop) */}
//           <div className="hidden md:block font-averia">
//             <ul className="flex items-center gap-3 text-gray-600">
//               {NavbarMenu.map((menu) => (
//                 <li key={menu.id} className="text-lg">
//                   <button 
//                     onClick={() => handleScroll(menu.link)} 
//                     className="inline-block py-1 px-3 hover:text-secondary hover:shadow-[0_3px_0_-1px_#fea928] font-semibold"
//                   >
//                     {menu.title}
//                   </button>
//                 </li>
//               ))}
//               <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
//                 <MdOutlineShoppingCart />
//               </button>
//             </ul>
//           </div>

//           {/* Mobile Hamburger Menu */}
//           <div className="md:hidden">
//             {!open && (
//               <button onClick={handleMenuToggle} className="text-4xl">
//                 <GiHamburgerMenu />
//               </button>
//             )}
//           </div>
//         </motion.div>
//       </nav>

//       {/* Mobile Menu Section */}
//       <ResponsiveMenu open={open} setOpen={setOpen} />

//       {/* Scroll to Top Button */}
//       {showScrollButton && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-secondary hover:shadow-xl transition-all focus:outline-none"
//         >
//           <FaArrowUp className="text-xl" />
//         </button>
//       )}
//     </>
//   );
// };

// Changes for screen size 1024
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Save scroll position

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setOpen(false), 300); // Ensure menu closes smoothly
    }
  };

  // Save scroll position before opening the menu
  const handleMenuToggle = () => {
    if (!open) {
      setScrollPosition(window.scrollY); // Store the current scroll position
    }
    setOpen(!open);
  };

  // Prevent scrolling when menu is open & restore when closed
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      window.scrollTo(0, scrollPosition); // Keep page at the same position
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }, [open, scrollPosition]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 lg:pt-4"
        >
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase font-averia">
            <p><span className='text-primary'>Bite & </span><span className="text-secondary">Bliss</span></p>
            <ImSpoonKnife className="text-secondary" />
          </div>

          {/* Menu (Desktop) */}
          <div className="hidden lg:block font-averia">
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

          {/* Mobile Hamburger Menu - Now visible from 1024px */}
          <div className="lg:hidden">
            {!open && (
              <button onClick={handleMenuToggle} className="text-4xl">
                <GiHamburgerMenu />
              </button>
            )}
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Section */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};


export default Navbar
