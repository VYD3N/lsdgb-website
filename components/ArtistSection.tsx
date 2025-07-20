import React, { useState } from 'react';
import type { Artist, ArtCollection, EmbeddedApp } from '../types';
import { ArtCard } from './ArtCard';
import { ExternalLinkIcon } from '../constants';

interface ArtistSectionProps {
  artist: Artist;
  collections: ArtCollection[];
  interactiveEPs?: EmbeddedApp[];
  accentColor: 'pink' | 'cyan';
}

export const ArtistSection: React.FC<ArtistSectionProps> = ({ artist, collections, interactiveEPs, accentColor }) => {
  const [activeEP, setActiveEP] = useState<EmbeddedApp | undefined>(interactiveEPs?.[0]);

  const accentClasses = {
    pink: {
      text: 'text-pink-400',
      shadow: 'shadow-[0_0_30px_rgba(236,72,153,0.5)]',
      border: 'border-pink-500',
      activeGlow: 'shadow-[0_0_20px_theme(colors.pink.500)]',
      buttonHover: 'hover:bg-pink-400 hover:shadow-[0_0_20px_theme(colors.pink.400)]'
    },
    cyan: {
      text: 'text-cyan-400',
      shadow: 'shadow-[0_0_30px_rgba(34,211,238,0.5)]',
      border: 'border-cyan-500',
      activeGlow: 'shadow-[0_0_20px_theme(colors.cyan.500)]',
      buttonHover: 'hover:bg-cyan-400 hover:shadow-[0_0_20px_theme(colors.cyan.400)]'
    },
  };

  const currentAccent = accentClasses[accentColor];

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
        <img 
          src={artist.avatarUrl} 
          alt={artist.name} 
          className={`w-32 h-32 rounded-full border-4 object-cover ${currentAccent.border} ${currentAccent.shadow}`} 
        />
        <div>
          <h2 className={`text-4xl font-bold font-orbitron ${currentAccent.text}`}>{artist.name}</h2>
          <p className="mt-2 max-w-2xl text-gray-300">{artist.bio}</p>
        </div>
      </div>
      
      <h3 className={`text-3xl font-bold font-orbitron mb-8 ${currentAccent.text}`}>Collections</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
        {collections.map(collection => (
          <ArtCard key={collection.id} collection={collection} accentColor={accentColor} />
        ))}
      </div>

      {interactiveEPs && activeEP && (
        <div>
          <h3 className={`text-3xl font-bold font-orbitron mb-8 ${currentAccent.text}`}>EPs</h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 space-y-4">
              {interactiveEPs.map((ep) => (
                <button
                  key={ep.name}
                  onClick={() => setActiveEP(ep)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeEP.name === ep.name
                      ? `bg-gray-700/50 ${currentAccent.border} ${currentAccent.activeGlow}`
                      : `bg-gray-900/50 border-gray-800 hover:${currentAccent.border}/50 hover:bg-gray-800/50`
                  }`}
                >
                  <h3 className="font-bold font-orbitron text-lg text-white">{ep.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{ep.description}</p>
                </button>
              ))}
            </div>

            <div className="lg:w-2/3">
              <div className="aspect-[16/10] bg-gray-900 rounded-lg border-2 border-gray-800 shadow-2xl shadow-black overflow-hidden">
                {activeEP && (
                  <iframe
                    key={activeEP.name}
                    src={activeEP.url}
                    title={activeEP.name}
                    className="w-full h-full"
                    frameBorder="0"
                  />
                )}
              </div>
              {activeEP?.buyUrl && (
                <div className="mt-4 text-center">
                  <a
                    href={activeEP.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-orbitron text-md font-bold bg-white text-black px-6 py-2 rounded-md transition-all duration-300 ${currentAccent.buttonHover}`}
                  >
                    Buy on Objkt.com
                    <ExternalLinkIcon />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};