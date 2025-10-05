import type { AlbumPage as AlbumPageType, Sticker, StickerSlot as StickerSlotType } from "@/types/album";
import { StickerSlot } from "./StickerSlot";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { motion } from "framer-motion";

interface AlbumPageProps {
  page: AlbumPageType;
  onDropSticker?: (slot: StickerSlotType, sticker: Sticker) => void;
  draggedSticker?: Sticker;
  onPlayGame?: (gameId: string) => void;
  showTutorialButton?: boolean;
  onTutorialButtonClick?: () => void;
}

export const AlbumPage = ({ page, onDropSticker, draggedSticker, onPlayGame, showTutorialButton, onTutorialButtonClick }: AlbumPageProps) => {
  return (
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
        {showTutorialButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute z-50"
            style={{
              left: '20%',
              top: '53%',
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
              Start Mission
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
