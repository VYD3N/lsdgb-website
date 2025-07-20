
export interface Artist {
  name: string;
  bio: string;
  avatarUrl: string;
}

export interface ArtCollection {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ipfsUrl: string;
  artist: string;
  collectionId?: string;
  isLoading?: boolean;
}

export interface EmbeddedApp {
  name: string;
  url: string;
  description: string;
  buyUrl?: string;
}