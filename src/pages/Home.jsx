import React, { useEffect } from 'react';
import { useMemo, useState } from 'react';
import { StarBackground } from '../components/StarBackground'
import { hover, motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import avatar3 from "../assets/avatar3.png"
import About from './About';
import Experience from './Experience';
import Tech from '../components/Tech';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
const socials = [
  { Icon: FaGithub, label: "Github", href: "https://github.com/Ankit00890" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ankit-kumar-747109317" }
]

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2, y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stifness: 300, damping: 15 }
  },

  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
}
export default function Home() {
  const roles = useMemo(() => ["Web Developer", "MERN Stack Developer", "Frontend Developer", "React Developer"]
  )
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(0)

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex(v => v + 1);
      else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200)
      else if (deleting && subIndex > 0) setSubIndex(v => v - 1)
      else if (deleting && subIndex === 0) { setDeleting(false); setIndex(p => (p + 1) % roles.length) }
    }, deleting ? 40 : 60)
    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting, roles])

  return (
    <section id="home" className="relative bg-black text-white overflow-hidden">
      <StarBackground />

      {/* Hero Section Container */}
      <div className="min-h-screen relative mb-20 flex items-center pt-20">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="
          absolute -top-32 -left-32
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse">

          </div>

          <div
            className="
          absolute -bottom-0 -right-0
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse delay-500
        "
            style={{ top: "auto", bottom: "-8rem", left: "auto", right: "-8rem" }}
          ></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center text-center lg:text-left relative">
            <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
              <motion.div
                className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span>
                  {roles[index].substring(0, subIndex)}
                </span>
              </motion.div>
              <motion.h1 className='text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-xl'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Hello I'm
                <br />
                <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                  Ankit Kumar
                </span>
              </motion.h1>
              <motion.p className='mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                I turn complex ideas into seamless, high-impact web experiences - building modern, scalable, and lightning-fast applications that make a difference.
              </motion.p>

              <motion.div className='mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <a href="#projects"
                  className='px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
           shadow-lg hover:scale-107 transition-all'
                >view My work</a>
                <a href="https://drive.google.com/file/d/1d86wn7dKDMpwqzHN0DNcgdRM-f7asYfs/view?usp=sharing"
                  
                  className="px-6 py-3 rounded-full font-medium text-lg text-black bg-white  shadow-lg hover:scale-107 transition-all"
                > My Resume</a>
              </motion.div>

              {/* My github & likndien */}
              <motion.div
                className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {socials.map(({ Icon, label, href }) => (
                  <motion.a
                    href={href}
                    key={label}
                    target="_blank"
                    aria-label={label}
                    rel="noopener noreferrer"
                    variants={glowVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="text-gray-300"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1.0, type: "spring", stiffness: 100 }}
              className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px]"
            >
              {/* Optional: Add a glowing effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cd8d2] to-[#302b63] rounded-full blur-[80px] opacity-40 animate-pulse" />

              <motion.img
                src={avatar3}
                alt="Ankit Kumar - Developer"
                className="relative w-full h-full object-contain filter drop-shadow-2xl z-10"
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Project />
      <Contact />
      <Footer />
    </section >

  );
}
