
export type Screen = 'WELCOME' | 'EXPLORE' | 'FEED' | 'ENCYCLOPEDIA' | 'SAFETY' | 'BOOKING' | 'AI_ASSISTANT';

export interface Species {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  rarity: string;
  maxSize: string;
  maxDepth: string;
  temper: string;
  image: string;
}

export interface DivePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  tags: string[];
  duration: string;
  inclusions: string[];
}

export interface AIMessage {
  role: 'user' | 'model';
  text: string;
}
