import BallCanvas from "./BallMotion";
import { motion } from "framer-motion"
import htmlIcon from '../assets/htmlIcon.jpg';
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import reaact from "../assets/react.jpg";
import node from "../assets/node.jpg";
import Express from "../assets/Express.png";
import mongoDB from "../assets/MongoDB.png";
import tailwind from "../assets/tailwind.jpg";
import github from "../assets/Github.jpg";
import Framer from "../assets/Framer.jpg";
import gsap from "../assets/gsap.png";
import postman from "../assets/postman.jpg";
//  technologies array to use reliable URLs
const technologiesData = [
  {
    name: "HTML 5",
    icon: htmlIcon,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "tailwind",
    icon: tailwind,
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
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
