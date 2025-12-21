import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import { blogs } from '../data/blogs';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const blog = blogs.find(b => b.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!blog) {
            // Optional: Navigate to 404 or back to blog list if not found
            // navigate('/blog'); 
        }
    }, [blog, navigate]);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
                    <Link to="/blog" className="text-primary hover:underline">Back to Blogs</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="pt-32 pb-24 min-h-screen bg-dark-bg relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-primary/10 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <Link to="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors mb-8">
                    <FaArrowLeft /> Back to Blogs
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="text-primary font-mono text-sm mb-4 block flex items-center gap-2">
                        <FaCalendarAlt /> {blog.date}
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
                        {blog.title}
                    </h1>

                    <div className="w-full h-px bg-white/10 mb-12" />

                    <div
                        className="prose prose-invert prose-lg max-w-none 
                        prose-headings:text-white prose-headings:font-bold 
                        prose-p:text-text-muted prose-p:leading-relaxed
                        prose-strong:text-white prose-strong:font-semibold
                        prose-li:text-text-muted
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </motion.div>
            </div>
        </article>
    );
};

export default BlogPost;
