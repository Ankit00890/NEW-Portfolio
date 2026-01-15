import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative z-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Work <span className="text-[#1cd8d2]">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cd8d2] to-transparent mx-auto" />
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1cd8d2]/20 transform md:-translate-x-1/2"></div>

                    {/* Zyrixcraft Experience */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12">
                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#1cd8d2] rounded-full transform -translate-x-1/2 border-4 border-black z-10 box-content"></div>

                        {/* Date (Left Side on Desktop) */}
                        <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-12 md:pl-0 flex justify-start md:justify-end w-full">
                            <span className="text-[#1cd8d2] font-semibold tracking-wider text-xl">April 2025 - October 2025</span>
                        </div>

                        {/* Content (Right Side on Desktop) */}
                        <div className="md:w-1/2 md:pl-12 w-full pl-12">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-[#1cd8d2]/50 transition-colors relative"
                            >
                                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden md:block w-4 h-0.5 bg-[#1cd8d2]/50"></div>

                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-[#1cd8d2]/10 p-2 rounded-lg text-[#1cd8d2]">
                                        <FaBriefcase size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Full Stack & WordPress Developer</h3>
                                </div>

                                <h4 className="text-lg font-semibold text-[#1cd8d2] mb-4">Zyrixcraft</h4>

                                <ul className="list-disc ml-5 space-y-2 text-gray-300">
                                    <li className="text-sm tracking-wider">
                                        Developed dynamic and responsive websites including the <a href="https://zyrixcraft-price-website.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#1cd8d2] hover:underline">Zyrixcraft Price Chart link</a>.
                                    </li>
                                    <li className="text-sm tracking-wider">
                                        Created a Shoes Website frontend with modern UI/UX practices.
                                    </li>
                                    <li className="text-sm tracking-wider">
                                        Built and managed the Roda Beauty WordPress site.
                                    </li>
                                    <li className="text-sm tracking-wider">
                                        Contributed to live websites and collaborated with the team to deliver high-quality solutions.
                                    </li>
                                </ul>

                                <div className="mt-6 flex gap-3 flex-wrap">
                                    <a href="https://github.com/Ankit00890" className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-[#1cd8d2] hover:text-black transition-colors text-white">
                                        GitHub
                                    </a>
                                    <a href="https://drive.google.com/file/d/1rMB3MT332DbefDUI3CtfCkwYmAbpOM2m/view?usp=sharing" className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-[#1cd8d2] hover:text-black transition-colors text-white">
                                        Certificate
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
