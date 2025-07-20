
import React from 'react';

interface HeroProps {
    onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
    return (
        <div className="text-center py-32 md:py-48">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-orbitron tracking-tight text-white uppercase">
                The Future is <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">Imagined</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
                An art & music label for the new digital era. Discover curated NFT collections from pioneering AI and psychedelic artists.
            </p>
            <div className="mt-10">
                <button
                    onClick={onExploreClick}
                    className="font-orbitron text-lg font-bold bg-white text-black px-8 py-3 rounded-md transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_theme(colors.cyan.400)]"
                >
                    Explore The Art
                </button>
            </div>
        </div>
    );
};
