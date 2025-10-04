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
  assetsVersion?: string;
  
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
  const ASSETS_VERSION = (import.meta as any)?.env?.VITE_ASSETS_VERSION ?? '1';
  const withV = (url: string | undefined) => (url ? `${url}?v=${ASSETS_VERSION}` : undefined);
  // Mapa de imagens de fundo por página
  const backgroundByPage: Record<number, string | undefined> = {
    1: withV('/pages/page-1.jpg'),
    2: withV('/pages/page-2.jpg'),
    3: withV('/pages/page-3.jpg'),
    4: withV('/pages/page-4.png'),
    5: withV('/pages/page-5.png'),
  };
  
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
    backgroundImage: withV('/pages/capa.jpg'),
    slots: [], // Verso não tem slots de figurinhas
  });
  
  // Página 1 - Layout Grid Padrão
  pages.push({
    id: 'page-1',
    pageNumber: 1,
    title: '',
    theme: 'light',
    // Imagem de fundo correspondente à arte da página 1
    backgroundImage: backgroundByPage[1],
    slots: [
      // Ajuste de layout: mais largura e melhor distribuição vertical
      { id: 'slot-1-1', pageId: 'page-1', position: 0, sticker: null, x: 0, y: 0, width: 116, height: 151, acceptsStickerIds: ['sticker-0001'] },
      { id: 'slot-1-2', pageId: 'page-1', position: 1, sticker: null, x: 36, y: 18, width: 28, height: 32 },
      { id: 'slot-1-3', pageId: 'page-1', position: 2, sticker: null, x: 66, y: 18, width: 28, height: 32 },
      { id: 'slot-1-4', pageId: 'page-1', position: 3, sticker: null, x: 6, y: 58, width: 28, height: 32 },
      { id: 'slot-1-5', pageId: 'page-1', position: 4, sticker: null, x: 36, y: 58, width: 28, height: 32 },
      { id: 'slot-1-6', pageId: 'page-1', position: 5, sticker: null, x: 66, y: 58, width: 28, height: 32 },
    ],
  });

  // Página 2 - Layout com figurinhas horizontais
  pages.push({
    id: 'page-2',
    pageNumber: 2,
    title: '',
    theme: 'light',
    // Imagem de fundo correspondente à arte da página 2
    backgroundImage: backgroundByPage[2],
    slots: [
      // Ajuste de layout: pads laterais e melhor balanço vertical
      { id: 'slot-2-1', pageId: 'page-2', position: 0, sticker: null, x: 6, y: 12, width: 40, height: 26 },
      { id: 'slot-2-2', pageId: 'page-2', position: 1, sticker: null, x: 54, y: 12, width: 40, height: 26 },
      { id: 'slot-2-3', pageId: 'page-2', position: 2, sticker: null, x: 6, y: 42, width: 40, height: 26 },
      { id: 'slot-2-4', pageId: 'page-2', position: 3, sticker: null, x: 54, y: 42, width: 40, height: 26 },
      { id: 'slot-2-5', pageId: 'page-2', position: 4, sticker: null, x: 30, y: 74, width: 40, height: 22 },
    ],
  });

  // Página 3 - Layout assimétrico
  pages.push({
    id: 'page-3',
    pageNumber: 3,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[3],
    slots: [
      { id: 'slot-3-1', pageId: 'page-3', position: 0, sticker: null, x: 5, y: 10, width: 30, height: 40 },
      { id: 'slot-3-2', pageId: 'page-3', position: 1, sticker: null, x: 40, y: 10, width: 25, height: 35 },
      { id: 'slot-3-3', pageId: 'page-3', position: 2, sticker: null, x: 70, y: 10, width: 25, height: 35 },
      { id: 'slot-3-4', pageId: 'page-3', position: 3, sticker: null, x: 40, y: 55, width: 55, height: 35 },
    ],
  });

  pages.push({
    id: 'page-4',
    pageNumber: 4,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[4],
    slots: [
      { id: 'slot-4-1', pageId: 'page-4', position: 0, sticker: null, x: 5, y: 10, width: 30, height: 40 },
      { id: 'slot-4-2', pageId: 'page-4', position: 1, sticker: null, x: 40, y: 10, width: 25, height: 35 },
      { id: 'slot-4-3', pageId: 'page-4', position: 2, sticker: null, x: 70, y: 10, width: 25, height: 35 },
      { id: 'slot-4-4', pageId: 'page-4', position: 3, sticker: null, x: 40, y: 55, width: 55, height: 35 },
    ],
  });

  pages.push({
    id: 'page-5',
    pageNumber: 5,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[4],
    slots: [
      { id: 'slot-5-1', pageId: 'page-5', position: 0, sticker: null, x: 10, y: 5, width: 31, height: 29, acceptsStickerIds: ['sticker-0001'] },
      { id: 'slot-5-1', pageId: 'page-5', position: 0, sticker: null, x: 20, y: 10, width: 31, height: 29, acceptsStickerIds: ['sticker-0002'] },
      { id: 'slot-5-1', pageId: 'page-5', position: 0, sticker: null, x: 9, y: 70, width: 42, height: 22.5, acceptsStickerIds: ['sticker-0003'] },
    ],
  });

  pages.push({
    id: 'page-6',
    pageNumber: 6,
    title: '',
    theme: 'dark',
    backgroundImage: backgroundByPage[5],
    slots: [
      { id: 'slot-6-1', pageId: 'page-6', position: 0, sticker: null, x: 5, y: 10, width: 30, height: 40 },
    ],
  });
  
  // VERSO DO ÁLBUM - Página final única (sem slots)
  pages.push({
    id: 'page-verso',
    pageNumber: 11,
    title: '',
    theme: 'dark',
    backgroundImage: withV('/pages/verso.jpg'),
    slots: [], // Verso não tem slots de figurinhas
  });
  
  return pages;
};

const mockGames: Game[] = [
  {
    id: 'game-1',
    name: 'Puzzle Quest',
    description: 'Complete o quebra-cabeça para ganhar um pacote!',
    thumbnail: '🧩',
    url: '/gdevelop/game1/index.html',
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
    url: '/gdevelop/game1/index.html',
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
      version: 5,
      partialize: (state) => ({
        // NÃO persistir 'pages' para sempre recarregar layouts/imagens do código
        collectedStickers: state.collectedStickers,
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
