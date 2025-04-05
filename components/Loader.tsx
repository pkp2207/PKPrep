'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

interface LoaderProps {
    isVisible: boolean;
    onComplete?: () => void;
    minDisplayTime?: number; // Minimum time to show the loader in ms
}

const Loader: React.FC<LoaderProps> = ({ 
    isVisible, 
    onComplete, 
    minDisplayTime = 5000 
}) => {
    const [shouldDisplay, setShouldDisplay] = useState(isVisible);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        
        if (isVisible) {
            setShouldDisplay(true);
        } else if (shouldDisplay) {
            // Even if the page is ready, keep the loader visible for minDisplayTime
            timer = setTimeout(() => {
                setShouldDisplay(false);
                if (onComplete) onComplete();
            }, minDisplayTime);
        }
        
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isVisible, shouldDisplay, minDisplayTime, onComplete]);

    return (
        <AnimatePresence>
            {shouldDisplay && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="flex space-x-4">
                        {[0, 1, 2].map((dot) => (
                            <motion.div
                                key={dot}
                                className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg"
                                animate={{
                                    y: ["0%", "-100%", "0%"],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                    delay: dot * 0.2,
                                    times: [0, 0.5, 1]
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;