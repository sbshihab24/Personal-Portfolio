import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogList = () => {

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-32 pb-24 min-h-screen bg-dark-bg relative overflow-hidden">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
                        My <span className="text-gradient">Blog</span>
                    </h1>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Thoughts, tutorials, and insights on the world of Artificial Intelligence and Software Engineering.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 flex flex-col hover:border-primary/50 transition-all duration-300 group"
                        >
                            <span className="text-sm text-primary font-mono mb-4 flex items-center gap-2">
                                <FaCalendarAlt /> {blog.date}
                            </span>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                {blog.title}
                            </h3>

                            <p className="text-text-muted mb-6 flex-grow line-clamp-3">
                                {blog.summary}
                            </p>

                            <Link
                                to={`/blog/${blog.slug}`}
                                className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all mt-auto"
                            >
                                Read More <FaArrowRight className="text-primary" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;
