import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { services } from '../../assets/assets';


const Services = () => {
    return (
      <>
        <section id='services' className="py-12 mt-12">
        <div className="container mx-auto px-19">
          <h1 className="focus:underline text-2xl md:text-3xl font-bold text-center font-cinzel text-secondary underline decoration-primary pb-5">
            Our Services
          </h1>
          <p className='text-lg text-secondary py-0 font-averia text-center'>"Your Favorite Flavors, Just a Bite Away!"</p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center mt-9">
            {services.map((service) => {
              const Icon = service.icon; // Extract the icon component
              return(<motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                viewport={{ once: false }}
                className="bg-white rounded-3xl shadow-[0_0_45px_rgba(0,0,0,0.3)] hover:bg-primary hover:scale-110 transition duration-300 cursor-pointer flex flex-col items-center text-center gap-4 p-6"
              >
                <Icon className="text-4xl text-secondary transition duration-500 group-hover:text-white">
                  
                </Icon>
                <div>
                  <h1 className="text-lg font-medium font-averia transition duration-500 group-hover:text-white">
                    {service.title}
                  </h1>
                  <p className="text-md mt-3 font-light text-secondary font-averia transition duration-500 group-hover:text-white">
                    {service.description}
                  </p>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      </>
    )
  }

  export default Services