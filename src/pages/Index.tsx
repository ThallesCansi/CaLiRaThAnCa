import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { FlipBook, type FlipBookHandle } from "@/components/album/FlipBook";
import { PackOpening } from "@/components/album/PackOpening";
import { DraggableSticker } from "@/components/album/DraggableSticker";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Package } from "lucide-react";
import type { Pack, Sticker } from "@/types/album";
import { toast } from "sonner";

const Index = () => {
  const [openingPack, setOpeningPack] = useState<Pack | null>(null);
  const [draggedSticker, setDraggedSticker] = useState<Sticker | null>(null);
  const flipBookRef = useRef<FlipBookHandle>(null);
  
  const pages = useAlbumStore((state) => state.pages);
  const currentPage = useAlbumStore((state) => state.currentPage);
  const setCurrentPage = useAlbumStore((state) => state.setCurrentPage);
  const initializeAlbum = useAlbumStore((state) => state.initializeAlbum);
  const availablePacks = useAlbumStore((state) => state.availablePacks);
  const unplacedStickers = useAlbumStore((state) => state.unplacedStickers);
  const addStickerToSlot = useAlbumStore((state) => state.addStickerToSlot);
  const openPack = useAlbumStore((state) => state.openPack);
  const removeUnplacedSticker = useAlbumStore((state) => state.removeUnplacedSticker);

  useEffect(() => {
    initializeAlbum();
  }, []);

  // Navegação com teclado (setas <- e ->)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNextPage();
      } else if (e.key === "ArrowLeft") {
        handlePrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNextPage = () => {
    flipBookRef.current?.flipNext();
  };

  const handlePrevPage = () => {
    flipBookRef.current?.flipPrev();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePackComplete = (stickers: Sticker[]) => {
    if (!openingPack) return;
    openPack(openingPack.id, stickers);
    toast.success("Pacote aberto!", {
      description: `${stickers.length} novas figurinhas disponíveis para colar. Arraste para o álbum!`,
    });
    setOpeningPack(null);
  };

  const handleDropSticker = (slot: any, sticker: Sticker) => {
    addStickerToSlot(slot.pageId, slot.id, sticker);
    removeUnplacedSticker(sticker.id);
    setDraggedSticker(null);
  };


  return (
    <>
      <div 
        className="flex-1 flex flex-col overflow-hidden bg-background"
        style={{ cursor: draggedSticker ? 'grabbing' : 'default' }}
      >
        <div className="flex-1 flex flex-col">
          {/* Header with pack notification */}
          {availablePacks.length > 0 && (
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              className="bg-gradient-success p-4 text-center"
            >
              <button
                onClick={() => setOpeningPack(availablePacks[0])}
                className="text-white font-semibold hover:underline flex items-center justify-center gap-2 mx-auto"
              >
                <Package className="w-5 h-5" />
                Você tem {availablePacks.length} pacote(s) para abrir!
              </button>
            </motion.div>
          )}

          {/* Album Pages - FlipBook */}
          <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Indicação de virar página na capa */}
            {currentPage === 0 && (
              <motion.div
                className="absolute right-32 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
                animate={{
                  x: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronRight className="h-16 w-16 text-primary drop-shadow-lg" />
              </motion.div>
            )}
            
            {/* Overlay de loading ao arrastar */}
            <AnimatePresence>
              {draggedSticker && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <div className="absolute inset-0 bg-primary/5 backdrop-blur-[1px]" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="text-6xl opacity-20">📋</div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <Button
              onClick={handlePrevPage}
              variant="ghost"
              size="icon"
              className="absolute left-4 z-50 h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <FlipBook
              ref={flipBookRef}
              pages={pages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onDropSticker={handleDropSticker}
              draggedSticker={draggedSticker || undefined}
            />

            <Button
              onClick={handleNextPage}
              variant="ghost"
              size="icon"
              className="absolute right-4 z-50 h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Sticker Tray: figurinhas recém-obtidas para arrastar e soltar */}
          <AnimatePresence>
            {unplacedStickers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="p-4 border-t bg-background/60"
              >
                <div className="max-w-6xl mx-auto">
                  <p className="text-sm mb-3 font-medium">Arraste as figurinhas abaixo para os espaços corretos no álbum:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {unplacedStickers.map((s) => (
                      <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <DraggableSticker 
                          sticker={s}
                          onDragStart={() => setDraggedSticker(s)}
                          onDragEnd={() => setDraggedSticker(null)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {openingPack && (
        <PackOpening
          pack={openingPack}
          onComplete={handlePackComplete}
          onClose={() => setOpeningPack(null)}
        />
      )}
    </>
  );
};

export default Index;
