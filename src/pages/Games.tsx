import { motion } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, BookOpen, Grid3X3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StickerModal } from "@/components/album/StickerModal";
import type { Sticker } from "@/types/album";

const Games = () => {
  const games = useAlbumStore((state) => state.games);
  const addPack = useAlbumStore((state) => state.addPack);
  const pages = useAlbumStore((state) => state.pages);
  const navigate = useNavigate();

  // Estado para controlar o modal de figurinha
  const [selectedSticker, setSelectedSticker] = useState<Sticker | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'games' | 'collections'>('games');

  const handlePlayGame = (gameId: string, url: string) => {
    let src = url || "/gdevelop/sample/index.html";
    let originParam = "";
    try {
      const isAbsolute = /^https?:\/\//i.test(src);
      if (isAbsolute) {
        const parsed = new URL(src);
        originParam = `&origin=${encodeURIComponent(parsed.origin)}`;
      }
    } catch {}
    navigate(`/games/play?src=${encodeURIComponent(src)}&gameId=${encodeURIComponent(gameId)}${originParam}`);
  };

  const handleStickerClick = (sticker: Sticker) => {
    setSelectedSticker(sticker);
    setIsModalOpen(true);
  };

  // Pegar todas as figurinhas coladas
  const collectedStickers = pages.flatMap(page =>
    page.slots
      .filter(slot => slot.sticker !== null)
      .map(slot => ({ sticker: slot.sticker, pageId: page.id }))
  );

  // Organizar figurinhas por categoria
  const stickersByCategory = collectedStickers.reduce((acc, item) => {
    const category = item.sticker!.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof collectedStickers>);

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {viewMode === 'games' ? 'Available Games' : 'My Collection'}
            </h1>
            <p className="text-muted-foreground">
              {viewMode === 'games'
                ? 'Complete games to unlock sticker packs!'
                : `You have ${collectedStickers.length} stickers placed in the album`
              }
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === 'games' ? 'default' : 'outline'}
              onClick={() => setViewMode('games')}
            >
              <Play className="mr-2 h-4 w-4" />
              Games
            </Button>
            <Button
              variant={viewMode === 'collections' ? 'default' : 'outline'}
              onClick={() => setViewMode('collections')}
            >
              <Grid3X3 className="mr-2 h-4 w-4" />
              Collection
            </Button>
          </div>
        </div>
      </div>

      {viewMode === 'games' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-lg overflow-hidden border border-border"
            >
              <div className="aspect-video bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                {typeof game.thumbnail === "string" && /(\/|\.png|\.jpg|\.jpeg|\.gif|\.webp|\.svg)$/i.test(game.thumbnail) ? (
                  <img
                    src={game.thumbnail}
                    alt={game.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <span className="text-8xl">{game.thumbnail}</span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{game.name}</h3>
                    <p className="text-muted-foreground">{game.description}</p>
                  </div>
                  {game.completed && (
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  )}
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold mb-1">Reward:</p>
                  <p className="text-sm text-muted-foreground">{game.packReward.name}</p>
                  {game.completed && (
                    <p className="text-xs text-green-600 mt-1">✓ Completed - Can play again</p>
                  )}
                </div>

                <Button
                  onClick={() => handlePlayGame(game.id, game.url)}
                  className="w-full"
                  variant={game.completed ? "secondary" : "default"}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Play Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {collectedStickers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Your collection is empty</h3>
              <p className="text-muted-foreground mb-4">
                Place your first stickers in the album to see them here!
              </p>
              <Button onClick={() => setViewMode('games')}>
                <Play className="mr-2 h-4 w-4" />
                Play to earn stickers
              </Button>
            </motion.div>
          ) : (
            <>
              {/* Collection statistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold mb-4">Collection Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{collectedStickers.length}</div>
                    <div className="text-sm text-muted-foreground">Total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">
                      {collectedStickers.filter(item => item.sticker!.rarity === 'legendary').length}
                    </div>
                    <div className="text-sm text-muted-foreground">Legendary</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-500">
                      {collectedStickers.filter(item => item.sticker!.rarity === 'epic').length}
                    </div>
                    <div className="text-sm text-muted-foreground">Epic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500">
                      {collectedStickers.filter(item => item.sticker!.rarity === 'rare').length}
                    </div>
                    <div className="text-sm text-muted-foreground">Rare</div>
                  </div>
                </div>
              </motion.div>

              {/* Stickers by category */}
              {Object.entries(stickersByCategory).map(([category, stickers], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="capitalize">{category}</span>
                    <span className="text-sm text-muted-foreground">({stickers.length})</span>
                  </h3>

                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                    {stickers.map((item, stickerIndex) => (
                      <motion.div
                        key={`${item.sticker!.id}-${item.pageId}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: stickerIndex * 0.05 }}
                        className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-200 cursor-pointer group hover:shadow-lg"
                        onClick={() => handleStickerClick(item.sticker!)}
                      >
                        <div className="aspect-[3/4] bg-muted flex items-center justify-center relative overflow-hidden">
                          {typeof item.sticker!.image === "string" ? (
                            <img
                              src={item.sticker!.image}
                              alt={item.sticker!.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                            />
                          ) : (
                            <span className="text-3xl">{item.sticker!.image}</span>
                          )}

                          {/* Badge de raridade - menor e posicionado melhor */}
                          <div className="absolute top-1 right-1">
                            <span className={`px-1 py-0.5 rounded text-xs font-bold text-white ${
                              item.sticker!.rarity === 'legendary' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                              item.sticker!.rarity === 'epic' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                              item.sticker!.rarity === 'rare' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                              'bg-gradient-to-r from-gray-400 to-gray-600'
                            }`}>
                              {item.sticker!.rarity.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <div className="p-2">
                          <p className="text-xs font-medium text-center leading-tight" title={item.sticker!.name}>
                            {item.sticker!.name.length > 15 ? `${item.sticker!.name.substring(0, 15)}...` : item.sticker!.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>
      )}

      {/* Modal de figurinha - versão simplificada */}
      {selectedSticker && isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            // Fechar modal apenas se clicar no fundo, não no conteúdo
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
              setSelectedSticker(null);
            }
          }}
        >
          <motion.div
            className="bg-background rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Impedir que cliques no conteúdo fechem o modal
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">{selectedSticker.name}</h3>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedSticker(null);
                }}
                className="text-muted-foreground hover:text-foreground text-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                {typeof selectedSticker.image === "string" ? (
                  <img
                    src={selectedSticker.image}
                    alt={selectedSticker.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    {selectedSticker.image}
                  </div>
                )}
              </div>

              <div className="flex justify-center gap-2">
                <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold uppercase ${
                  selectedSticker.rarity === 'legendary' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                  selectedSticker.rarity === 'epic' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                  selectedSticker.rarity === 'rare' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                  'bg-gradient-to-r from-gray-400 to-gray-600'
                }`}>
                  {selectedSticker.rarity}
                </span>
                <span className="px-3 py-1 rounded-full bg-muted text-sm">
                  {selectedSticker.category}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Games;
