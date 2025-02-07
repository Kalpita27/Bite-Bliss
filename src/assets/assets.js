// menu images 
import menu_1 from './img/Snacks/bg.jpg'
import menu_2 from './img/veg/bg.jpeg'
import menu_3 from './img/nonveg/bg.jpg'
import menu_4 from './img/rice/bg.jpg'
import menu_5 from './img/healthy/bg.jpg'
import menu_6 from './img/dessert/bg.jpg'

// special images
import special_1 from './img/speaciality/palakpaneer.png'
import special_2 from './img/speaciality/chickenTandoori.png'
import special_3 from './img/speaciality/acaismoothie.png'

// services data
import { TbTruckDelivery } from "react-icons/tb";
import { GiMeal } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import { BiSolidDish } from "react-icons/bi";

// Chefs images 
import Chef1 from '../assets/img/Chef/vikas.jpeg'
import Chef2 from '../assets/img/Chef/ranveer1.jpg'

// Customer review images
import prof1 from './img/Review/prof1.jpg'
import prof2 from './img/Review/prof2.jpg'
import prof3 from './img/Review/prof3.png'
import prof4 from './img/Review/prof4.jpg'

import { delay } from 'framer-motion'

export const menu_list = [
    {
        menu_name: "Snacks",
        menu_img: menu_1,
        delay: 0.1
    },
    {
        menu_name: "Veg",
        menu_img: menu_2,
        delay: 0.2
    },
    {
        menu_name: "NonVeg",
        menu_img: menu_3,
        delay: 0.3
    },
    {
        menu_name: "Rice",
        menu_img: menu_4,
        delay: 0.4
    },
    {
        menu_name: "Healthy",
        menu_img: menu_5,
        delay: 0.5
    },
    {
        menu_name: "Dessert",
        menu_img: menu_6,
        delay: 0.6
    },
    {
        menu_name: "Dessert",
        menu_img: menu_6,
        delay: 0.7
    },
    // {
    //     menu_name: "Dessert",
    //     menu_img: menu_6,
    //     delay: 0.8
    // },
    
]

export const speciality = [
    {
        menu_name: "Palak Paneer",
        menu_img: special_1,
        description: "A wholesome and creamy North Indian dish, our Palak Paneer features soft, homemade paneer cubes cooked in a smooth, vibrant spinach gravy infused with garlic, ginger, and Indian spices. Rich in nutrients and packed with flavor, this vegetarian delight pairs perfectly with naan or steamed basmati rice, making it a heartwarming and healthy choice.",
        delay: 0.1
    },
    {
        menu_name: "Chicken Tandoori",
        menu_img: special_2,
        description: "A classic Indian delicacy, our Chicken Tandoori is marinated in a blend of yogurt, garlic, ginger, and a mix of aromatic spices, then roasted to perfection in a traditional tandoor. With its smoky flavor, juicy texture, and a perfect balance of spice, this dish is a must-try for lovers of bold flavors. Served with mint chutney and fresh onion rings, it's a feast for your taste buds.",
        delay: 0.1
    },
    {
        menu_name: "acai smoothie",
        menu_img: special_3,
        description: "Our Fruit Smoothie Bowl is a delicious and refreshing treat, made with a creamy blend of fresh berries, bananas, and yogurt, topped with a colorful mix of kiwi slices, strawberries, blueberries, granola, and banana slices. Packed with natural sweetness and nutrients, it's a perfect way to start your day or enjoy a guilt-free indulgence. A delightful mix of crunch and smoothness in every bite!",
        delay: 0.1
    },
]

export const services = [
  {
    id: 1,
    title: "Flash Delivery",
    description: "Craving something delicious? We deliver your favorite meals fresh and hot to your doorstep in no time!",
    delay: 0.2,
    icon: TbTruckDelivery
    // icon: () => <TbTruckDelivery className="text-4xl text-primary" />, // Store a function returning JSX
  },
  {
    id: 2,
    title: "Fresh & Organic Ingredients",
    description: "Step into a warm and inviting atmosphere perfect for family gatherings, date nights, and friendly meetups.",
    delay: 0.4,
    icon: GiMeal
    // icon: () => <GiMeal className="text-4xl text-primary" />,
  },
  {
    id: 3,
    title: "Award-Winning Chefs",
    description: "Our talented award-winning chefs bring passion and expertise to every dish, crafting a unique fusion of flavors that will leave you craving more. ",
    delay: 0.6,
    icon: FaAward
    // icon: () => <FaAward className="text-4xl text-primary" />,
  },
  {
    id: 4,
    title: "Cozy & Family-Friendly Ambiance",
    description: "Step into a warm and inviting atmosphere perfect for family gatherings, date nights, and friendly meetups. ",
    delay: 0.8,
    icon: BiSolidDish
    // icon: () => <BiSolidDish className="text-4xl text-primary" />,
  },
];

export const chefs = [
    {
      name: "Vikas",
      img: Chef1,
      description: "Expert in gourmet dishes, blending flavors with perfection.",
    },
    {
      name: "Ranveer",
      img: Chef2,
      description: "A culinary artist specializing in Italian & French cuisine.",
    },
    {
      name: "Vikas",
      img: Chef1,
      description: "Passionate about creating delicious and healthy meals.",
    },
    {
      name: "Sanjeev",
      img: Chef2,
      description: "Master of desserts, bringing sweetness to every dish.",
    },
  ];

 export const customers = [
    {
      id: 1,
      name: "Aditya",
      // role: "Web Developer",
      image: prof1,
      text: "🌟 “Absolutely loved the ambiance and food! The flavors were exquisite, and the service was top-notch. Highly recommended!”",
      rating: 5,
    },
    {
      id: 2,
      name: "Aastha",
      // role: "Graphic Designer",
      image: prof2,
      text: "🌟 “Bite & Bliss truly lives up to its name! Every dish was a burst of flavors, and the presentation was just stunning.”",
      rating: 5,
    },
    {
      id: 3,
      name: "Kalpita",
      // role: "Marketing Manager",
      image: prof3,
      text: "🌟 “The best dining experience I’ve had in a long time. Great atmosphere, friendly staff, and food that made my taste buds dance!”",
      rating: 4,
    },
    {
      id: 4,
      name: "Prajwal",
      // role: "Content Creator",
      image: prof4,
      text: "🌟 “Perfect place for food lovers! Their menu is diverse, and every dish feels like it’s made with love.”",
      rating: 5,
    },
    
    {
      id: 5,
      name: "Aditya",
      // role: "Web Developer",
      image: prof1,
      text: "🌟 “Absolutely loved the ambiance and food! The flavors were exquisite, and the service was top-notch. Highly recommended!”",
      rating: 5,
    },
    {
      id: 6,
      name: "Aastha",
      // role: "Graphic Designer",
      image: prof2,
      text: "🌟 “Bite & Bliss truly lives up to its name! Every dish was a burst of flavors, and the presentation was just stunning.”",
      rating: 5,
    },
    {
      id: 7,
      name: "Kalpita",
      // role: "Marketing Manager",
      image: prof3,
      text: "🌟 “The best dining experience I’ve had in a long time. Great atmosphere, friendly staff, and food that made my taste buds dance!”",
      rating: 4,
    },
    {
      id: 8,
      name: "Prajwal",
      // role: "Content Creator",
      image: prof4,
      text: "🌟 “Perfect place for food lovers! Their menu is diverse, and every dish feels like it’s made with love.”",
      rating: 5,
    },
    
  ];