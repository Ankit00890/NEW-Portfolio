import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // Replace these IDs with your actual EmailJS credentials
        // Sign up at https://www.emailjs.com/
        // 1. Create a service (e.g., Gmail) -> Service ID
        // 2. Create a template -> Template ID
        // 3. Get your Public Key from Account Settings
        emailjs.sendForm(
            'service_17lan4q',
            'template_2sz8vbi',
            form.current,
            'R6221sIjJpW_Jy9jq'
        )
            .then((result) => {
                setLoading(false);
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                form.current.reset();

                // Clear success message after 5 seconds
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            }, (error) => {
                setLoading(false);
                setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
                console.error(error.text);
            });
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Animations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#1cd8d2] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Let's <span className="text-[#1cd8d2]">Connect</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cd8d2] to-transparent mx-auto" />
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Send me a message and let's create something amazing together.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual/Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative hidden md:block"
                    >
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1cd8d2]/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#1cd8d2] shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <a href="mailto:chankit00078@gmail.com" className="hover:text-[#1cd8d2] transition-colors">chankit00078@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#1cd8d2] shrink-0">
                                        <FaUser />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Role</p>
                                        <p>Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Code Snippet */}
                            <div className="mt-8 p-4 bg-black/50 rounded-lg font-mono text-sm text-gray-400 border border-white/5">
                                <p><span className="text-purple-400">const</span> <span className="text-[#1cd8d2]">contactMe</span> = <span className="text-yellow-300">()</span> <span className="text-purple-400">=&gt;</span> {"{"}</p>
                                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">"Let's build something awesome!"</span>;</p>
                                <p>{"}"};</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl md:p-10 relative z-20"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">

                            {/* Name Input */}
                            <div className="relative group">
                                <FaUser className="absolute left-4 top-4 text-gray-500 group-focus-within:text-[#1cd8d2] transition-colors" />
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#1cd8d2] focus:ring-1 focus:ring-[#1cd8d2] transition-all"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="relative group">
                                <FaEnvelope className="absolute left-4 top-4 text-gray-500 group-focus-within:text-[#1cd8d2] transition-colors" />
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#1cd8d2] focus:ring-1 focus:ring-[#1cd8d2] transition-all"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="relative group">
                                <FaCommentAlt className="absolute left-4 top-4 text-gray-500 group-focus-within:text-[#1cd8d2] transition-colors" />
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#1cd8d2] focus:ring-1 focus:ring-[#1cd8d2] transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Status Message */}
                            {status.message && (
                                <div className={`p-3 rounded-lg text-sm text-center ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                    {status.message}
                                </div>
                            )}

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-[#1cd8d2] to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-[#1cd8d2]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
