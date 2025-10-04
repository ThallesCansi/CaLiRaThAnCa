import type { AlbumPage as AlbumPageType } from "@/types/album";
import { StickerSlot } from "./StickerSlot";

interface AlbumPageProps {
  page: AlbumPageType;
}

export const AlbumPage = ({ page }: AlbumPageProps) => {
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
          <StickerSlot key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
};
