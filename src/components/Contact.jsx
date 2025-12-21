import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaHackerrank } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel p-8 md:p-12 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-8"><span className="text-gradient">Get In Touch</span></h2>

                    <div className="space-y-4 text-lg text-text-muted mb-10">
                        <p className="flex items-center justify-center gap-3">
                            <FaEnvelope className="text-primary" /> sbshihab2000@gmail.com
                        </p>
                        <p className="flex items-center justify-center gap-3">
                            <FaPhone className="text-primary" /> +880 1790606985
                        </p>
                        <p className="flex items-center justify-center gap-3">
                            <FaMapMarkerAlt className="text-primary" /> Dhaka, Bangladesh
                        </p>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/sbshihab24" target="_blank" rel="noopener noreferrer" className="text-3xl text-text-muted hover:text-white hover:scale-110 transition-all">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/shihab24" target="_blank" rel="noopener noreferrer" className="text-3xl text-text-muted hover:text-[#0077b5] hover:scale-110 transition-all">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/mh.shihab.370" target="_blank" rel="noopener noreferrer" className="text-3xl text-text-muted hover:text-[#1877f2] hover:scale-110 transition-all">
                            <FaFacebook />
                        </a>
                        <a href="https://hackerrank.com/sbshihab2000" target="_blank" rel="noopener noreferrer" className="text-3xl text-text-muted hover:text-[#2ec866] hover:scale-110 transition-all">
                            <FaHackerrank />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
