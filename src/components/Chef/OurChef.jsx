import React from "react";
import { motion } from "framer-motion";
import { chefs } from "../../assets/assets";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const OurChef = () => {
  return (
    <section id="our-chefs" className="bg-black py-20 text-white">
    <div className="max-w-screen-xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-primary">
        Meet Our Chefs
      </h2>
      <p className="text-lg text-gray-300 mt-4 font-averia max-w-2xl mx-auto">
        Our talented chefs bring passion, expertise, and creativity to every
        dish, ensuring a delightful dining experience.
      </p>

      {/* Chef Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
        {chefs.map((chef, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }} 
            viewport={{ once: false }}
            className="bg-gray-900 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={chef.img}
              alt={chef.name}
              className="w-40 h-40 mx-auto rounded-full border-4 border-primary object-cover "
            />
            <h4 className="text-xl font-semibold text-primary mt-4 font-cinzel">
              {chef.name}
            </h4>
            <p className="text-gray-300 text-sm mt-2 font-averia">{chef.description}</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 mt-4">
              <motion.a
                href="#"
                className="social-icon w-8 h-8 flex items-center justify-center rounded-full text-white bg-primary transition-all hover:bg-blue-600"
                whileHover={{ y: -4 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                className="social-icon w-8 h-8 flex items-center justify-center rounded-full text-white bg-primary transition-all hover:bg-blue-600"
                whileHover={{ y: -4 }} 
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="#"
                className="social-icon w-8 h-8 flex items-center justify-center rounded-full text-white bg-primary transition-all hover:bg-blue-600"
                whileHover={{ y: -4 }} 
              >
                <FaFacebook />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default OurChef;
