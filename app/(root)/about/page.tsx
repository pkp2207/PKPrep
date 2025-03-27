import React from 'react';

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
            <h1 className="text-4xl font-bold text-gray-500 text-center mb-6">About PKPrep</h1>
            <p className="text-lg text-center mb-8">
                PKPrep is an AI-powered platform designed to elevate your job interview preparation. With Vapi AI voice agents, you can enhance your confidence and sharpen your interview skills through immersive practice sessions.
            </p>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl text-gray-500 font-semibold mb-2">🚀 Our Mission</h2>
                    <p>
                        Our goal is to redefine how job seekers prepare for interviews by integrating advanced AI technology. PKPrep offers real-time AI-driven feedback and interactive voice-based simulations to ensure you&apos;re fully prepared to ace your interviews.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl text-gray-500 font-semibold mb-2">⚙️ Technology Stack</h2>
                    <p>
                        PKPrep is built using cutting-edge technologies to deliver a seamless experience:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Next.js for both frontend and backend functionality</li>
                        <li>Firebase for secure authentication and real-time data storage</li>
                        <li>Tailwind CSS for a sleek, responsive user interface</li>
                        <li>Vapi AI for dynamic voice-based mock interviews</li>
                        <li>Google Gemini for intelligent, AI-powered feedback</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl text-gray-500 font-semibold mb-2">🔍 Key Features</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>AI-powered interview simulations</li>
                        <li>Real-time feedback from AI voice agents</li>
                        <li>Comprehensive performance tracking dashboard</li>
                        <li>Seamless authentication via Firebase</li>
                        <li>Modern UI/UX with full responsiveness</li>
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default AboutPage;
