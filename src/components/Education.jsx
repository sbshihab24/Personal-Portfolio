import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

const educationData = [
    {
        degree: "Bachelor of Science (B.Sc.) in Computer Science & Engineering (CSE)",
        institution: "Green University of Bangladesh",
        duration: "2021 – 2025",
        result: "CGPA: 3.25",
        icon: <FaGraduationCap />,
        description: "Focused on Machine Learning, Computer Vision, Data Mining, and Software Engineering. Thesis based on deep learning–driven facial expression recognition."
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Govt. Science College",
        group: "Group: Science",
        duration: "2017 – 2019",
        result: "GPA: 4.42",
        icon: <FaUniversity />,
        description: "Completed higher secondary education with a strong foundation in mathematics, physics, and computer science fundamentals."
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Al-Amin Academy School and College",
        group: "Group: Science",
        duration: "2015 – 2017",
        result: "GPA: 5.00",
        icon: <FaSchool />,
        description: "Completed secondary education with emphasis on science and analytical problem-solving."
    }
];

const Education = () => {
    return (
        <section className="py-12 relative bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-main mx-auto rounded-full opacity-50"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-6 md:p-8 border-l-4 border-l-primary hover:bg-white/5 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start md:items-center"
                        >
                            <div className="p-4 bg-primary/10 rounded-xl text-primary text-2xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                                {edu.icon}
                            </div>

                            <div className="flex-1 space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                    {edu.degree}
                                </h3>
                                <div className="text-lg text-white/80 font-medium">
                                    {edu.institution}
                                </div>
                                {edu.group && (
                                    <div className="text-text-muted">
                                        {edu.group}
                                    </div>
                                )}
                                <p className="text-base text-gray-300 mt-3 leading-relaxed max-w-2xl font-medium">
                                    {edu.description}
                                </p>
                            </div>

                            <div className="text-right min-w-[140px] md:text-right w-full md:w-auto flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end gap-2 md:gap-1 mt-2 md:mt-0 pt-4 md:pt-0 border-t border-white/5 md:border-0">
                                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm text-text-muted border border-white/5">
                                    {edu.duration}
                                </span>
                                <span className="block font-bold text-gradient text-lg">
                                    {edu.result}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
