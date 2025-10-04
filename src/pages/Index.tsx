import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { FlipBook, type FlipBookHandle } from "@/components/album/FlipBook";
import { PackOpening } from "@/components/album/PackOpening";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Package } from "lucide-react";
import type { Pack, Sticker } from "@/types/album";
import { toast } from "sonner";

const Index = () => {
  const [showCover, setShowCover] = useState(true);
  const [openingPack, setOpeningPack] = useState<Pack | null>(null);
  const flipBookRef = useRef<FlipBookHandle>(null);
  
  const pages = useAlbumStore((state) => state.pages);
  const currentPage = useAlbumStore((state) => state.currentPage);
  const setCurrentPage = useAlbumStore((state) => state.setCurrentPage);
  const initializeAlbum = useAlbumStore((state) => state.initializeAlbum);
  const availablePacks = useAlbumStore((state) => state.availablePacks);
  const addStickerToSlot = useAlbumStore((state) => state.addStickerToSlot);
  const openPack = useAlbumStore((state) => state.openPack);

  useEffect(() => {
    initializeAlbum();
  }, []);

  const handleOpenCover = () => {
    setShowCover(false);
  };

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

    // Auto-place stickers in empty slots
    const emptySlots = pages
      .flatMap((page) =>
        page.slots
          .filter((slot) => slot.sticker === null)
          .map((slot) => ({ ...slot, pageId: page.id }))
      )
      .slice(0, stickers.length);

    stickers.forEach((sticker, index) => {
      if (emptySlots[index]) {
        setTimeout(() => {
          addStickerToSlot(emptySlots[index].pageId, emptySlots[index].id, sticker);
        }, index * 300);
      }
    });

    openPack(openingPack.id);
    toast.success("Figurinhas coladas no álbum!", {
      description: `${stickers.length} novas figurinhas foram adicionadas!`,
    });
    setOpeningPack(null);
  };


  return (
    <>
      <div className="flex-1 flex flex-col overflow-hidden bg-background">
        <AnimatePresence mode="wait">
          {showCover ? (
            <motion.div
              key="cover"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="flex-1 flex items-center justify-center p-8"
            >
              <div className="text-center space-y-8 max-w-2xl">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-8xl mb-8"
                >
                  📖
                </motion.div>
                
                <h1 className="text-6xl font-bold bg-gradient-album bg-clip-text text-transparent">
                  Álbum de Figurinhas Digital
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Complete jogos, abra pacotes e cole figurinhas no seu álbum virtual!
                </p>
                
                <Button
                  onClick={handleOpenCover}
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-album hover:shadow-glow transition-all"
                >
                  Abrir Álbum
                </Button>
              </div>
            </motion.div>
          ) : (
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

              {/* Page indicator */}
              <div className="text-center p-4">
                <p className="text-sm text-muted-foreground">
                  Páginas {currentPage + 1}-{Math.min(currentPage + 2, pages.length)} de {pages.length}
                </p>
              </div>
            </div>
          )}
        </AnimatePresence>
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
