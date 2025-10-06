import { useState } from "react";
import type { AlbumPage as AlbumPageType, Sticker, StickerSlot as StickerSlotType } from "@/types/album";
import { StickerSlot } from "./StickerSlot";
import { Button } from "@/components/ui/button";
import { Package, Map } from "lucide-react";
import { motion } from "framer-motion";
import { HtmlModal } from "./HtmlModal";

interface AlbumPageProps {
  page: AlbumPageType;
  onDropSticker?: (slot: StickerSlotType, sticker: Sticker) => void;
  draggedSticker?: Sticker;
  onPlayGame?: (gameId: string) => void;
  showTutorialButton?: boolean;
  onTutorialButtonClick?: () => void;
}

export const AlbumPage = ({ page, onDropSticker, draggedSticker, onPlayGame, showTutorialButton, onTutorialButtonClick }: AlbumPageProps) => {
  const [htmlModalOpen, setHtmlModalOpen] = useState(false);

  return (
    <>
      <div 
        className="w-full h-full bg-card rounded-lg relative overflow-hidden"
        style={{
          backgroundImage: page.backgroundImage ? `url(${page.backgroundImage})` : undefined,
          // Exibir a imagem inteira sem cortes e centralizada
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Layout absoluto para as figurinhas customizadas */}
        <div className="relative z-10 w-full h-full">
          {page.slots.map((slot) => (
            <StickerSlot 
              key={slot.id} 
              slot={slot} 
              onDropSticker={onDropSticker} 
              draggedSticker={draggedSticker}
              onPlayGame={onPlayGame}
            />
          ))}
          
          {/* Tutorial Button - escalável com a página */}
          {(page.pageNumber === 1 || showTutorialButton) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute z-50"
              style={{
                // Para ajustar manualmente a posição/tamanho do botão, edite os percentuais abaixo:
                // left/top controlam a posição; width/height controlam o tamanho relativo à página.
                left: '30%',
                top: '51%',
                transform: 'translate(-50%, -50%)',
                width: '28%',
                height: '9%',
              }}
            >
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onTutorialButtonClick?.();
                }}
                className="w-full h-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all shadow-xl text-[1.2vw] font-bold"
              >
                <Package className="w-[20%] h-[20%] mr-[5%]" />
                Start
              </Button>
            </motion.div>
          )}

          {/* HTML Button - escalável e posicionável */}
          {page.htmlButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute z-50"
              style={{
                left: page.htmlButton.left,
                top: page.htmlButton.top,
                transform: 'translate(-50%, -50%)',
                width: page.htmlButton.width,
                height: page.htmlButton.height,
              }}
            >
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setHtmlModalOpen(true);
                }}
                className="w-full h-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all shadow-xl text-[1.2vw] font-bold"
              >
                <Map className="w-[20%] h-[20%] mr-[5%]" />
                View Map
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {page.htmlButton && (
        <HtmlModal
          isOpen={htmlModalOpen}
          onClose={() => setHtmlModalOpen(false)}
          htmlPath={page.htmlButton.htmlPath}
        />
      )}
    </>
  );
};
