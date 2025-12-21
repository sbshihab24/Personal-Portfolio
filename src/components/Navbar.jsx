import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaProjectDiagram } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero', type: 'scroll' },
        { name: 'Skills', to: 'skills', type: 'scroll' },
        { name: 'Experience', to: 'experience', type: 'scroll' },
        { name: 'Projects', to: 'projects', type: 'scroll' },
        { name: 'Blog', to: '/blog', type: 'router' },
        { name: 'Contact Me', to: 'contact', type: 'scroll' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" smooth={true} duration={500} offset={-70} className="cursor-pointer group flex items-center relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {/* Main Text Logo */}
                    <div className="relative z-10 flex items-baseline leading-none">
                        <span className="text-3xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:scale-105">
                            Shihab
                            <span className="relative ml-0.5">
                                {/* Composite Neural Network Brain Icon */}
                                <div className="absolute -top-5 -right-3 w-12 h-12 flex items-center justify-center -z-10 opacity-60">
                                    {/* Brain Shape Base */}
                                    <FaBrain className="absolute text-4xl text-cyan-400/30" />
                                    {/* Network Connections Overlay */}
                                    <FaProjectDiagram className="absolute text-2xl text-purple-400 animate-pulse drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]" />
                                </div>

                                {/* .AI Text */}
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                                    .AI
                                </span>
                            </span>
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isHome = location.pathname === '/';
                        const isRouterLink = link.type === 'router';

                        if (isRouterLink) {
                            return (
                                <RouterLink
                                    key={link.name}
                                    to={link.to}
                                    className={`text-lg font-bold cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 ${location.pathname === link.to ? 'text-gradient' : 'text-text-muted hover:text-white'}`}
                                >
                                    {link.name}
                                </RouterLink>
                            );
                        }

                        if (isHome) {
                            return (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="text-gradient hover:scale-110"
                                    className="text-lg font-bold text-text-muted hover:text-white cursor-pointer transition-all duration-300 hover:scale-110"
                                >
                                    {link.name}
                                </Link>
                            );
                        } else {
                            return (
                                <RouterLink
                                    key={link.name}
                                    to={`/#${link.to}`}
                                    className="text-lg font-bold text-text-muted hover:text-white cursor-pointer transition-all duration-300 hover:scale-110"
                                >
                                    {link.name}
                                </RouterLink>
                            );
                        }
                    })}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden text-2xl cursor-pointer z-50 text-white hover:text-primary transition-colors" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    )}
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-8 md:hidden z-40"
                        >
                            {navLinks.map((link) => {
                                // Logic: If it's a router link (Blog), always use RouterLink.
                                // If it's a scroll link:
                                //   - If on Home ('/'), use React Scroll Link.
                                //   - If NOT on Home, use RouterLink to navigate to home + section.
                                const isHome = location.pathname === '/';
                                const isRouterLink = link.type === 'router';

                                if (isRouterLink) {
                                    return (
                                        <RouterLink
                                            key={link.name}
                                            to={link.to}
                                            className={`text-lg md:text-xl font-bold cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 ${location.pathname === link.to ? 'text-gradient' : 'text-white'}`}
                                        >
                                            {link.name}
                                        </RouterLink>
                                    );
                                }

                                if (isHome) {
                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.to}
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            activeClass="text-gradient hover:scale-110"
                                            className="text-lg md:text-xl font-bold text-white hover:text-primary cursor-pointer transition-all duration-300 hover:scale-110"
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                } else {
                                    // Cross-page navigation for scroll links
                                    return (
                                        <RouterLink
                                            key={link.name}
                                            to={`/#${link.to}`}
                                            className="text-lg md:text-xl font-bold text-white hover:text-primary cursor-pointer transition-all duration-300 hover:scale-110"
                                        >
                                            {link.name}
                                        </RouterLink>
                                    );
                                }
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
