import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact" className="bg-dark-bg/80 border-t border-white/10 pt-20 pb-10 relative overflow-hidden">

            {/* Soft gradient glow behind */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-black opacity-80 pointer-events-none"></div>

            <div className="container mx-auto px-6 text-center relative z-10">

                {/* Footer Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight mb-10">
                    Get In Touch
                </h2>

                {/* Contact Info */}
                <div className="flex flex-wrap justify-center gap-10 mb-12 text-lg">
                    <a
                        href="mailto:sbshihab2000@gmail.com"
                        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors duration-300"
                    >
                        <FaEnvelope size={20} />
                        sbshihab2000@gmail.com
                    </a>

                    <a
                        href="tel:+8801790606985"
                        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors duration-300"
                    >
                        <FaPhone size={20} />
                        +880 1790606985
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-8 mb-16">
                    <a
                        href="https://github.com/sbshihab24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/5 rounded-full text-white hover:bg-primary hover:text-dark-bg hover:scale-110 transition-all duration-300 shadow-neon-hover"
                    >
                        <FaGithub size={24} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/shihab24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/5 rounded-full text-white hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300 shadow-neon-hover"
                    >
                        <FaLinkedin size={24} />
                    </a>

                    <a
                        href="https://www.facebook.com/mh.shihab.370"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/5 rounded-full text-white hover:bg-[#1877f2] hover:text-white hover:scale-110 transition-all duration-300 shadow-neon-hover"
                    >
                        <FaFacebook size={24} />
                    </a>
                </div>

                {/* Copyright Line */}
                <div className="border-t border-white/10 pt-6 text-sm text-text-muted">
                    <p>
                        © {new Date().getFullYear()} Mehedi Hasan Shihab — Built with React, Tailwind & AI creativity.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
