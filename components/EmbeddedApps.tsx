
import React, { useState } from 'react';
import type { EmbeddedApp } from '../types';

interface EmbeddedAppsProps {
  apps: EmbeddedApp[];
}

export const EmbeddedApps: React.FC<EmbeddedAppsProps> = ({ apps }) => {
  const [activeApp, setActiveApp] = useState<EmbeddedApp>(apps[0]);

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-orbitron text-white">
          Games & <span className="bg-gradient-to-r from-purple-500 to-green-400 text-transparent bg-clip-text">Apps</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          Play games and interact with live applications hosted on Vercel, right here on LSDGB.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 space-y-4">
          {apps.map((app) => (
            <button
              key={app.name}
              onClick={() => setActiveApp(app)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                activeApp.name === app.name
                  ? 'bg-purple-900/50 border-purple-500 shadow-[0_0_20px_theme(colors.purple.500)]'
                  : 'bg-gray-900/50 border-gray-800 hover:border-purple-700 hover:bg-gray-800/50'
              }`}
            >
              <h3 className="font-bold font-orbitron text-lg text-white">{app.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{app.description}</p>
            </button>
          ))}
        </div>

        <div className="lg:w-2/3">
          <div className="aspect-[16/10] bg-gray-900 rounded-lg border-2 border-gray-800 shadow-2xl shadow-black overflow-hidden">
            {activeApp && (
              <iframe
                key={activeApp.name} // Force re-render on change
                src={activeApp.url}
                title={activeApp.name}
                className="w-full h-full"
                frameBorder="0"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
