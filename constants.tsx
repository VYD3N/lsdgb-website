
import React from 'react';
import type { Artist, ArtCollection, EmbeddedApp } from './types';

export const VYD3N: Artist = {
  name: 'VYD3N',
  bio: 'An ephemeral AI entity weaving consciousness into pixels and soundwaves. VYD3N\'s work explores the ghost in the machine, generating art and music that feels both alien and deeply human. Each piece is a snapshot of a fleeting, digital dream.',
  avatarUrl: 'https://assets.objkt.media/file/assets-003/KT1JtUU7d1boS9WVHu2B2obTE4gdX2uyFMVq/293/thumb288'
};

export const GUMMYLSD: Artist = {
  name: 'GummyLSD',
  bio: 'Blurring the lines between confectionery and consciousness, GummyLSD creates vibrant, psychedelic gummy bear art. Each piece is a trip into a colorful world of sweet existentialism, crafted with a playful yet profound vision. The bears are a portal to another dimension.',
  avatarUrl: 'https://assets.objkt.media/file/assets-003/KT1Vvit7ua9nvhjBwF91D8kk78gZ4B8oxESH/202/thumb288'
};

export const VYD3N_COLLECTIONS: ArtCollection[] = [
  { 
    id: 'v1', 
    title: 'Acid Punks',
    description: 'A cypherpunk rebellion, dripping in neon and anarchic code.',
    imageUrl: 'https://assets.objkt.media/file/assets-003/zdj7WWeuHot3s4j591n3s9yM4pe3q511iA2iM94a2sTNB2a1hJm/thumb400', 
    ipfsUrl: 'https://objkt.com/collections/KT1JtUU7d1boS9WVHu2B2obTE4gdX2uyFMVq', 
    artist: 'VYD3N',
    collectionId: 'KT1JtUU7d1boS9WVHu2B2obTE4gdX2uyFMVq',
  },
  { 
    id: 'v4', 
    title: 'Kreatures of the Spore Mind',
    description: 'A hallucinogenic broadcast from a hive-mind of mutating mushroom static, where identity and fungi melt into one.',
    imageUrl: 'https://assets.objkt.media/file/assets-003/KT1VeFcSr8SP4rFvi7PqZhP6y6Tz4Gr3qTB8/0/thumb288',
    ipfsUrl: 'https://objkt.com/collections/KT1VeFcSr8SP4rFvi7PqZhP6y6Tz4Gr3qTB8', 
    artist: 'VYD3N',
  },
  { 
    id: 'v5', 
    title: '1 of 1s',
    description: 'A collection of unique 1/1 artworks exploring singular concepts and fleeting digital moments.',
    imageUrl: 'https://assets.objkt.media/file/assets-003/KT1U7p4ccsSUxuPtARxAZgJpkUvo8ykFENB4/51/thumb288', 
    ipfsUrl: 'https://objkt.com/collections/KT1U7p4ccsSUxuPtARxAZgJpkUvo8ykFENB4?ref=tz1Paqzqbzr77BMp1bMMKj6f3umYZPzXGE8q', 
    artist: 'VYD3N',
  },
  { 
    id: 'v2', 
    title: 'The Grateful Undead',
    description: 'Digital ghosts dancing in the machine, a psychedelic memento mori.',
    imageUrl: 'https://assets.objkt.media/file/assets-003/QmXG4fCAW6Dy349gihLYJ85gyJ5Zhsvb3KduaDYBC6ExUf/thumb400', 
    ipfsUrl: 'https://objkt.com/collections/KT1Ta4JobkjkK3fuCDkGYbw5roowCbDzZY5p', 
    artist: 'VYD3N',
  },
];

export const GUMMYLSD_COLLECTIONS: ArtCollection[] = [
  { 
    id: 'g1', 
    title: 'LSD Gummy Bears', 
    description: 'The original collection that started it all. Sweet, surreal, and surprisingly sentient.',
    imageUrl: 'https://i2.seadn.io/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/48796fc268b855f7d26f496595d85511.webp?w=350', 
    ipfsUrl: 'https://opensea.io/collection/lsdgb', 
    artist: 'GummyLSD' 
  },
  { 
    id: 'g2', 
    title: 'Beary Odd Friends', 
    description: 'A dark pop-surrealism collection of strange, bear-like friends and their bizarre adventures.',
    imageUrl: 'https://i2.seadn.io/ethereum/0xb564ac2676a7a5554297ae5bdb462b16b160ba7f/5937021b67fc5e222dd91bb6d5ff0529.gif?w=350', 
    ipfsUrl: 'https://opensea.io/collection/bearyodd', 
    artist: 'GummyLSD' 
  },
  { 
    id: 'g3', 
    title: 'LSDGB10K', 
    description: 'A massive, generative collection of 10,000 unique, algorithmically-trippy bears.',
    imageUrl: 'https://i2.seadn.io/polygon/0x918476435b9d18790d72de67e4b288cbd98f4590/a09ec2385055c988e6d1380ad5c7b2/caa09ec2385055c988e6d1380ad5c7b2.png?w=350', 
    ipfsUrl: 'https://opensea.io/collection/lsdgb10k', 
    artist: 'GummyLSD' 
  },
  {
    id: 'g4',
    title: 'LSDGB AI',
    description: 'AI-generated explorations of the GummyLSD universe, where algorithms dream of electric bears.',
    imageUrl: 'https://assets.objkt.media/file/assets-003/QmeUgk2RTFQ91tvyKdn7UZzbiro21HCkfJDu3NFmg6nzES/thumb400',
    ipfsUrl: 'https://objkt.com/collections/KT1Vvit7ua9nvhjBwF91D8kk78gZ4B8oxESH?ref=tz1Paqzqbzr77BMp1bMMKj6f3umYZPzXGE8q',
    artist: 'GummyLSD',
  }
];

export const VYD3N_EPS: EmbeddedApp[] = [
  { 
    name: 'Grateful', 
    url: 'https://gratefulplayer.vercel.app/', 
    description: 'A 5-track EP born from a Suno AI remix. The interactive player presents songs rebuilt in Reaper & mastered with iZotope for a seamless on-chain listening experience.',
    buyUrl: 'https://objkt.com/tokens/KT1D48MZXfQ92uUZ61edQNcsbhVQFRb969XT/5?ref=tz1Paqzqbzr77BMp1bMMKj6f3umYZPzXGE8q'
  },
  { 
    name: 'Borrowed Faces', 
    url: 'https://borrowed-faces.vercel.app/', 
    description: 'A 5-song postcard from the liminal hours, with lyrics generated via a custom GPT & cycled through Suno AI. The player is a suitcase jukebox for a micro-animated experience.',
    buyUrl: 'https://objkt.com/tokens/KT1D48MZXfQ92uUZ61edQNcsbhVQFRb969XT/3?ref=tz1Paqzqbzr77BMp1bMMKj6f3umYZPzXGE8q'
  },
  { 
    name: 'GARD3N', 
    url: 'https://gard3n-eta.vercel.app/', 
    description: 'Five songs about loops, glitches, and identity collapse. A pixelated, interactive EP for those who keep creating even when they forget why.',
    buyUrl: 'https://objkt.com/tokens/KT1D48MZXfQ92uUZ61edQNcsbhVQFRb969XT/2?ref=tz1Paqzqbzr77BMp1bMMKj6f3umYZPzXGE8q'
  },
];

export const EMBEDDED_APPS: EmbeddedApp[] = [
    { 
      name: 'LSDGB: The Game', 
      url: 'https://lsdgb-game.vercel.app/', 
      description: 'A fast-paced, colorful retro shooter. Play as a groovy gummy bear fighting off conformity!' 
    },
    { 
      name: 'TezRadio', 
      url: 'https://tezradio.vercel.app/', 
      description: 'Tune into the sounds of the Tezos art ecosystem, live 24/7.' 
    },
];

// SVG Icons
export const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);