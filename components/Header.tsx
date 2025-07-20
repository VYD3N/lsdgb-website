
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    onArtistsClick: () => void;
    onAppsClick: () => void;
    scrollContainerRef: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({ onArtistsClick, onAppsClick, scrollContainerRef }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            setScrolled(container.scrollTop > 10);
        };
        
        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [scrollContainerRef]);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl md:text-3xl font-bold font-orbitron tracking-wider">
                            <span className="text-white">LSD</span><span className="text-pink-500">G</span><span className="text-cyan-400">B</span>
                        </h1>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <button onClick={onArtistsClick} className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-200 hover:text-cyan-400">Artists</button>
                        <button onClick={onAppsClick} className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-200 hover:text-pink-500">Games & Apps</button>
                    </nav>
                </div>
            </div>
        </header>
    );
};
