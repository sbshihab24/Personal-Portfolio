import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaLayerGroup, FaCogs, FaShieldAlt, FaRocket } from 'react-icons/fa';

const approachSteps = [
    {
        number: "01",
        title: "Problem Understanding",
        description: "Deep analysis of requirements, constraints, and success metrics",
        icon: <FaLightbulb />,
        color: "text-blue-400"
    },
    {
        number: "02",
        title: "Retrieval & Reasoning Design",
        description: "Architecting optimal data flow, embeddings, and context strategies",
        icon: <FaLayerGroup />,
        color: "text-cyan-400"
    },
    {
        number: "03",
        title: "Agent & Pipeline Building",
        description: "Implementing robust multi-agent systems with tool integration",
        icon: <FaCogs />,
        color: "text-emerald-400"
    },
    {
        number: "04",
        title: "Evaluation & Guardrails",
        description: "Rigorous testing, hallucination control, and safety measures",
        icon: <FaShieldAlt />,
        color: "text-purple-400"
    },
    {
        number: "05",
        title: "Deployment & Monitoring",
        description: "Production-ready systems with observability and auto-scaling",
        icon: <FaRocket />,
        color: "text-blue-500"
    }
];

const Approach = () => {
    return (
        <section id="approach" className="py-18 relative overflow-hidden bg-black/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                        Engineering <span className="text-gradient">Approach</span>
                    </h2>
                    <p className="text-text-muted text-base max-w-2xl mx-auto opacity-80">
                        Systematic methodology for building production AI systems
                    </p>
                </motion.div>

                <div className="relative flex flex-col md:flex-row gap-4 lg:gap-6 justify-between">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[42px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

                    {approachSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative z-10 flex-1 group"
                        >
                            {/* Card Content */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="glass-panel p-6 lg:p-8 h-full flex flex-col items-center text-center relative border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-lg"
                            >
                                {/* Number Badge */}
                                <div className="absolute -top-2 -right-2 md:top-6 md:-right-3 w-8 h-8 rounded-full bg-black border-[2px] border-primary/50 flex items-center justify-center z-20 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                                    <span className="text-primary font-bold text-[10px] tracking-tighter">{step.number}</span>
                                </div>

                                {/* Icon Container */}
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl mb-6 ${step.color} border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500`}>
                                    <div className="relative">
                                        <div className={`absolute inset-0 blur-lg opacity-30 bg-current`}></div>
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Title & Text */}
                                <h3 className="text-lg lg:text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors leading-tight min-h-[3rem] flex items-center justify-center">
                                    {step.title}
                                </h3>
                                <p className="text-text-muted text-xs lg:text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                    {step.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Approach;
