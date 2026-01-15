import React from 'react';
import { motion } from 'framer-motion';
import { StarBackground } from '../components/StarBackground';

const About = () => {
    return (
        <section id="about" className="min-h-screen relative bg-black text-white py-20 px-6 overflow-hidden">
            <StarBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-[#1cd8d2]">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cd8d2] to-transparent mx-auto" />
                </motion.div>

                {/* Content Container */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Image/Visual or styled text box if no image provided */}
                    {/* Since user didn't provide specific image for About, using a creative text layout or glass card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#1cd8d2] to-purple-600 rounded-2xl blur-lg opacity-30" />
                        <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                I’m a <span className="text-white font-semibold">full-stack MERN developer</span> who turns ideas into interactive digital experiences. I enjoy working at the intersection of logic and creativity—building robust backends while crafting fluid, animated frontends that feel alive.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                My core stack includes <span className="text-[#1cd8d2]">React</span> for dynamic interfaces, <span className="text-[#1cd8d2]">Node & Express</span> for scalable APIs, and <span className="text-[#1cd8d2]">MongoDB</span> for efficient data handling. I enhance user engagement using Tailwind CSS, GSAP, and Framer Motion, ensuring every interaction feels smooth and intentional.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side - Continued Text & Stats/Tags */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Beyond coding, I rely on <span className="text-white">GitHub</span> for version control, <span className="text-white">Postman</span> for API testing, and AI tools like <span className="text-white">Gemini</span> to optimize workflows and explore smarter solutions. I value clean code, performance, and continuous improvement in everything I build.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            I’m always experimenting, learning, and pushing my limits—because great products are built when <span className="text-[#1cd8d2] font-semibold">curiosity meets consistency</span>.
                        </p>

                        {/* Tech Tags */}
                        {/* <div className="flex flex-wrap gap-3">
                            {["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Framer Motion", "GSAP"].map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#1cd8d2] hover:bg-[#1cd8d2]/10 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
