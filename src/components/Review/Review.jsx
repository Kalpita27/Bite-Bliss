import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { customers } from '../../assets/assets';


const Review = () => {
//   return (
//     <div className="overflow-hidden w-full bg-black py-12">
//     <div className="relative max-w-screen-xl mx-auto">
//       <motion.div
//         className="flex space-x-6"
//         initial={{ x: 0 }}
//         animate={{ x: "-100%" }}
//         transition={{
//           repeat: Infinity,
//           ease: "linear",
//           duration: 20, // Adjust speed
//         }}
//       >
//         {/* Duplicate images to create an infinite loop effect */}
//         {[...images, ...images].map((item, index) => (
//           <div
//             key={index}
//             className="w-[300px] h-[400px] flex-shrink-0 relative"
//           >
//             <img
//               src={item.src}
//               alt={item.title}
//               className="w-full h-full object-cover rounded-xl shadow-lg"
//             />
//             <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2">
//               {item.title}
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   </div>
//   )

    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Instead of jumping by 2, move by 1  and customers/length/2 for smoother navigation - if here we declared as (prevIndex + 2) % customers.length) then the dots below review cards are move by one and fourth i.e by dropping 2 dots directly. so use  (prevIndex + 1) % customers.length/2)
        setIndex((prevIndex) => (prevIndex + 1) % customers.length/2);
      }, 5000); // Auto slide every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      // bg-gradient-to-r from-cyan-500 to-blue-500 py-12 - use for backgorund
      <div className="bg-white-200 py-12">
        <h2 className="text-center text-2xl md:text-3xl py-5 mt-16 font-bold text-secondary underline decoration-primary font-cinzel">
          What Our Clients Say
        </h2>
        <p className='text-md text-secondary mt-0 font-averia max-w-2xl mx-auto text-center'>At Bite & Bliss, our customers are at the heart of everything we do. From first-time visitors to our beloved regulars, we are honored to serve each of you and create unforgettable dining experiences.
</p>
  
        <div className="relative max-w-5xl mx-auto overflow-hidden mt-8 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-center md:items-stretch"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "tween", duration: 0.8 }}
            >
              {customers.slice(index, index + 2).map((customer) => (
                <div
                  key={customer.id}
                  className="bg-blue-100 p-6 rounded-lg shadow-xl w-full sm:w-[90%] md:w-[45%] flex-shrink-0"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-semibold font-cinzel">{customer.name}</h4>
                      <p className="text-gray-500 text-sm">{customer.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-center sm:text-left font-averia">{customer.text}</p>
                  <div className="mt-3 text-yellow-500 flex justify-center sm:justify-start">
                    {"★".repeat(customer.rating)}
                    {"☆".repeat(5 - customer.rating)}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
  
          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {customers.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  index === i ? "bg-primary" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    );
  };
 

export default Review
