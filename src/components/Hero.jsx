import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBrain, FaMicrochip, FaBolt, FaEye, FaRobot, FaLanguage } from 'react-icons/fa';
import heroImage from '../assets/heroImage.png';
import EmojiBurst from './EmojiBurst';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-20 md:pt-0">
            {/* Background Glows */}
            <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                <div className="text-center lg:text-left order-2 lg:order-1">
                    <EmojiBurst />

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        I'm <span className="text-gradient">Mehedi Hasan</span> <br />
                        <span className="text-white">Shihab</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-3xl font-semibold mb-6 text-text-muted"
                    >
                        AI Developer & ML Engineer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        Turning data into intelligence. I build scalable AI solutions, from Computer Vision systems to Autonomous Agents and LLM pipelines.
                    </motion.p>

                    {/* Animated Tech Icons - Cleaner Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        className="flex justify-center lg:justify-start gap-8 mb-10"
                    >
                        {[
                            { icon: <FaBrain />, delay: 0 },
                            { icon: <FaRobot />, delay: 0.1 },
                            { icon: <FaEye />, delay: 0.2 },
                            { icon: <FaLanguage />, delay: 0.3 }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [0, 3, -3, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: item.delay,
                                    ease: "easeInOut"
                                }}
                                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border border-white/10 shadow-neon group hover:border-primary/50 transition-colors"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="text-3xl md:text-4xl text-primary group-hover:scale-110 transition-transform"
                                >
                                    {item.icon}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-6"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="btn btn-primary cursor-pointer text-lg px-8 py-3 shadow-neon hover:shadow-neon-strong inline-block"
                            >
                                About Me
                            </Link>
                        </motion.div>

                        <motion.a
                            href="https://drive.google.com/uc?export=view&id=1_lelxqr3Kz9HAmZR8SMUYOrB0gIMvvas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline cursor-pointer text-lg px-8 py-3 flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View / Download CV
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right Column: Image */}
                <div className="order-1 lg:order-2 flex justify-center relative">
                    {/* Image Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl transform scale-110"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-20"
                    >
                        <motion.img
                            src={heroImage}
                            alt="Mehedi Hasan Shihab"
                            className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] object-cover rounded-[40px] shadow-neon-strong border-2 border-white/10"
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
