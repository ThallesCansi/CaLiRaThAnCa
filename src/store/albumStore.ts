import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AlbumPage, Sticker, Pack, Achievement, PlayerProgress, Game } from '@/types/album';

interface AlbumState {
  pages: AlbumPage[];
  collectedStickers: Sticker[];
  unplacedStickers: Sticker[];
  availablePacks: Pack[];
  achievements: Achievement[];
  games: Game[];
  currentPage: number;
  assetsVersion?: string;
  packsOpened: number;
  visitedPages: Set<number>;
  stickerPlacementTimes: number[];
  lastUnlockedAchievement: Achievement | null;
  tutorialPackClaimed: boolean;
  
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
  clearLastUnlockedAchievement: () => void;
  claimTutorialPack: () => void;
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
    11: withV('/pages/page-11.jpg'),
    12: withV('/pages/page-12.jpg'),
    13: withV('/pages/page-13.jpg'),
    14: withV('/pages/page-14.jpg'),
    15: withV('/pages/verso.jpg'),
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
    slots: [
      { id: 'slot-2-1', pageId: 'page-2', position: 0, sticker: null, x: 50.5, y: 11, width: 41, height: 20, acceptsStickerIds: ['sticker-tutorial1'], gameId: 'game-1' },
      { id: 'slot-2-2', pageId: 'page-2', position: 0, sticker: null, x: 50.5, y: 36, width: 41, height: 20, acceptsStickerIds: ['sticker-tutorial2'], gameId: 'game-1' },
      { id: 'slot-2-3', pageId: 'page-2', position: 0, sticker: null, x: 28.5, y: 61, width: 28, height: 27.5, acceptsStickerIds: ['sticker-tutorial3'], gameId: 'game-1' },
      { id: 'slot-2-4', pageId: 'page-2', position: 0, sticker: null, x: 63, y: 61, width: 28, height: 27.5, acceptsStickerIds: ['sticker-tutorial4'], gameId: 'game-1' },
    ],
  });

  pages.push({
    id: 'page-3',
    pageNumber: 3,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[3],
    slots: [
      { id: 'slot-3-1', pageId: 'page-3', position: 0, sticker: null, x: 10, y: 5, width: 31, height: 29, acceptsStickerIds: ['sticker-0001'], gameId: 'game-1' },
      { id: 'slot-3-2', pageId: 'page-3', position: 0, sticker: null, x: 65, y: 35.5, width: 31, height: 29, acceptsStickerIds: ['sticker-0002'], gameId: 'game-1' },
      { id: 'slot-3-3', pageId: 'page-3', position: 0, sticker: null, x: 9, y: 70, width: 42, height: 22.5, acceptsStickerIds: ['sticker-0003'], gameId: 'game-1' },
    ],
  });

  pages.push({
    id: 'page-4',
    pageNumber: 4,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[4],
    slots: [
      { id: 'slot-4-1', pageId: 'page-4', position: 0, sticker: null, x: 5, y: 5, width: 31, height: 29, acceptsStickerIds: ['sticker-0004'], gameId: 'game-1' },
      { id: 'slot-4-2', pageId: 'page-4', position: 0, sticker: null, x: 5, y: 35.5, width: 31, height: 29, acceptsStickerIds: ['sticker-0005'], gameId: 'game-1' },
      { id: 'slot-4-3', pageId: 'page-4', position: 0, sticker: null, x: 61, y: 35.5, width: 31, height: 29, acceptsStickerIds: ['sticker-0006'], gameId: 'game-2' },
    ],
  });

  pages.push({
    id: 'page-5',
    pageNumber: 5,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[5],
    slots: [
      { id: 'slot-5-1', pageId: 'page-5', position: 0, sticker: null, x: 17, y: 69, width: 43, height: 22, acceptsStickerIds: ['sticker-0007'], gameId: 'game-2' },
      { id: 'slot-5-2', pageId: 'page-5', position: 0, sticker: null, x: 69, y: 22.5, width: 31, height: 30.5, acceptsStickerIds: ['sticker-0008A'], gameId: 'game-2' },
    ],
  });

  pages.push({
    id: 'page-6',
    pageNumber: 6,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[6],
    slots: [
      { id: 'slot-6-1', pageId: 'page-6', position: 0, sticker: null, x: 0, y: 22.5, width: 31, height: 30.5, acceptsStickerIds: ['sticker-0008B'], gameId: 'game-2' },
      { id: 'slot-6-2', pageId: 'page-6', position: 0, sticker: null, x: 47, y: 57, width: 31, height: 31, acceptsStickerIds: ['sticker-0009'], gameId: 'game-2' },
    ],
  });

  pages.push({
    id: 'page-7',
    pageNumber: 7,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[7],
    slots: [
      { id: 'slot-7-1', pageId: 'page-7', position: 0, sticker: null, x: 8.5, y: 67, width: 31.5, height: 29, acceptsStickerIds: ['sticker-00010'], gameId: 'game-3' },
    ],
  });

  pages.push({
    id: 'page-8',
    pageNumber: 8,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[8],
    slots: [],
  });

  pages.push({
    id: 'page-9',
    pageNumber: 9,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[9],
    slots: [
      { id: 'slot-9-1', pageId: 'page-9', position: 0, sticker: null, x: 15, y: 68, width: 43, height: 22, acceptsStickerIds: ['sticker-00011'], gameId: 'game-3' },
      { id: 'slot-9-2', pageId: 'page-9', position: 0, sticker: null, x: 59, y: 4, width: 41, height: 22, acceptsStickerIds: ['sticker-00012'], gameId: 'game-3' },
    ],
  });

  pages.push({
    id: 'page-10',
    pageNumber: 10,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[10],
    slots: [
      { id: 'slot-10-1', pageId: 'page-10', position: 0, sticker: null, x: 49, y: 44, width: 31, height: 30, acceptsStickerIds: ['sticker-00013'], gameId: 'game-3' },
      { id: 'slot-10-2', pageId: 'page-10', position: 0, sticker: null, x: 43, y: 7, width: 43, height: 22, acceptsStickerIds: ['sticker-00014'], gameId: 'game-2' },
    ],
  });

  pages.push({
    id: 'page-11',
    pageNumber: 11,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[11],
    slots: [
      { id: 'slot-11-1', pageId: 'page-11', position: 0, sticker: null, x: 10, y: 13, width: 43, height: 22, acceptsStickerIds: ['sticker-00015'], gameId: 'game-2' },
      { id: 'slot-11-2', pageId: 'page-11', position: 0, sticker: null, x: 37, y: 69.5, width: 43, height: 22, acceptsStickerIds: ['sticker-00016'], gameId: 'game-2' },
    ],
  });

  pages.push({
    id: 'page-12',
    pageNumber: 12,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[12],
    slots: [
      { id: 'slot-12-1', pageId: 'page-12', position: 0, sticker: null, x: 10, y: 5, width: 44, height: 22, acceptsStickerIds: ['sticker-00017'], gameId: 'game-2' },
      { id: 'slot-12-2', pageId: 'page-12', position: 0, sticker: null, x: 60, y: 24, width: 31, height: 31, acceptsStickerIds: ['sticker-00018'], gameId: 'game-2' },
    ],
  });

  pages.push({
    id: 'page-13',
    pageNumber: 13,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[13],
    slots: [
      { id: 'slot-12-1', pageId: 'page-12', position: 0, sticker: null, x: 30.5, y: 19, width: 41.5, height: 22, acceptsStickerIds: ['sticker-00019A'], gameId: 'game-2' },
      { id: 'slot-12-1', pageId: 'page-12', position: 0, sticker: null, x: 30.5, y: 41, width: 41.5, height: 22, acceptsStickerIds: ['sticker-00019B'], gameId: 'game-2' },
      { id: 'slot-12-1', pageId: 'page-12', position: 0, sticker: null, x: 30.5, y: 63, width: 41.5, height: 22, acceptsStickerIds: ['sticker-00019C'], gameId: 'game-2' },
    ],
  });

  pages.push({
    id: 'page-14',
    pageNumber: 14,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[14],
    slots: [],
  });
  
  pages.push({
    id: 'page-verso',
    pageNumber: 15,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[15],
    slots: [],
  });
  
  return pages;
};

const tutorialStickers: Sticker[] = [
  {
    id: 'sticker-tutorial1',
    name: 'Tutorial #1',
    image: '/stickers/sticker-tutorial1.jpg',
    rarity: 'common',
    category: 'Tutorial',
  },
  {
    id: 'sticker-tutorial2',
    name: 'Tutorial #2',
    image: '/stickers/sticker-tutorial2.jpg',
    rarity: 'common',
    category: 'Tutorial',
  },
  {
    id: 'sticker-tutorial3',
    name: 'Tutorial #3',
    image: '/stickers/sticker-tutorial3.jpg',
    rarity: 'common',
    category: 'Tutorial',
  },
  {
    id: 'sticker-tutorial4',
    name: 'Tutorial #4',
    image: '/stickers/sticker-tutorial4.jpg',
    rarity: 'common',
    category: 'Tutorial',
  },
];

const tutorialPack: Pack = {
  id: 'pack-tutorial',
  name: 'Tutorial Pack',
  rarity: 'common',
  stickers: tutorialStickers,
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
          id: 'sticker-0008A',
          name: 'Figurinha #8A',
          image: '/stickers/sticker-0008A.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0008B',
          name: 'Figurinha #8B',
          image: '/stickers/sticker-0008B.jpg',
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
  {
    id: 'game-3',
    name: 'Quiz',
    description: 'Resolva os desafios!',
    thumbnail: 'thumbnails/SolarQuiz.png',
    url: '/gdevelop/SolarQuiz/index.html',
    packReward: {
      id: 'pack-3',
      name: 'Pacote Épico',
      rarity: 'epic',
      stickers: [
        {
          id: 'sticker-00010',
          name: 'Figurinha #10',
          image: '/stickers/sticker-0010.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-00011',
          name: 'Figurinha #11',
          image: '/stickers/sticker-0011.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-00012',
          name: 'Figurinha #12',
          image: '/stickers/sticker-0012.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-00013',
          name: 'Figurinha #13',
          image: '/stickers/sticker-0013.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
      ],
    },
    completed: false,
  },
  {
    id: 'game-4',
    name: 'Comet Runner',
    description: 'Corra pelo espaço desviando de cometas!',
    thumbnail: '/placeholder.svg',
    url: '/gdevelop/sample/index.html',
    packReward: {
      id: 'pack-4',
      name: 'Pacote Lendário',
      rarity: 'legendary',
      stickers: [
        {
          id: 'sticker-0014',
          name: 'Figurinha #14',
          image: '/stickers/sticker-0014.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0015',
          name: 'Figurinha #15',
          image: '/stickers/sticker-0015.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0016',
          name: 'Figurinha #16',
          image: '/stickers/sticker-0016.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0017',
          name: 'Figurinha #17',
          image: '/stickers/sticker-0017.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0018',
          name: 'Figurinha #18',
          image: '/stickers/sticker-0018.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0019A',
          name: 'Figurinha #19A',
          image: '/stickers/sticker-0019A.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0019B',
          name: 'Figurinha #19B',
          image: '/stickers/sticker-0019B.jpg',
          rarity: 'common',
          category: 'Diversos',
        },
        {
          id: 'sticker-0019C',
          name: 'Figurinha #19C',
          image: '/stickers/sticker-0019C.jpg',
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
    name: 'First Steps',
    description: 'Place your first sticker in the album',
    icon: '🌟',
    unlocked: false,
  },
  {
    id: 'ach-2',
    name: 'Page Master',
    description: 'Complete an entire page with stickers',
    icon: '📖',
    unlocked: false,
  },
  {
    id: 'ach-3',
    name: 'Game Champion',
    description: 'Complete all available games',
    icon: '🎮',
    unlocked: false,
  },
  {
    id: 'ach-4',
    name: 'Lucky Opener',
    description: 'Open 5 sticker packs',
    icon: '🎁',
    unlocked: false,
  },
  {
    id: 'ach-5',
    name: 'Rare Hunter',
    description: 'Collect a rare or better sticker',
    icon: '💎',
    unlocked: false,
  },
  {
    id: 'ach-6',
    name: 'Album Explorer',
    description: 'Visit all pages in the album',
    icon: '🗺️',
    unlocked: false,
  },
  {
    id: 'ach-7',
    name: 'Speed Collector',
    description: 'Place 5 stickers within 5 minutes',
    icon: '⚡',
    unlocked: false,
  },
  {
    id: 'ach-8',
    name: 'Completion Master',
    description: 'Fill 50% of all album slots',
    icon: '🏆',
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
      packsOpened: 0,
      visitedPages: new Set([0]),
      stickerPlacementTimes: [],
      lastUnlockedAchievement: null,
      tutorialPackClaimed: false,
      
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
        let mergedPages = freshPages.map((p) => ({
          ...p,
          slots: p.slots.map((s) => ({
            ...s,
            sticker: stickerBySlotId.get(s.id) ?? s.sticker,
          })),
        }));

        // Repopular slots a partir das figurinhas já coletadas
        if (state.collectedStickers && state.collectedStickers.length > 0) {
          const used = new Set<string>();
          // Marcar as que já estão no layout (caso HMR)
          mergedPages.forEach((p) =>
            p.slots.forEach((s) => {
              if (s.sticker) used.add(s.sticker.id);
            })
          );

          for (const sticker of state.collectedStickers) {
            if (used.has(sticker.id)) continue;
            // Encontra um slot compatível vazio
            outer: for (const p of mergedPages) {
              const slot = p.slots.find(
                (s) => !s.sticker && Array.isArray(s.acceptsStickerIds) && s.acceptsStickerIds.includes(sticker.id)
              );
              if (slot) {
                slot.sticker = sticker;
                used.add(sticker.id);
                break outer;
              }
            }
          }
        }

        set({ pages: mergedPages, assetsVersion: currentV });
      },
      
      addStickerToSlot: (pageId, slotId, sticker) => {
        set((state) => {
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
          const now = Date.now();
          const stickerPlacementTimes = [...state.stickerPlacementTimes, now];

          // Determine if this page is now complete
          const updatedPage = pages.find((p) => p.id === pageId)!;
          const pageComplete = updatedPage.slots.length > 0 && updatedPage.slots.every((s) => s.sticker);

          // Check total completion
          const totalSlots = pages.reduce((acc, p) => acc + p.slots.length, 0);
          const filledSlots = pages.reduce((acc, p) => acc + p.slots.filter((s) => s.sticker).length, 0);
          const completionPercentage = totalSlots > 0 ? (filledSlots / totalSlots) * 100 : 0;

          // Speed collector check (5 stickers in 5 minutes)
          const fiveMinutesAgo = now - 5 * 60 * 1000;
          const recentPlacements = stickerPlacementTimes.filter(time => time >= fiveMinutesAgo);

          // Achievements updates
          let achievements = state.achievements;
          let lastUnlockedAchievement: Achievement | null = null;

          const unlockAch = (id: string) => {
            const ach = achievements.find((a) => a.id === id);
            if (ach && !ach.unlocked) {
              const unlockedAch = { ...ach, unlocked: true, unlockedAt: new Date() };
              achievements = achievements.map((a) => (a.id === id ? unlockedAch : a));
              lastUnlockedAchievement = unlockedAch;
            }
          };

          // First sticker
          if (collectedStickers.length === 1) unlockAch('ach-1');
          
          // Page complete
          if (pageComplete) unlockAch('ach-2');
          
          // Rare hunter
          if ((sticker.rarity === 'rare' || sticker.rarity === 'epic' || sticker.rarity === 'legendary')) {
            unlockAch('ach-5');
          }
          
          // Speed collector
          if (recentPlacements.length >= 5) unlockAch('ach-7');
          
          // Completion master (50%)
          if (completionPercentage >= 50) unlockAch('ach-8');

          return { pages, collectedStickers, achievements, stickerPlacementTimes, lastUnlockedAchievement };
        });
      },
      
      addPack: (pack) => {
        set((state) => ({
          availablePacks: [...state.availablePacks, pack],
        }));
      },
      
      openPack: (packId, stickers) => {
        set((state) => {
          const packsOpened = state.packsOpened + 1;
          let achievements = state.achievements;
          let lastUnlockedAchievement: Achievement | null = null;

          // Lucky opener achievement (5 packs)
          if (packsOpened >= 5) {
            const ach = achievements.find((a) => a.id === 'ach-4');
            if (ach && !ach.unlocked) {
              const unlockedAch = { ...ach, unlocked: true, unlockedAt: new Date() };
              achievements = achievements.map((a) => (a.id === 'ach-4' ? unlockedAch : a));
              lastUnlockedAchievement = unlockedAch;
            }
          }

          return {
            availablePacks: state.availablePacks.filter((pack) => pack.id !== packId),
            unplacedStickers: [...state.unplacedStickers, ...stickers],
            packsOpened,
            achievements,
            lastUnlockedAchievement,
          };
        });
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
        set((state) => {
          const visitedPages = new Set(state.visitedPages);
          visitedPages.add(page);
          
          let achievements = state.achievements;
          let lastUnlockedAchievement: Achievement | null = null;

          // Album explorer (visit all pages)
          const totalPages = state.pages.length;
          if (visitedPages.size >= totalPages && totalPages > 0) {
            const ach = achievements.find((a) => a.id === 'ach-6');
            if (ach && !ach.unlocked) {
              const unlockedAch = { ...ach, unlocked: true, unlockedAt: new Date() };
              achievements = achievements.map((a) => (a.id === 'ach-6' ? unlockedAch : a));
              lastUnlockedAchievement = unlockedAch;
            }
          }

          return { currentPage: page, visitedPages, achievements, lastUnlockedAchievement };
        });
      },
      
      clearLastUnlockedAchievement: () => {
        set({ lastUnlockedAchievement: null });
      },
      
      claimTutorialPack: () => {
        set((state) => {
          if (state.tutorialPackClaimed) return state;
          return {
            tutorialPackClaimed: true,
            availablePacks: [...state.availablePacks, tutorialPack],
          };
        });
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
      version: 6,
      partialize: (state) => ({
        collectedStickers: state.collectedStickers,
        unplacedStickers: state.unplacedStickers,
        availablePacks: state.availablePacks,
        achievements: state.achievements,
        games: state.games,
        currentPage: state.currentPage,
        assetsVersion: state.assetsVersion,
        packsOpened: state.packsOpened,
        visitedPages: Array.from(state.visitedPages),
        stickerPlacementTimes: state.stickerPlacementTimes,
        tutorialPackClaimed: state.tutorialPackClaimed,
      }),
      migrate: (persistedState: any, version: number) => {
        if (!persistedState) return persistedState;
        
        const visitedPages = Array.isArray(persistedState.visitedPages)
          ? new Set(persistedState.visitedPages)
          : new Set([0]);
        
        return {
          ...persistedState,
          pages: createMockData(),
          visitedPages,
          packsOpened: persistedState.packsOpened || 0,
          stickerPlacementTimes: persistedState.stickerPlacementTimes || [],
          lastUnlockedAchievement: null,
          tutorialPackClaimed: persistedState.tutorialPackClaimed || false,
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
