import type { AlbumPage as AlbumPageType } from "@/types/album";
import { StickerSlot } from "./StickerSlot";

interface AlbumPageProps {
  page: AlbumPageType;
}

export const AlbumPage = ({ page }: AlbumPageProps) => {
  const textColor = page.theme === "dark" ? "text-foreground" : "text-foreground";
  const mutedTextColor = page.theme === "dark" ? "text-muted-foreground" : "text-muted-foreground";

  return (
    <div 
      className="w-full h-full bg-card rounded-lg shadow-lg p-8 flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: page.backgroundImage ? `url(${page.backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para garantir legibilidade quando houver imagem de fundo */}
      {page.backgroundImage && (
        <div className="absolute inset-0 bg-card/80 backdrop-blur-[1px]" />
      )}
      
      <div className="relative z-10 mb-6">
        <div className="flex items-baseline gap-3 mb-2">
          <h2 className={`text-3xl font-bold ${textColor}`}>{page.title}</h2>
          <span className={`text-sm ${mutedTextColor}`}>Página {page.pageNumber}</span>
        </div>
        {page.description && (
          <p className={mutedTextColor}>{page.description}</p>
        )}
      </div>
      
      <div className="relative z-10 flex-1 grid grid-cols-3 gap-4">
        {page.slots.map((slot) => (
          <StickerSlot key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
};
