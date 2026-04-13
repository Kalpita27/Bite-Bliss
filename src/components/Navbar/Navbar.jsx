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

// Changes for screen size 1024
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Save scroll position

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setOpen(false), 300);
    }
  };

 
  const handleMenuToggle = () => {
    if (!open) {
      setScrollPosition(window.scrollY); 
    }
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; 
      window.scrollTo(0, scrollPosition); 
    } else {
      document.body.style.overflow = "auto"; 
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

          {/* Mobile Hamburger Menu  */}
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
