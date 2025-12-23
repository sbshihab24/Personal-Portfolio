import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-18 relative overflow-hidden bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-main mx-auto rounded-full opacity-50"></div>
                    </motion.div>

                    {/* Cards - Top Row */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-panel p-6 border-l-4 border-l-primary hover:bg-white/5 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-dark-bg transition-colors">
                                    <FaRocket size={20} />
                                </div>
                                <h4 className="text-xl font-bold text-white">My Mission</h4>
                            </div>
                            <p className="text-text-muted text-sm">Learn deeply, build boldly, share generously.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass-panel p-6 border-l-4 border-l-secondary hover:bg-white/5 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <FaLightbulb size={20} />
                                </div>
                                <h4 className="text-xl font-bold text-white">My Goals</h4>
                            </div>
                            <p className="text-text-muted text-sm">Build production-level AI pipelines and intelligent agents.</p>
                        </motion.div>
                    </div>

                    {/* Text Content - Bottom Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6 text-text-muted text-lg leading-relaxed text-justify md:text-left"
                    >
                        <p>
                            I’m a <span className="text-white font-medium">CSE graduate</span> with hands-on experience in Machine Learning, Computer Vision, and modern LLM-based AI development. My journey began through practical work in OCR and number plate detection during my ML Engineering internship, where I built real-world computer vision pipelines using OpenCV and PaddleOCR.
                        </p>
                        <p>
                            For my undergraduate thesis, I developed a <span className="text-primary">deep learning–based facial expression recognition system</span> using CNN architectures, focusing on precision, feature extraction, and real-time performance.
                        </p>
                        <p>
                            I am currently working as a <span className="text-white font-medium">Junior AI Developer</span>, where I build intelligent systems using LLMs, RAG pipelines, and autonomous AI agents capable of reasoning, planning, and executing multi-step workflows.
                        </p>

                        <div className="pt-4">
                            <p className="font-bold text-white mb-4 text-xl">My experience spans:</p>
                            <ul className="grid md:grid-cols-2 gap-6 list-none">
                                {[
                                    {
                                        title: 'Machine Learning & Deep Learning',
                                        content: 'Developing, training, and optimizing ML/DL models for real-world applications.'
                                    },
                                    {
                                        title: 'Computer Vision',
                                        content: 'OCR pipelines, number plate recognition, and facial expression recognition using OpenCV, PaddleOCR, and deep CNN architectures.'
                                    },
                                    {
                                        title: 'LLMs, RAG, and LangChain-based Development',
                                        content: 'Building retrieval-augmented systems, custom LLM workflows, and intelligent AI applications.'
                                    },
                                    {
                                        title: 'Autonomous AI Agents',
                                        content: 'Designing agents capable of reasoning, planning, and multi-step tool execution.'
                                    },
                                    {
                                        title: 'API Development & Model Deployment',
                                        content: 'Deploying ML/LLM applications using FastAPI, vector databases, and cloud platforms.'
                                    },
                                    {
                                        title: 'End-to-End AI Pipelines',
                                        content: 'Data preprocessing → model training → evaluation → deployment → monitoring.'
                                    }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-primary mt-1.5 text-xs shrink-0">●</span>
                                        <div>
                                            <strong className="text-white block mb-1">{item.title}</strong>
                                            <span className="text-text-muted text-sm leading-relaxed">{item.content}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
