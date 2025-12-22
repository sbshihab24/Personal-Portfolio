import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaTools } from 'react-icons/fa';

const skillsData = [
    {
        category: "AI & Machine Learning",
        icon: <FaBrain />,
        color: "text-primary",
        skills: [
            "Supervised & Unsupervised Learning",
            "CNNs",
            "Computer Vision",
            "YOLO",
            "PaddleOCR",
            "RAG (Retrieval-Augmented Generation)",
            "RAG Pipelines",
            "LLMs (Large Language Models)",
            "LLM Fine-Tuning",
            "Agentic AI",
            "NLP"
        ]
    },
    {
        category: "Software Development",
        icon: <FaCode />,
        color: "text-secondary",
        skills: [
            "Python",
            "C/C++",
            "JavaScript",
            "React",
            "HTML/CSS",
            "FastAPI",
            "Streamlit"
        ]
    },
    {
        category: "Tools, Cloud & Platforms",
        icon: <FaTools />,
        color: "text-accent",
        skills: [
            "TensorFlow",
            "Keras",
            "PyTorch",
            "OpenCV",
            "LangChain",
            "Git & GitHub",
            "Docker",
            "AWS",
            "Linux (Ubuntu)",
            "MySQL"
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        A comprehensive toolkit for building intelligent systems, from model training to full-stack deployment.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                rotateX: 5,
                                rotateY: -5,
                                z: 20
                            }}
                            whileTap={{
                                scale: 1.12,
                                rotateX: 0,
                                rotateY: 0,
                                z: 100
                            }}
                            className="glass-panel p-10 hover:border-white/20 transition-all duration-300 group shadow-neon hover:shadow-neon-strong cursor-pointer"
                        >
                            <div className={`flex items-center gap-6 mb-10 ${category.color}`}>
                                <div className="p-5 bg-white/5 rounded-2xl text-4xl group-hover:scale-110 transition-transform duration-300 shadow-neon">
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-3xl text-white">{category.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-dark-bg border border-white/5 rounded-full text-text-muted hover:text-white hover:border-primary/50 hover:bg-white/5 hover:shadow-neon transition-all duration-300 cursor-default text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
