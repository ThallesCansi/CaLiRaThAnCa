import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AlbumPage, Sticker, Pack, Achievement, PlayerProgress, Game } from '@/types/album';

interface AlbumState {
  pages: AlbumPage[];
  collectedStickers: Sticker[];
  unplacedStickers: Sticker[]; // Figurinhas de pacotes abertos ainda não coladas
  availablePacks: Pack[];
  achievements: Achievement[];
  games: Game[];
  currentPage: number;
  assetsVersion?: string;
  
  // Actions
  addStickerToSlot: (pageId: string, slotId: string, sticker: Sticker) => void;
  addPack: (pack: Pack) => void;
  openPack: (packId: string, stickers: Sticker[]) => void;
  removeUnplacedSticker: (stickerId: string) => void;
  unlockAchievement: (achievementId: string) => void;
  completeGame: (gameId: string) => void;
  setCurrentPage: (page: number) => void;
  getProgress: () => PlayerProgress;
  initializeAlbum: () => void;
}

const createMockData = () => {
  const pages: AlbumPage[] = [];
  const ASSETS_VERSION = (import.meta as any)?.env?.VITE_ASSETS_VERSION ?? '1';
  const withV = (url: string | undefined) => (url ? `${url}?v=${ASSETS_VERSION}` : undefined);
  const backgroundByPage: Record<number, string | undefined> = {
    0: withV('/pages/capa.jpg'),
    1: withV('/pages/page-1.jpg'),
    2: withV('/pages/page-2.jpg'),
    3: withV('/pages/page-3.jpg'),
    4: withV('/pages/page-4.jpg'),
    5: withV('/pages/page-5.jpg'),
    6: withV('/pages/page-6.jpg'),
    7: withV('/pages/page-7.jpg'),
    8: withV('/pages/page-8.jpg'),
    9: withV('/pages/page-9.jpg'),
    10: withV('/pages/page-10.jpg'),
    11: withV('/pages/verso.jpg'),
  };
  
  pages.push({
    id: 'page-0',
    pageNumber: 0,
    title: 'Arena do Clima',
    theme: 'dark',
    backgroundImage: backgroundByPage[0],
    slots: [],
  });
  
  pages.push({
    id: 'page-1',
    pageNumber: 1,
    title: '',
    theme: 'light',
    backgroundImage: backgroundByPage[1],
    slots: [],
  });

  pages.push({
    id: 'page-2',
    pageNumber: 2,
    title: '',
    theme: 'light',
    backgroundImage: backgroundByPage[2],
    slots: [],
  });

  pages.push({
    id: 'page-3',
    pageNumber: 3,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[3],
    slots: [],
  });

  pages.push({
    id: 'page-4',
    pageNumber: 4,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[4],
    slots: [],
  });

  pages.push({
    id: 'page-5',
    pageNumber: 5,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[4],
    slots: [
      { id: 'slot-5-1', pageId: 'page-5', position: 0, sticker: null, x: 10, y: 5, width: 31, height: 29, acceptsStickerIds: ['sticker-0001'] },
      { id: 'slot-5-2', pageId: 'page-5', position: 0, sticker: null, x: 65, y: 35.5, width: 31, height: 29, acceptsStickerIds: ['sticker-0002'] },
      { id: 'slot-5-3', pageId: 'page-5', position: 0, sticker: null, x: 9, y: 70, width: 42, height: 22.5, acceptsStickerIds: ['sticker-0003'] },
    ],
  });

  pages.push({
    id: 'page-6',
    pageNumber: 6,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[5],
    slots: [
      { id: 'slot-6-1', pageId: 'page-6', position: 0, sticker: null, x: 5, y: 5, width: 31, height: 29, acceptsStickerIds: ['sticker-0004'] },
      { id: 'slot-6-2', pageId: 'page-6', position: 0, sticker: null, x: 5, y: 35.5, width: 31, height: 29, acceptsStickerIds: ['sticker-0005'] },
      { id: 'slot-6-3', pageId: 'page-6', position: 0, sticker: null, x: 61, y: 35.5, width: 31, height: 29, acceptsStickerIds: ['sticker-0006'] },
    ],
  });

  pages.push({
    id: 'page-7',
    pageNumber: 7,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[6],
    slots: [
      { id: 'slot-7-1', pageId: 'page-7', position: 0, sticker: null, x: 17, y: 69, width: 43, height: 22, acceptsStickerIds: ['sticker-0007'] },
      { id: 'slot-7-2', pageId: 'page-7', position: 0, sticker: null, x: 78, y: 31.5, width: 22, height: 22, acceptsStickerIds: ['sticker-0008'] },
    ],
  });

  pages.push({
    id: 'page-8',
    pageNumber: 8,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[7],
    slots: [
      { id: 'slot-7-2', pageId: 'page-7', position: 0, sticker: null, x: 0, y: 31.5, width: 22, height: 22, acceptsStickerIds: ['sticker-0008'] },
      { id: 'slot-8-1', pageId: 'page-8', position: 0, sticker: null, x: 47, y: 57, width: 31, height: 31, acceptsStickerIds: ['sticker-0009'] },
    ],
  });

  pages.push({
    id: 'page-9',
    pageNumber: 9,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[8],
    slots: [
      { id: 'slot-9-1', pageId: 'page-9', position: 0, sticker: null, x: 9, y: 66.5, width: 31, height: 29.5, acceptsStickerIds: ['sticker-00010'] },
    ],
  });

  pages.push({
    id: 'page-10',
    pageNumber: 10,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[9],
    slots: [],
  });


  
  pages.push({
    id: 'page-verso',
    pageNumber: 11,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[11],
    slots: [],
  });
  
  return pages;
};

const mockGames: Game[] = [
  {
    id: 'game-1',
    name: 'Tappy Astro',
    description: 'Alguma descrição para o jogo Tappy Astro',
    thumbnail: 'thumbnails/TappyAstro.png',
    url: '/gdevelop/TappyAstro/index.html',
    packReward: {
      id: 'pack-1',
      name: 'Pacote Iniciante',
      rarity: 'common',
      stickers: [
        {
          id: 'sticker-0001',
          name: 'Figurinha #1',
          image: '/stickers/sticker-0001.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0002',
          name: 'Figurinha #2',
          image: '/stickers/sticker-0002.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0003',
          name: 'Figurinha #3',
          image: '/stickers/sticker-0003.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0004',
          name: 'Figurinha #4',
          image: '/stickers/sticker-0004.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0005',
          name: 'Figurinha #5',
          image: '/stickers/sticker-0005.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
      ],
    },
    completed: false,
  },
  {
    id: 'game-2',
    name: 'Escaping Flares',
    description: 'Alguma descrição para o jogo Escaping Flares',
    thumbnail: 'thumbnails/EscapingFlares.png',
    url: '/gdevelop/EscapingFlares/index.html',
    packReward: {
      id: 'pack-2',
      name: 'Pacote Raro',
      rarity: 'rare',
      stickers: [
        {
          id: 'sticker-0006',
          name: 'Figurinha #6',
          image: '/stickers/sticker-0006.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0007',
          name: 'Figurinha #7',
          image: '/stickers/sticker-0007.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0008',
          name: 'Figurinha #8',
          image: '/stickers/sticker-0008.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0009',
          name: 'Figurinha #9',
          image: '/stickers/sticker-0009.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
      ],
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
      unplacedStickers: [],
      availablePacks: [],
      achievements: mockAchievements,
      games: mockGames,
      currentPage: 0,
      
      initializeAlbum: () => {
        const state = get();
        const currentV = (import.meta as any)?.env?.VITE_ASSETS_VERSION ?? '1';
        const isDev = (import.meta as any)?.env?.DEV ?? false;

        // Decide se precisa regerar páginas: quando não existem ou quando a versão de assets mudou
        let needRegen = state.pages.length === 0 || state.assetsVersion !== currentV;
        // Em desenvolvimento, sempre regerar para refletir mudanças com HMR
        if (isDev) needRegen = true;
        if (!needRegen) return;

        // Mesclar figurinhas já coladas para manter progresso visual
        const stickerBySlotId = new Map<string, Sticker>();
        state.pages.forEach((p) =>
          p.slots.forEach((s) => {
            if (s.sticker) stickerBySlotId.set(s.id, s.sticker);
          })
        );

        const freshPages = createMockData();
        const mergedPages = freshPages.map((p) => ({
          ...p,
          slots: p.slots.map((s) => ({
            ...s,
            sticker: stickerBySlotId.get(s.id) ?? s.sticker,
          })),
        }));

        set({ pages: mergedPages, assetsVersion: currentV });
      },
      
      addStickerToSlot: (pageId, slotId, sticker) => {
        set((state) => {
          // locate slot and validate acceptance rules if any
          const page = state.pages.find((p) => p.id === pageId);
          const slot = page?.slots.find((s) => s.id === slotId);
          if (!page || !slot) return state;

          // reject if slot already filled
          if (slot.sticker) return state;

          // acceptance rules
          if (slot.acceptsStickerIds !== undefined) {
            if (!slot.acceptsStickerIds.includes(sticker.id)) return state;
          }
          if (slot.acceptsCategories !== undefined) {
            if (!slot.acceptsCategories.includes(sticker.category)) return state;
          }

          const pages = state.pages.map((p) =>
            p.id !== pageId
              ? p
              : {
                  ...p,
                  slots: p.slots.map((s) => (s.id === slotId ? { ...s, sticker } : s)),
                }
          );

          const collectedStickers = [...state.collectedStickers, sticker];
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
      
      openPack: (packId, stickers) => {
        set((state) => ({
          availablePacks: state.availablePacks.filter((pack) => pack.id !== packId),
          unplacedStickers: [...state.unplacedStickers, ...stickers],
        }));
      },
      
      removeUnplacedSticker: (stickerId) => {
        set((state) => {
          const idx = state.unplacedStickers.findIndex((s) => s.id === stickerId);
          if (idx === -1) return state;
          const copy = [...state.unplacedStickers];
          copy.splice(idx, 1);
          return { unplacedStickers: copy };
        });
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
          // If already completed, do nothing (idempotent)
          if (game.completed) return state;
          
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
      version: 5,
      partialize: (state) => ({
        // NÃO persistir 'pages' para sempre recarregar layouts/imagens do código
        collectedStickers: state.collectedStickers,
        unplacedStickers: state.unplacedStickers,
        availablePacks: state.availablePacks,
        achievements: state.achievements,
        games: state.games,
        currentPage: state.currentPage,
        assetsVersion: state.assetsVersion,
      }),
      migrate: (persistedState: any, version: number) => {
        // Sempre atualizar as páginas para refletir novos layouts/imagens de fundo
        // mantendo progresso/itens já coletados.
        if (!persistedState) return persistedState;
        return {
          ...persistedState,
          pages: createMockData(),
          currentPage: 0,
        } as AlbumState;
      },
    }
  )
);

// Vite HMR: quando este módulo mudar, reexecuta initializeAlbum para refletir novas imagens/layouts
if (import.meta && (import.meta as any).hot) {
  (import.meta as any).hot.accept(() => {
    try {
      const { initializeAlbum } = useAlbumStore.getState();
      initializeAlbum();
    } catch (e) {
      // no-op
    }
  });
}
