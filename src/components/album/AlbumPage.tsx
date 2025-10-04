import type { AlbumPage as AlbumPageType, Sticker, StickerSlot as StickerSlotType } from "@/types/album";
import { StickerSlot } from "./StickerSlot";

interface AlbumPageProps {
  page: AlbumPageType;
  onDropSticker?: (slot: StickerSlotType, sticker: Sticker) => void;
  draggedSticker?: Sticker;
}

export const AlbumPage = ({ page, onDropSticker, draggedSticker }: AlbumPageProps) => {
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
          <StickerSlot key={slot.id} slot={slot} onDropSticker={onDropSticker} draggedSticker={draggedSticker} />
        ))}
      </div>
    </div>
  );
};
