
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArtistSection } from './components/ArtistSection';
import { EmbeddedApps } from './components/EmbeddedApps';
import { Footer } from './components/Footer';
import { VYD3N, GUMMYLSD, VYD3N_COLLECTIONS, GUMMYLSD_COLLECTIONS, VYD3N_EPS, EMBEDDED_APPS } from './constants';
import type { ArtCollection } from './types';

export default function App() {
  const artistsRef = useRef<HTMLDivElement>(null);
  const appsRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [vyd3nCollections, setVyd3nCollections] = useState<ArtCollection[]>(VYD3N_COLLECTIONS);

  useEffect(() => {
    const fetchLatestToken = async () => {
      const collectionToUpdate = VYD3N_COLLECTIONS.find(c => c.collectionId);
      if (!collectionToUpdate?.collectionId) return;

      setVyd3nCollections(prev => 
        prev.map(c => 
          c.id === collectionToUpdate.id ? { ...c, isLoading: true } : c
        )
      );

      const query = `
        query GetLatestToken($collectionId: String!) {
          token(where: {fa_contract: {_eq: $collectionId}}, order_by: {timestamp: desc}, limit: 1) {
            display_uri
            thumbnail_uri
            mime
          }
        }
      `;

      try {
        const response = await fetch('https://data.objkt.com/v3/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: query,
            variables: { collectionId: collectionToUpdate.collectionId }
          })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const token = result?.data?.token?.[0];

        if (!token) {
          throw new Error('No token found in API response.');
        }

        let ipfsUri = token.thumbnail_uri;
        const mimeType = token.mime;

        // If no thumbnail, check if the main display asset is an image
        if (!ipfsUri && mimeType && mimeType.startsWith('image/')) {
            ipfsUri = token.display_uri;
        }

        if (ipfsUri && typeof ipfsUri === 'string' && ipfsUri.startsWith('ipfs://')) {
          const ipfsHash = ipfsUri.replace('ipfs://', '');
          const imageUrl = `https://ipfs.io/ipfs/${ipfsHash}`;
          
          setVyd3nCollections(prev => 
            prev.map(c => 
              c.id === collectionToUpdate.id ? { ...c, imageUrl, isLoading: false } : c
            )
          );
        } else {
            throw new Error('No suitable image URI (thumbnail or image mime-type) found for the latest token.');
        }
      } catch (error) {
        console.error("Failed to fetch latest Acid Punk:", error);
        setVyd3nCollections(prev => 
          prev.map(c => 
            c.id === collectionToUpdate.id ? { ...c, isLoading: false } : c
          )
        );
      }
    };

    fetchLatestToken();
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (screenRef.current && ref.current) {
      screenRef.current.scrollTo({
        top: ref.current.offsetTop - 80, // Adjust for sticky header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-2 sm:p-4 md:p-6">
      {/* Outer bezel of the monitor */}
      <div className="bg-gray-300 w-full max-w-screen-2xl p-1.5 sm:p-2.5 rounded-xl lg:rounded-2xl shadow-2xl shadow-purple-900/50 border-t border-gray-400 border-l border-gray-400 border-r-2 border-r-gray-500 border-b-4 border-b-gray-500">
        {/* Inner dark plastic frame */}
        <div className="bg-gray-900 p-1.5 rounded-lg">
          {/* THE SCREEN */}
          <div ref={screenRef} className="crt-screen bg-black h-[94vh] rounded-md overflow-y-auto overflow-x-hidden relative">
            <div className="absolute inset-0 z-0 h-full w-full bg-black bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#310b3b,transparent)]"></div>
            </div>
            
            <div className="relative z-30">
              <Header 
                onArtistsClick={() => scrollTo(artistsRef)}
                onAppsClick={() => scrollTo(appsRef)}
                scrollContainerRef={screenRef}
              />
              <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Hero onExploreClick={() => scrollTo(artistsRef)} />
                
                <div ref={artistsRef} className="pt-20">
                  <ArtistSection 
                    artist={VYD3N} 
                    collections={vyd3nCollections}
                    interactiveEPs={VYD3N_EPS}
                    accentColor="cyan"
                  />
                </div>
                
                <div className="py-20">
                  <ArtistSection 
                    artist={GUMMYLSD} 
                    collections={GUMMYLSD_COLLECTIONS}
                    accentColor="pink"
                  />
                </div>
                
                <div ref={appsRef} className="pb-20">
                  <EmbeddedApps apps={EMBEDDED_APPS} />
                </div>

              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}