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
  
  // CAPA DO ÁLBUM - Página única (sem slots)
  // Para adicionar mais páginas com imagens dos designers:
  // 1. Coloque as imagens em src/assets/pages/
  // 2. Importe a imagem no topo deste arquivo
  // 3. Adicione a página aqui com backgroundImage apontando para a imagem
  // 4. Configure os slots com posições x, y, width, height onde as figurinhas devem aparecer
  pages.push({
    id: 'page-0',
    pageNumber: 0,
    title: 'Arena do Clima',
    theme: 'dark',
    backgroundImage: '/src/assets/pages/capa.jpg',
    slots: [], // Capa não tem slots de figurinhas
  });
  
  // Página 1 - Layout Grid Padrão
  pages.push({
    id: 'page-1',
    pageNumber: 1,
    title: 'Introdução',
    description: 'Bem-vindo ao álbum!',
    theme: 'light',
    slots: [
      { id: 'slot-1-1', pageId: 'page-1', position: 0, sticker: null, x: 10, y: 25, width: 25, height: 30 },
      { id: 'slot-1-2', pageId: 'page-1', position: 1, sticker: null, x: 40, y: 25, width: 25, height: 30 },
      { id: 'slot-1-3', pageId: 'page-1', position: 2, sticker: null, x: 70, y: 25, width: 25, height: 30 },
      { id: 'slot-1-4', pageId: 'page-1', position: 3, sticker: null, x: 10, y: 60, width: 25, height: 30 },
      { id: 'slot-1-5', pageId: 'page-1', position: 4, sticker: null, x: 40, y: 60, width: 25, height: 30 },
      { id: 'slot-1-6', pageId: 'page-1', position: 5, sticker: null, x: 70, y: 60, width: 25, height: 30 },
    ],
  });

  // Página 2 - Layout com figurinhas horizontais
  pages.push({
    id: 'page-2',
    pageNumber: 2,
    title: 'Aventuras',
    description: 'Momentos épicos',
    theme: 'light',
    slots: [
      { id: 'slot-2-1', pageId: 'page-2', position: 0, sticker: null, x: 5, y: 15, width: 40, height: 25 },
      { id: 'slot-2-2', pageId: 'page-2', position: 1, sticker: null, x: 55, y: 15, width: 40, height: 25 },
      { id: 'slot-2-3', pageId: 'page-2', position: 2, sticker: null, x: 5, y: 45, width: 40, height: 25 },
      { id: 'slot-2-4', pageId: 'page-2', position: 3, sticker: null, x: 55, y: 45, width: 40, height: 25 },
      { id: 'slot-2-5', pageId: 'page-2', position: 4, sticker: null, x: 30, y: 75, width: 40, height: 20 },
    ],
  });

  // Página 3 - Layout assimétrico
  pages.push({
    id: 'page-3',
    pageNumber: 3,
    title: 'Coleção Especial',
    description: 'Figurinhas raras',
    theme: 'dark',
    slots: [
      { id: 'slot-3-1', pageId: 'page-3', position: 0, sticker: null, x: 5, y: 10, width: 30, height: 40 },
      { id: 'slot-3-2', pageId: 'page-3', position: 1, sticker: null, x: 40, y: 10, width: 25, height: 35 },
      { id: 'slot-3-3', pageId: 'page-3', position: 2, sticker: null, x: 70, y: 10, width: 25, height: 35 },
      { id: 'slot-3-4', pageId: 'page-3', position: 3, sticker: null, x: 40, y: 55, width: 55, height: 35 },
    ],
  });

  // Adicionar mais 7 páginas com layouts variados
  for (let i = 4; i <= 10; i++) {
    const isEven = i % 2 === 0;
    pages.push({
      id: `page-${i}`,
      pageNumber: i,
      title: `Capítulo ${i}`,
      description: `Coleção ${i}`,
      theme: isEven ? 'light' : 'dark',
      slots: Array.from({ length: 6 }, (_, j) => ({
        id: `slot-${i}-${j}`,
        pageId: `page-${i}`,
        position: j,
        sticker: null,
        x: 10 + (j % 3) * 30,
        y: 20 + Math.floor(j / 3) * 40,
        width: 25,
        height: 30,
      })),
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
