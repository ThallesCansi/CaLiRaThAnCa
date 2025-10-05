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
      <div className="flex-1 flex flex-col overflow-hidden bg-background">
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
