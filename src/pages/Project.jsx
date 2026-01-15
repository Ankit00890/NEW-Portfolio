import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import interviewPrep from '../assets/interview-prep.png';
import Portfolio from '../assets/Portfolio.png';
import Roda from '../assets/Roda.png'
const Project = () => {
    const projects = [
        {
            title: "Interview Prep AI",
            description: "An AI-powered platform to help users prepare for technical interviews with real-time feedback and mock sessions.",
            image: interviewPrep,
            tags: ["React", "Node.js", "Gemini API"],
            links: {
                github: "https://github.com/Ankit00890/Interview-prep-ai",
                live: "https://interview-prep-ai-smoky-theta.vercel.app/"
            }
        },
        {
            title: "Portfolio",
            description: "A modern, fully responsive personal portfolio website featuring glassmorphism design and smooth animations.",
            image: Portfolio,
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            links: {
                github: "https://github.com/Ankit00890/Portfolio",
                live: "#"
            }
        },
        {
            title: "E-Commerce Platform",
            description: "ongoing",
            image: "",
            tags: ["MERN Stack", "Stripe", "Redux"],
            links: {
                github: "#",
                live: "#"
            }
        },
        {
            title: "Roda Beauty",
            description: "A modern beauty website showcasing skincare and cosmetic products.",
            image: Roda,
            tags: ["WordPress", "Elementor", "WooCommerce"],
            links: {
                live: "https://rodabeauty.gt.tc/"
            }
        }
    ];

    return (
        <section id="projects" className="max-w-7xl mx-auto px-4 py-20 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    My <span className="text-[#1cd8d2]">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cd8d2] to-transparent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#1cd8d2]/50 transition-colors"
                    >
                        {/* Image Placeholder */}
                        <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-500 relative flex items-center justify-center">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-gray-500">Ongoing</span>
                            )}

                            {/* Overlay Links */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href={project.links.github} className="p-3 bg-white/10 rounded-full hover:bg-[#1cd8d2] hover:text-black transition-colors text-white">
                                    <FaGithub size={20} />
                                </a>
                                <a href={project.links.live} className="p-3 bg-white/10 rounded-full hover:bg-[#1cd8d2] hover:text-black transition-colors text-white">
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1cd8d2] transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-3 py-1 bg-white/5 rounded-full text-[#1cd8d2] border border-[#1cd8d2]/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Project;
