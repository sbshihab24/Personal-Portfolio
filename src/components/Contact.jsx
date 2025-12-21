import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);

        formData.append("access_key", "0b1a2640-2324-4539-8227-5d7ca480b163"); // Fixed Key

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                e.target.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error submitting form. Please check your connection.");
        }
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="bg-dark-bg/80 border-t border-white/10 py-24 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6"
                    >
                        Get In <span className="text-gradient">Touch</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/70 text-lg max-w-2xl mx-auto"
                    >
                        Whether you have a project in mind, a question, or just want to say hi, I'm always open to new opportunities and collaborations.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark-bg transition-all duration-300 shadow-neon">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Email Me</p>
                                    <a href="mailto:sbshihab2000@gmail.com" className="text-lg text-white font-medium hover:text-primary transition-colors">
                                        sbshihab2000@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-neon">
                                    <FaPhone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Call Me</p>
                                    <a href="tel:+8801790606985" className="text-lg text-white font-medium hover:text-secondary transition-colors">
                                        +880 1790606985
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-dark-bg transition-all duration-300 shadow-neon">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-lg text-white font-medium">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 md:p-10"
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10"
                            >
                                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaPaperPlane size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-text-muted">Thanks for reaching out. I'll get back to you soon.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-primary hover:underline font-medium"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-4xl font-black text-[#B066FF] mb-6 tracking-tighter drop-shadow-[0_0_10px_rgba(176,102,255,0.3)]">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="What's your name?"
                                        className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-8 py-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#B066FF] transition-all text-2xl shadow-inner-xl"
                                    />
                                </div>
                                <input type="hidden" name="subject" value="New Portfolio Message from Shihab.AI" />
                                <div>
                                    <label htmlFor="email" className="block text-4xl font-black text-[#B066FF] mb-6 tracking-tighter drop-shadow-[0_0_10px_rgba(176,102,255,0.3)]">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Where can I reach you?"
                                        className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-8 py-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#B066FF] transition-all text-2xl shadow-inner-xl"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-4xl font-black text-[#B066FF] mb-6 tracking-tighter drop-shadow-[0_0_10px_rgba(176,102,255,0.3)]">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="6"
                                        placeholder="I'm interested in working with you..."
                                        className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-8 py-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#B066FF] transition-all text-2xl shadow-inner-xl"
                                    ></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    type="submit"
                                    className={`w-full py-4 rounded-xl font-bold text-dark-bg transition-all shadow-lg ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#e5ff00] hover:bg-[#d4ed00] shadow-[#e5ff00]/20'
                                        }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
