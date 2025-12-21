import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaTimes, FaArrowRight } from 'react-icons/fa';
import { blogs } from '../data/blogs';

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <section id="blog" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">
                        Blog & <span className="text-gradient">Articles</span>
                    </h2>
                    <p className="text-text-muted">Insights on AI, Agentic Systems, and Software Engineering.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-panel p-8 flex flex-col hover:border-primary/50 transition-all duration-300 group"
                        >
                            <span className="text-sm text-primary font-mono mb-4 flex items-center gap-2">
                                <FaCalendarAlt /> {blog.date}
                            </span>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                {blog.title}
                            </h3>

                            <p className="text-text-muted mb-6 flex-grow">
                                {blog.summary}
                            </p>

                            <button
                                onClick={() => setSelectedBlog(blog)}
                                className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all mt-auto"
                            >
                                Read More <FaArrowRight className="text-primary" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Blog Modal */}
            <AnimatePresence>
                {selectedBlog && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedBlog(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-dark-bg border border-white/10 w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl p-8 md:p-12 z-10"
                        >
                            <button
                                onClick={() => setSelectedBlog(null)}
                                className="absolute top-6 right-6 text-text-muted hover:text-white transition-colors"
                            >
                                <FaTimes size={24} />
                            </button>

                            <span className="text-primary font-mono text-sm mb-4 block">{selectedBlog.date}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{selectedBlog.title}</h2>

                            <div
                                className="prose prose-invert prose-lg max-w-none text-text-muted"
                                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Blog;
