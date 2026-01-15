import React, { useEffect, useState } from "react";
import BallCanvas from "./BallMotion";
import { motion } from "framer-motion";
import reaact from "../assets/react.jpg";
import node from "../assets/node.jpg";
import Express from "../assets/Express.png";
import mongoDB from "../assets/MongoDB.png";
import github from "../assets/Github.jpg";
import Framer from "../assets/Framer.jpg";
import gsap from "../assets/gsap.png";
import postman from "../assets/postman.jpg";

//  technologies array to use reliable URLs
const technologiesData = [
  {
    name: "HTML 5",
    icon: "/tech/html.jpg",
  },
  {
    name: "CSS 3",
    icon: "/tech/css3.jpg",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.jpg",
  },
  {
    name: "tailwind",
    icon: "/tech/tailwindcss.jpg",
  },
  {
    name: "React JS",
    icon: reaact,
  },
  {
    name: "Mongo",
    icon: mongoDB,
  },
  {
    name: "Git",
    icon: github,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "Node",
    icon: node
  },
  {
    name: "Framer Motion",
    icon: Framer,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Gsap",
    icon: gsap
  },
];

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section id="skills" className="max-w-7xl mx-auto relative z-10 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ski<span className="text-[#1cd8d2]">lls</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cd8d2] to-transparent mx-auto" />
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologiesData.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            {isMobile ? (
              <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-full p-4 border border-white/10">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
