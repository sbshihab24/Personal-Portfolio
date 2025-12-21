import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EmojiBurst = () => {
    const [emojis, setEmojis] = useState([]);

    const handleHover = () => {
        const burstId = Date.now();
        // Create 12 particles as requested
        const count = 12;
        const newEmojis = Array.from({ length: count }).map((_, i) => ({
            id: `${burstId}-${i}`,
            x: (Math.random() - 0.5) * 200, // Wide spread outward
            y: Math.random() * 50,          // Random start variance
            r: (Math.random() - 0.5) * 360, // Full rotation
            scale: 0.8 + Math.random() * 0.5 // Varied sizes
        }));

        setEmojis(prev => [...prev, ...newEmojis]);

        setTimeout(() => {
            setEmojis(prev => prev.filter(e => !newEmojis.find(ne => ne.id === e.id)));
        }, 1200);
    };

    return (
        <div className="relative inline-block mb-8 z-50">
            {/* Badge - Higher Z-Index to stay on top */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onMouseEnter={handleHover}
                className="relative z-20 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-primary/30 text-primary text-lg font-semibold backdrop-blur-md shadow-neon cursor-default select-none group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.span
                    className="text-xl group-hover:rotate-12 transition-transform"
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 1 }}
                >
                    👋
                </motion.span>
                Welcome to my portfolio
            </motion.div>

            {/* Emojis - Lower Z-index to appear from 'behind/under' but visible */}
            <AnimatePresence>
                {emojis.map((emoji) => (
                    <motion.span
                        key={emoji.id}
                        initial={{ opacity: 1, x: 0, y: 0, scale: 0, rotate: 0 }}
                        animate={{
                            opacity: 0,
                            x: emoji.x,
                            y: 180 + emoji.y, // Fall downward significantly
                            scale: 1,
                            rotate: emoji.r
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute left-0 right-0 mx-auto w-12 text-4xl pointer-events-none select-none text-center"
                        style={{ top: '80%', zIndex: 10 }} // Start near bottom of badge
                    >
                        👋
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default EmojiBurst;
