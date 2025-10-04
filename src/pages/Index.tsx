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
  const [openingPack, setOpeningPack] = useState<Pack | null>(null);
  const [recentStickers, setRecentStickers] = useState<Sticker[]>([]);
  const [draggedSticker, setDraggedSticker] = useState<Sticker | null>(null);
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
    // Em vez de auto-colar, disponibiliza para arrastar e soltar
    setRecentStickers(stickers);
    openPack(openingPack.id);
    toast.success("Pacote aberto!", {
      description: `${stickers.length} novas figurinhas disponíveis para colar. Arraste para o álbum!`,
    });
    setOpeningPack(null);
  };

  const handleDropSticker = (slot: any, sticker: Sticker) => {
    // slot contém pageId e id
    addStickerToSlot(slot.pageId, slot.id, sticker);
    // Remove apenas uma ocorrência deste sticker do tray (por id)
    setRecentStickers((prev) => {
      const idx = prev.findIndex((s) => s.id === sticker.id);
      if (idx === -1) return prev;
      const copy = [...prev];
      copy.splice(idx, 1);
      return copy;
    });
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
            {recentStickers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="p-4 border-t bg-background/60"
              >
                <div className="max-w-6xl mx-auto">
                  <p className="text-sm mb-2 font-medium">Arraste as figurinhas abaixo para os espaços corretos no álbum:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {recentStickers.map((s) => (
                      <div
                        key={s.id}
                        className="aspect-[3/4] rounded-md bg-card border flex items-center justify-center text-3xl shadow-sticker select-none"
                        draggable
                        onDragStart={(e) => {
                          e.dataTransfer.setData("application/json", JSON.stringify(s));
                          e.dataTransfer.effectAllowed = "copyMove";
                          setDraggedSticker(s);
                          // drag preview: cria um "ghost" seguindo o cursor
                          const ghost = document.createElement("div");
                          ghost.style.position = "fixed";
                          ghost.style.top = "0";
                          ghost.style.left = "0";
                          ghost.style.zIndex = "9999";
                          ghost.style.width = "80px";
                          ghost.style.height = "106px"; // 3:4
                          ghost.style.borderRadius = "8px";
                          ghost.style.background = "white";
                          ghost.style.boxShadow = "0 6px 16px rgba(0,0,0,0.25)";
                          ghost.style.display = "flex";
                          ghost.style.alignItems = "center";
                          ghost.style.justifyContent = "center";
                          ghost.style.fontSize = "40px";
                          ghost.style.pointerEvents = "none";
                          ghost.textContent = s.image as string;
                          document.body.appendChild(ghost);
                          // offset para ficar "sob" o cursor
                          const offsetX = 40;
                          const offsetY = 53;
                          e.dataTransfer.setDragImage(ghost, offsetX, offsetY);
                          // limpar rapidamente após iniciar o drag
                          setTimeout(() => {
                            try { document.body.removeChild(ghost); } catch {}
                          }, 0);
                        }}
                        onDragEnd={() => setDraggedSticker(null)}
                        title={s.name}
                      >
                        <span>{s.image}</span>
                      </div>
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
