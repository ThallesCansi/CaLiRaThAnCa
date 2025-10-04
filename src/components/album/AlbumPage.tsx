import type { AlbumPage as AlbumPageType } from "@/types/album";
import { StickerSlot } from "./StickerSlot";

interface AlbumPageProps {
  page: AlbumPageType;
}

export const AlbumPage = ({ page }: AlbumPageProps) => {
  const textColor = page.theme === "dark" ? "text-white" : "text-foreground";
  const mutedTextColor = page.theme === "dark" ? "text-white/70" : "text-muted-foreground";

  return (
    <div 
      className="w-full h-full bg-card rounded-lg shadow-2xl flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: page.backgroundImage ? `url(${page.backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para garantir legibilidade quando houver imagem de fundo */}
      {page.backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      )}
      
      {/* Header da página */}
      <div className="relative z-10 p-6">
        <div className="flex items-baseline gap-3 mb-1">
          <h2 className={`text-2xl font-bold ${textColor}`}>{page.title}</h2>
          <span className={`text-xs ${mutedTextColor}`}>Pág. {page.pageNumber}</span>
        </div>
        {page.description && (
          <p className={`text-sm ${mutedTextColor}`}>{page.description}</p>
        )}
      </div>
      
      {/* Layout absoluto para as figurinhas customizadas */}
      <div className="relative z-10 flex-1 w-full h-full">
        {page.slots.map((slot) => (
          <StickerSlot key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
};
