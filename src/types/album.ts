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
}

export interface AlbumPage {
  id: string;
  pageNumber: number;
  title: string;
  description?: string;
  slots: StickerSlot[];
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
