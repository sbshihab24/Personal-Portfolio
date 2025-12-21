import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
    {
        role: "Junior AI Developer",
        company: "Join Venture AI",
        link: "https://joinventure.ai/",
        period: "August 2025 – Present",
        type: "Onsite",
        description: [
            "Developing autonomous AI agents capable of reasoning, planning, and executing multi-step workflows.",
            "Designing and optimizing RAG pipelines for accurate, context-aware information retrieval.",
            "Building and deploying scalable LLM-driven applications using LangChain, vector databases, and modern serving frameworks."
        ]
    },
    {
        role: "Machine Learning Engineer Intern",
        company: "Bondstein Technologies Ltd.",
        link: "https://bondstein.com/",
        period: "Feb 2025 – May 2025",
        type: "On-Site",
        description: [
            "Optimized OCR models for automated data extraction.",
            "Developed real-time computer vision systems for surveillance.",
            "Collaborated on end-to-end ML model deployment."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-dark-bg">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-main mx-auto rounded-full opacity-50"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-panel p-8 hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-white transition-colors flex items-center gap-2 font-medium text-lg"
                                    >
                                        <FaBriefcase className="text-sm" /> {exp.company}
                                    </a>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xs text-text-muted bg-white/5 px-3 py-1 rounded-full mb-2">
                                        {exp.type}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-text-muted mb-6 border-b border-white/5 pb-6">
                                <span className="flex items-center gap-2"><FaCalendarAlt /> {exp.period}</span>
                            </div>

                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-text-muted text-md leading-relaxed flex items-start gap-2">
                                        <span className="text-secondary mt-1.5 text-xs">●</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
