import React from 'react'
import { menu_list } from '../../assets/assets'
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';

const ExploreMenu = () => {
  return (
    <div id='menu' className="explore-menu text-center my-12 pt-12">
      
      <h1 className="text-3xl font-bold text-secondary mb-2 pb-4 font-cinzel underline decoration-primary">Explore Our Menu</h1>
      <p className="text-lg text-secondary mb-6 font-averia">Choose from a diverse menu featuring a variety of food</p>

      {/* Scrollable Menu Container */}
      <div className="relative w-full flex justify-center">
        {/*  max-w-screen-xl - this xl incease the length of menu item. it can be set to lg, sm, md, xl */}
        <div className="menu-scroll flex space-x-6 overflow-x-auto px-6 py-4 mb-7 max-w-screen-xl mx-auto scrollbar-custom font-averia">
          {menu_list.map((item, index) => (
            <motion.div
                variants={FadeLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                key={index} className="flex flex-col items-center">
              
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg border-4 border-primary flex items-center justify-center">
                    <img src={item.menu_img} alt={item.menu_name} className="w-full h-full object-cover cursor-pointer" />
                  </div>
              <p className="text-sm text-gray-700 mt-2">{item.menu_name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ExploreMenu
