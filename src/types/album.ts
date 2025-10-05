export type StickerRarity = "common" | "rare" | "epic" | "legendary";

export interface Sticker {
  id: string;
  name: string;
  image: string;
  rarity: StickerRarity;
  category: string;
  description?: string;
}

export interface StickerSlot {
  id: string;
  pageId: string;
  position: number;
  sticker: Sticker | null;
  x?: number; // Posição X personalizada (para layouts A4 customizados)
  y?: number; // Posição Y personalizada
  width?: number; // Largura customizada
  height?: number; // Altura customizada
  // Forma do slot. Padrão: retângulo usando x/y/width/height
  shape?: "rect" | "polygon";
  // Para shape = 'polygon': vértices em porcentagem relativos à caixa do slot (0–100)
  // Ex.: points: [{x:0,y:0},{x:100,y:0},{x:80,y:100},{x:0,y:100}]
  points?: Array<{ x: number; y: number }>;
  // Aparência: rotação leve para ficar mais "realista" ao colar
  angle?: number; // em graus, ex.: -3 a 3
  // Restrições: só aceitar certas figurinhas
  acceptsStickerIds?: string[];
  acceptsCategories?: string[];
  // Jogo necessário para ganhar essa figurinha
  gameId?: string;
}

export interface AlbumPage {
  id: string;
  pageNumber: number;
  title: string;
  description?: string;
  backgroundImage?: string; // URL da imagem A4 de fundo
  slots: StickerSlot[];
  theme?: "light" | "dark"; // Tema da página para contraste
}

export interface Pack {
  id: string;
  name: string;
  rarity: StickerRarity;
  stickers: Sticker[];
  gameId?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface Game {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  url: string;
  packReward: Pack;
  completed: boolean;
}

export interface PlayerProgress {
  totalStickers: number;
  collectedStickers: number;
  completionPercentage: number;
  achievements: Achievement[];
  packs: Pack[];
}
