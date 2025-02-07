import React from 'react'
import BannerPng from '../../assets/img/hero/bg8.jpg'
import { motion } from 'framer-motion'
import { FadeUp } from '../../utility/animation'

// const About = () => {
//   return (
//     <section id='about' className='bg-secondary/10'>
//         <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>       
//             {/* Banner Image */}
//             <div className='flex justify-center items-center'>
//                 <motion.img 
//                     initial={{opacity: 0, scale: 0.5}}
//                     whileInView={{opacity: 1, scale:1}}
//                     transition={{type: "veg", stiffness:100, delay: 0.2}}
//                     // viewport={{once:true}} //here when there is true then it will in animation only once
//                     src={BannerPng} alt="" className='w-[500px] md:max-w-[400px] h-full object-cover' />
//             </div>

//             {/* About Info */}
//             <div className='flex flex-col justify-center font-averia'>
//                 <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
//                     <motion.h1  //here  initial="hidden" and viewport:false and whileinview is mandatory to apply the animation
//                         variants={FadeUp(0.4)}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: false }}
//                         className='text-2xl lg:text-4xl font-cinzel font-semibold underline decoration-primary'>
//                         Abous Us
//                     </motion.h1>
//                     <motion.p 
//                         variants={FadeUp(0.5)}
//                          initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: false }}>Welcome to Bite & Bliss, where every meal is a masterpiece and every bite brings a moment of joy!
//                     </motion.p>
//                     <motion.p 
//                         variants={FadeUp(0.6)}
//                          initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: false }}>Our chefs bring passion and creativity to every dish, ensuring a delightful fusion of flavors that cater to every palate. Whether you're here for a cozy family dinner, a casual lunch with friends, or a romantic evening, our warm ambiance and exceptional service promise a memorable time.
//                     </motion.p>
//                     <motion.p 
//                         variants={FadeUp(0.7)}
//                          initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: false }}>At Bite & Bliss, we don’t just serve food—we serve happiness
//                     </motion.p>
//                     {/* button section */}
//                     <motion.div
//                         variants={FadeUp(0.8)}
//                          initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: false }}
//                         className='flex justify-center md:justify-start'>
//                         <button className='primary-btn'>Learn more</button>
//                     </motion.div>
//                 </div>
//             </div>

//         </div>
//     </section>
//   )
// }

// Changes for screen size 1024
const About = () => {
    return (
      <section id='about' className='bg-secondary/10'>
        <div className='container grid grid-cols-1 lg:grid-cols-2 space-y-6 lg:space-y-0 py-14'>       
          {/* Banner Image */}
          <div className='flex justify-center items-center'>
            <motion.img 
              initial={{opacity: 0, scale: 0.5}}
              whileInView={{opacity: 1, scale:1}}
              transition={{type: "spring", stiffness:100, delay: 0.2}}
              src={BannerPng} alt="" className='w-[500px] lg:max-w-[400px] h-full object-cover' />
          </div>
  
          {/* About Info */}
          <div className='flex flex-col justify-center font-averia'>
            <div className='text-center lg:text-left space-y-4 lg:max-w-[400px]'>
              <motion.h1  
                variants={FadeUp(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className='text-2xl lg:text-4xl font-cinzel font-semibold underline decoration-primary'>
                About Us
              </motion.h1>
              <motion.p variants={FadeUp(0.5)} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                Welcome to Bite & Bliss, where every meal is a masterpiece and every bite brings a moment of joy!
              </motion.p>
              <motion.p variants={FadeUp(0.6)} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                Our chefs bring passion and creativity to every dish, ensuring a delightful fusion of flavors that cater to every palate.
              </motion.p>
              <motion.p variants={FadeUp(0.7)} initial="hidden" whileInView="visible" viewport={{ once: false }}>
                At Bite & Bliss, we don’t just serve food—we serve happiness.
              </motion.p>
              <motion.div variants={FadeUp(0.8)} initial="hidden" whileInView="visible" viewport={{ once: false }} className='flex justify-center lg:justify-start'>
                <button className='primary-btn'>Learn more</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default About
