import React from 'react'
import { motion } from 'framer-motion'
import { FadeLeft, FadeRight, FadeUp } from '../../utility/animation'
import { speciality } from '../../assets/assets'

const OurSpeciality = () => {
  return (
    
//     <>
//   <h1 className="text-3xl text-center my-20 font-bold text-secondary mb-2 font-cinzel">Our Speciality</h1>
//   <p className="text-lg text-secondary mb-6 font-averia text-center">Choose from a diverse menu featuring a variety of food</p>

//   {speciality.map((item, index) => (
//     <motion.section key={index}  
//     initial="hidden"
//       animate="visible"
//       variants={FadeUp(0.2)} 
//       className={index % 2 === 1 ? 'bg-secondary/10' : ''}>
//       <div className='max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
        
//         {/* Conditional Rendering: Image on Right (Even Index) / Image on Left (Odd Index) */}
//         {index % 2 === 0 ? (
//           <>
//             {/* Text on Left */}
//             <motion.div className='flex flex-col justify-center md:pl-10' variants={FadeLeft(0.3)}>
//               <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
//                 <motion.h1 
//                   variants={FadeUp(0.4)}
//                   className='text-3xl lg:text-5xl font-cinzel font-semibold'>
//                   {item.menu_name}
//                 </motion.h1>
//                 <motion.p 
//                   variants={FadeUp(0.5)}>
//                   {item.description}
//                 </motion.p>
//                 <motion.div
//                   variants={FadeUp(0.8)}
//                   className='flex justify-center md:justify-start'>
//                   <button className='primary-btn'>Learn more</button>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Image on Right */}
//             <div className='flex justify-center items-center md:order-last'>
//               <motion.img 
//                 initial={{opacity: 0, scale: 0.5}}
//                 whileInView={{opacity: 1, scale:1}}
//                 transition={{type: "spring", stiffness:100, delay: 0.2}}
//                 src={item.menu_img} alt={item.menu_name} 
//                 className='w-[500px] md:max-w-[400px] h-full object-cover' />
//             </div>
//           </>
//         ) : (
//           <>
//             {/* Image on Left */}
//             <div className='flex justify-center items-center'>
//               <motion.img 
//                 initial={{opacity: 0, scale: 0.5}}
//                 whileInView={{opacity: 1, scale:1}}
//                 transition={{type: "spring", stiffness:100, delay: 0.2}}
//                 src={item.menu_img} alt={item.menu_name} 
//                 className='w-[500px] md:max-w-[400px] h-full object-cover' />
//             </div>

//             {/* Text on Right */}
//             <motion.div variants={FadeRight(0.3)} className='flex flex-col justify-center md:pl-10'>
//               <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
//                 <motion.h1 
//                   variants={FadeUp(0.4)}
//                   className='text-3xl lg:text-5xl font-cinzel font-semibold'>
//                   {item.menu_name}
//                 </motion.h1>
//                 <motion.p 
//                   variants={FadeUp(0.5)}>
//                   {item.description}
//                 </motion.p>
//                 <motion.div
//                   variants={FadeUp(0.8)}
//                   className='flex justify-center md:justify-start'>
//                   <button className='primary-btn'>Learn more</button>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </>
//         )}

//       </div>
//     </motion.section>
//   ))}
//     </>

    <>
      <div id="speciality">
        <h1 className="text-3xl text-center my-20 font-bold text-secondary mb-2 pb-4 font-cinzel underline decoration-primary">
        Our Special Dishes
      </h1>
      <p className="text-lg text-secondary mb-0 font-averia text-center">
      Bite Into Bliss – Our Chef’s Top Picks!

      </p>

      {speciality.map((item, index) => (
        <motion.section
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} //once:false - here content wil display again nd again
          variants={FadeUp(0.2)}
          className={index % 2 === 1 ? 'bg-secondary/10' : ''}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {index % 2 === 0 ? (
              <>
                {/* Text on Left */}
                <motion.div
                  className="flex flex-col justify-center md:pl-10"
                  variants={FadeLeft(0.3)}
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                    <motion.h1
                      variants={FadeUp(0.4)}
                      whileInView="visible"
                      viewport={{ once: false }}
                      className="text-3xl lg:text-4xl font-cinzel font-semibold "
                    >
                      {item.menu_name}
                    </motion.h1>
                    <motion.p
                      variants={FadeUp(0.5)}
                      whileInView="visible"
                      viewport={{ once: false }}
                      className='font-averia'
                    >
                      {item.description}
                    </motion.p>
                    <motion.div
                      variants={FadeUp(0.8)}
                      whileInView="visible"
                      viewport={{ once: false }}
                      className="flex justify-center md:justify-start"
                    >
                      <button className="primary-btn font-averia">View Full Menu</button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Image on Right */}
                <div className="flex justify-center items-center md:order-last">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    src={item.menu_img}
                    alt={item.menu_name}
                    className="w-[500px] md:max-w-[400px] h-full object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image on Left */}
                <div className="flex justify-center items-center">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    src={item.menu_img}
                    alt={item.menu_name}
                    className="w-[500px] md:max-w-[400px] h-full object-cover"
                  />
                </div>

                {/* Text on Right */}
                <motion.div
                  variants={FadeRight(0.3)}
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="flex flex-col justify-center md:pl-10"
                >
                  <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                    <motion.h1
                      variants={FadeUp(0.4)}
                      whileInView="visible"
                      viewport={{ once: false }}
                      className="text-3xl lg:text-4xl font-cinzel font-semibold"
                    >
                      {item.menu_name}
                    </motion.h1>
                    <motion.p
                      variants={FadeUp(0.5)}
                      whileInView="visible"
                      viewport={{ once: false }}
                      className='font-averia'
                    >
                      {item.description}
                    </motion.p>
                    <motion.div
                      variants={FadeUp(0.8)}
                      whileInView="visible"
                      viewport={{ once: false }}
                      className="flex justify-center md:justify-start"
                    >
                      <button className="primary-btn font-averia">View Full Menu</button>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </motion.section>
      ))}
      </div>
    </>
  )
}

export default OurSpeciality
