import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const featuredProjects = [
    {
        title: "Agentic AI System",
        description: "A modular autonomous multi-agent system capable of reasoning, planning, and executing complex tasks. Features Contextual Memory and Tool use.",
        tech: ["Python", "LangChain", "LLM APIs"],
        github: "https://github.com/sbshihab24/Agentic--AI",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "MedAssist AI",
        description: "Production-grade medical chatbot featuring GPT-4o Vision for prescription OCR and a dedicated Medical News Agent.",
        tech: ["Python", "Flask", "OpenAI API", "GPT-4o"],
        github: "https://github.com/sbshihab24/Med-Assistant-AI",
        gradient: "from-blue-400 to-emerald-500"
    },
    {
        title: "Voice-Agent AI",
        description: "Real-time voice-driven interactive AI that processes speech, understands intent, and responds vocally using STT + LLM + TTS pipelines.",
        tech: ["Python", "SpeechRecognition", "Transformers"],
        github: "https://github.com/sbshihab24/Voice-Agent",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "IELTS Writing Evaluator",
        description: "An NLP-powered system offering detailed feedback on IELTS essays. Analyzes coherence, grammar, and vocabulary to predict band scores.",
        tech: ["Python", "NLP", "BERT"],
        github: "https://github.com/sbshihab24/IELTS-Writing-Test",
        gradient: "from-orange-500 to-red-500"
    }

];

const otherProjects = [
    { name: "AI RAG Multi-Tenant MVP", desc: "Enterprise-ready multi-tenant RAG system for isolated document retrieval.", link: "https://github.com/sbshihab24/AI-Rag-Multi-Tenant-MVP" },
    { name: "AI Document Editor", desc: "Smart document editor for context-aware rewriting.", link: "https://github.com/sbshihab24/AI-Powered-Document-Editor" },
    { name: "Helmet Detection", desc: "Real-time safety compliance using YOLO.", link: "#" },
    { name: "Facial Emotion Recognition", desc: "CNN-based emotion analysis.", link: "https://github.com/sbshihab24/Facial-Emotion-Recognition" },
    { name: "Book Recommender", desc: "Collab filtering recommendation engine.", link: "https://github.com/sbshihab24/Book-Recommender-System" },
    { name: "School Management", desc: "Full-stack React academic portal.", link: "#" }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-text-muted">Showcasing my journey in AI & Software Engineering.</p>
                </motion.div>

                {/* Featured Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                rotateX: 5,
                                rotateY: 5,
                                z: 50
                            }}
                            className="glass-panel p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-neon hover:shadow-neon-strong"
                        >
                            {/* Decorative Gradient Background */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-[100px] transition-opacity duration-300 group-hover:opacity-20`} />

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-text-muted hover:text-white hover:scale-110 transition-all p-2 bg-white/5 rounded-full"
                                    title="View Source"
                                >
                                    <FaGithub />
                                </a>
                            </div>

                            <p className="text-text-muted mb-6 leading-relaxed relative z-10 h-20 overflow-hidden">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-mono font-semibold text-white/80 bg-white/5 border border-white/5 px-3 py-1 rounded-lg">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-10 max-w-5xl mx-auto border-t border-white/10"
                >
                    <h3 className="text-2xl font-bold mb-8 text-white text-center">Other Noteworthy Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {otherProjects.map((proj, idx) => (
                            <a
                                key={idx}
                                href={proj.link}
                                className="block p-4 rounded-xl bg-dark-bg/50 border border-white/5 hover:border-primary/50 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-bold text-white group-hover:text-primary">{proj.name}</h4>
                                    <FaExternalLinkAlt className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-xs text-text-muted">{proj.desc}</p>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
