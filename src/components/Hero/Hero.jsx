import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import HeroPng from "../../assets/img/hero/back.png"
import HeroPng1 from "../../assets/img/hero/backimg.png"
import { FadeRight } from '../../utility/animation'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <section>
        <div id='hero' className="container grid grid-cols-1 md:grid-cols-2 min-h-[750px] relative font-averia">
 
            {/* Brand Info */}
            <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
                <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                    <motion.h1 
                    variants={FadeRight(0.6)}
                    initial="hidden"
                    animate="visible"
                    className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose text-secondary'>Healthy
                    <br />
                    Fresh <span className='text-primary'>Food!</span>
                    </motion.h1>
                    <motion.p
                    variants={FadeRight(0.9)}
                    initial="hidden"
                    animate="visible"
                     className='text-2xl tracking-wide'>Happiness, one bite at a time.</motion.p>
                    
                    <motion.p 
                    variants={FadeRight(1.2)}
                    initial="hidden"
                    animate="visible"
                    className='text-gray-500'>Welcome to Bite & Bliss, where every meal is a masterpiece and every bite brings a moment of joy! We believe that food is not just about taste but about creating experiences that leave a lasting impression</motion.p>

                    {/* button section */}
                    <motion.div
                    variants={FadeRight(1.5)}
                    initial="hidden"
                    animate="visible"
                     className='flex justify-center md:justify-start'>
                        <button className='primary-btn flex items-center gap-2'><span><IoBagHandleOutline /></span>Order Now</button>
                    </motion.div>
                </div>
            </div>

            {/* Hero images */}
            <div
             className='flex justify-center items-center'>
                <motion.img 
                    initial={{opacity: 0, x: 200, rotate: 75}}
                    animate= {{opacity: 1, x: 0, rotate: 0}}
                    transition= {{duration: 1, delay: 0.2}}
                src={HeroPng} alt="" className='w-[350px] md:w-[550px] mt-10'/>
            </div>
            {/* Leaf img */}
            <div className=" w-[260px] md:w-[260px] mt-20 mr-14 absolute top-14 md:top-0 right-1/2 blur-sm opacity-90">
                <motion.img 
                    initial={{opacity: 0, y: -200, rotate: 75}}
                    animate= {{opacity: 1, y: 0, rotate: 0}}
                    transition= {{duration: 1, delay: 1.0}}
                src={HeroPng1} alt="" className='w-full md:max-w-[300px]'/>
            </div>
        </div>
    </section>
  )
}

export default Hero
