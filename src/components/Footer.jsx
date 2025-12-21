import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] border-t border-white/5 py-16 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 items-start mb-12">

                    {/* Column 1: Brand & Nav */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white font-bold text-2xl">
                            <FaCode className="text-primary" />
                            <span>Shihab<span className="text-primary">.dev</span></span>
                        </div>
                        <nav className="flex flex-wrap gap-4 text-sm font-medium text-text-muted">
                            <a href="/#home" className="hover:text-primary transition-colors">Home</a>
                            <a href="/#about" className="hover:text-primary transition-colors">About</a>
                            <a href="/#projects" className="hover:text-primary transition-colors">Projects</a>
                            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                            <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
                        </nav>
                        <p className="text-xs text-text-muted/60">
                            © 2025 Mehedi Hasan Shihab — Built with React, Tailwind & AI creativity.
                        </p>
                    </div>

                    {/* Column 2: Quick Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-text-muted group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                <FaMapMarkerAlt />
                            </div>
                            <span className="text-sm">Dhaka, Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-4 text-text-muted group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/10 group-hover:text-secondary transition-all">
                                <FaPhone />
                            </div>
                            <span className="text-sm">+880 1790606985</span>
                        </div>
                        <div className="flex items-center gap-4 text-text-muted group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                <FaEnvelope />
                            </div>
                            <span className="text-sm">sbshihab2000@gmail.com</span>
                        </div>
                    </div>

                    {/* Column 3: About & Socials */}
                    <div className="space-y-6">
                        <h4 className="text-white font-semibold text-lg uppercase tracking-wider">About Me</h4>
                        <p className="text-sm text-text-muted leading-relaxed">
                            Passionate Developer focused on building intelligent agents, scalable systems, and intuitive user experiences.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/sbshihab24" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-dark-bg transition-all">
                                <FaGithub size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/shihab24" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white hover:bg-[#0077b5] hover:text-white transition-all">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="https://www.facebook.com/mh.shihab.370" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white hover:bg-[#1877f2] hover:text-white transition-all">
                                <FaFacebook size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
