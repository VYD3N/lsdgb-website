
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black/50 border-t border-gray-900 mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} LSDGB.COM. All rights reserved.</p>
                <p className="text-sm mt-2">The future is a collective hallucination.</p>
                <div className="flex justify-center items-center space-x-6 mt-4 text-lg">
                    <a href="https://x.com/GummyLSD" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">X</a>
                    <a href="https://www.youtube.com/@vyd3n" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">YouTube</a>
                    <a href="https://www.tiktok.com/@gummylsd" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">TikTok</a>
                    <a href="https://github.com/VYD3N" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
                    <a href="https://soundcloud.com/vyd3n" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">SoundCloud</a>
                </div>
            </div>
        </footer>
    );
};