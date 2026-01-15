import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Project", href: "#projects" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-black/50 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">

                {/* Desktop Links - Centered (visually) */}
                <div className="hidden md:flex gap-8 items-center bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm mx-auto">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveTab(link.name)}
                            className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors z-10 ${activeTab === link.name ? "text-white" : "text-gray-400 hover:text-gray-200"
                                }`}
                        >
                            {link.name}
                            {activeTab === link.name && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1cd8d2] to-transparent shadow-[0_0_10px_rgba(28,216,210,0.8)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {activeTab === link.name && (
                                <motion.div
                                    layoutId="activeTab-top"
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1cd8d2] blur-[20px] opacity-40 rounded-full pointer-events-none"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* Connect Button (Desktop Positioned Right Absolute) */}
                <div className="hidden md:block absolute right-6">
                    <a href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 rounded-full border border-[#1cd8d2]/50 text-[#1cd8d2] text-sm font-medium hover:bg-[#1cd8d2]/10 transition-colors"
                        >
                            Connect
                        </motion.button>
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                {!mobileMenuOpen && (
                    <div className="md:hidden absolute right-6 text-white text-2xl cursor-pointer bg-white/10 p-2 rounded-md backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <FaBars />
                    </div>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center"
                    >
                        <div className="absolute top-6 right-6 text-white text-2xl cursor-pointer bg-white/10 p-2 rounded-md backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <FaTimes />
                        </div>

                        <ul className="flex flex-col items-center gap-8">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => {
                                            setActiveTab(link.name);
                                            setMobileMenuOpen(false);
                                        }}
                                        className={`text-2xl font-medium tracking-wider uppercase ${activeTab === link.name ? "text-[#1cd8d2]" : "text-gray-300"
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full block">
                                    <button
                                        className="w-full px-8 py-3 rounded-full border border-[#1cd8d2] text-[#1cd8d2] text-lg font-medium hover:bg-[#1cd8d2]/10 transition-colors">
                                        Connect
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
