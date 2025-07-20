
import React from 'react';
import type { ArtCollection } from '../types';
import { ExternalLinkIcon } from '../constants';

interface ArtCardProps {
  collection: ArtCollection;
  accentColor: 'pink' | 'cyan';
}

export const ArtCard: React.FC<ArtCardProps> = ({ collection, accentColor }) => {
  const accentClasses = {
    pink: {
      shadow: 'shadow-[0_0_25px_theme(colors.pink.500)]',
      border: 'border-pink-500/80',
      text: 'text-pink-400',
    },
    cyan: {
      shadow: 'shadow-[0_0_25px_theme(colors.cyan.400)]',
      border: 'border-cyan-400/80',
      text: 'text-cyan-400',
    },
  };

  const currentAccent = accentClasses[accentColor];

  return (
    <div className={`relative bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 ${currentAccent.shadow}`}>
        <div className={`absolute inset-0 border-2 ${currentAccent.border} rounded-xl transition-all duration-300 pointer-events-none z-10`}></div>
        
        <div className="w-full aspect-square bg-black flex items-center justify-center">
            {collection.isLoading ? (
                <svg className={`animate-spin h-10 w-10 ${currentAccent.text}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : (
                <img 
                    src={collection.imageUrl} 
                    alt={collection.title} 
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            )}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full text-white">
            <h4 className="font-bold text-lg truncate">{collection.title}</h4>
            <p className="text-sm text-gray-300 mt-1 h-10 overflow-hidden pr-4">
                {collection.description}
            </p>
            <div className="flex justify-between items-end mt-2">
              <p className="text-sm font-semibold">{collection.artist}</p>
              <a 
                href={collection.ipfsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center gap-1.5 text-sm font-bold ${currentAccent.text} hover:brightness-125 transition-all`}
              >
                  View Collection <ExternalLinkIcon />
              </a>
            </div>
        </div>
    </div>
  );
};
