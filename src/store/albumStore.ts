import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AlbumPage, Sticker, Pack, Achievement, PlayerProgress, Game } from '@/types/album';

interface AlbumState {
  pages: AlbumPage[];
  collectedStickers: Sticker[];
  availablePacks: Pack[];
  achievements: Achievement[];
  games: Game[];
  currentPage: number;
  
  // Actions
  addStickerToSlot: (pageId: string, slotId: string, sticker: Sticker) => void;
  addPack: (pack: Pack) => void;
  openPack: (packId: string) => void;
  unlockAchievement: (achievementId: string) => void;
  completeGame: (gameId: string) => void;
  setCurrentPage: (page: number) => void;
  getProgress: () => PlayerProgress;
  initializeAlbum: () => void;
}

const createMockData = () => {
  const pages: AlbumPage[] = [];
  
  // Create 10 pages with 6 slots each
  for (let i = 0; i < 10; i++) {
    const pageSlots = Array.from({ length: 6 }, (_, j) => ({
      id: `slot-${i}-${j}`,
      pageId: `page-${i}`,
      position: j,
      sticker: null,
    }));
    
    pages.push({
      id: `page-${i}`,
      pageNumber: i + 1,
      title: `Fase ${i + 1}`,
      description: `Coleção de figurinhas da fase ${i + 1}`,
      slots: pageSlots,
    });
  }
  
  return pages;
};

const mockGames: Game[] = [
  {
    id: 'game-1',
    name: 'Puzzle Quest',
    description: 'Complete o quebra-cabeça para ganhar um pacote!',
    thumbnail: '🧩',
    url: '/games/puzzle',
    packReward: {
      id: 'pack-1',
      name: 'Pacote Iniciante',
      rarity: 'common',
      stickers: [],
    },
    completed: false,
  },
  {
    id: 'game-2',
    name: 'Memory Match',
    description: 'Encontre os pares para desbloquear figurinhas raras!',
    thumbnail: '🎴',
    url: '/games/memory',
    packReward: {
      id: 'pack-2',
      name: 'Pacote Raro',
      rarity: 'rare',
      stickers: [],
    },
    completed: false,
  },
];

const mockAchievements: Achievement[] = [
  {
    id: 'ach-1',
    name: 'Primeira Figurinha',
    description: 'Cole sua primeira figurinha no álbum',
    icon: '🌟',
    unlocked: false,
  },
  {
    id: 'ach-2',
    name: 'Colecionador',
    description: 'Complete uma página inteira',
    icon: '📖',
    unlocked: false,
  },
  {
    id: 'ach-3',
    name: 'Mestre dos Jogos',
    description: 'Complete todos os jogos disponíveis',
    icon: '🎮',
    unlocked: false,
  },
];

export const useAlbumStore = create<AlbumState>()(
  persist(
    (set, get) => ({
      pages: [],
      collectedStickers: [],
      availablePacks: [],
      achievements: mockAchievements,
      games: mockGames,
      currentPage: 0,
      
      initializeAlbum: () => {
        const state = get();
        if (state.pages.length === 0) {
          set({ pages: createMockData() });
        }
      },
      
      addStickerToSlot: (pageId, slotId, sticker) => {
        set((state) => {
          const pages = state.pages.map((page) => {
            if (page.id === pageId) {
              return {
                ...page,
                slots: page.slots.map((slot) =>
                  slot.id === slotId ? { ...slot, sticker } : slot
                ),
              };
            }
            return page;
          });
          
          const collectedStickers = [...state.collectedStickers, sticker];
          
          // Check for first sticker achievement
          if (collectedStickers.length === 1) {
            get().unlockAchievement('ach-1');
          }
          
          return { pages, collectedStickers };
        });
      },
      
      addPack: (pack) => {
        set((state) => ({
          availablePacks: [...state.availablePacks, pack],
        }));
      },
      
      openPack: (packId) => {
        set((state) => ({
          availablePacks: state.availablePacks.filter((pack) => pack.id !== packId),
        }));
      },
      
      unlockAchievement: (achievementId) => {
        set((state) => ({
          achievements: state.achievements.map((ach) =>
            ach.id === achievementId
              ? { ...ach, unlocked: true, unlockedAt: new Date() }
              : ach
          ),
        }));
      },
      
      completeGame: (gameId) => {
        set((state) => {
          const game = state.games.find((g) => g.id === gameId);
          if (!game) return state;
          
          const updatedGames = state.games.map((g) =>
            g.id === gameId ? { ...g, completed: true } : g
          );
          
          // Add pack reward
          get().addPack(game.packReward);
          
          // Check if all games completed
          const allCompleted = updatedGames.every((g) => g.completed);
          if (allCompleted) {
            get().unlockAchievement('ach-3');
          }
          
          return { games: updatedGames };
        });
      },
      
      setCurrentPage: (page) => {
        set({ currentPage: page });
      },
      
      getProgress: () => {
        const state = get();
        const totalSlots = state.pages.reduce((acc, page) => acc + page.slots.length, 0);
        const filledSlots = state.pages.reduce(
          (acc, page) => acc + page.slots.filter((slot) => slot.sticker !== null).length,
          0
        );
        
        return {
          totalStickers: totalSlots,
          collectedStickers: filledSlots,
          completionPercentage: totalSlots > 0 ? (filledSlots / totalSlots) * 100 : 0,
          achievements: state.achievements,
          packs: state.availablePacks,
        };
      },
    }),
    {
      name: 'album-storage',
    }
  )
);
