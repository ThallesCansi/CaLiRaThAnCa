import type { AlbumPage as AlbumPageType } from "@/types/album";
import { StickerSlot } from "./StickerSlot";

interface AlbumPageProps {
  page: AlbumPageType;
}

export const AlbumPage = ({ page }: AlbumPageProps) => {
  return (
    <div className="w-full h-full bg-card rounded-lg shadow-lg p-8 flex flex-col">
      <div className="mb-6">
        <div className="flex items-baseline gap-3 mb-2">
          <h2 className="text-3xl font-bold text-foreground">{page.title}</h2>
          <span className="text-sm text-muted-foreground">Página {page.pageNumber}</span>
        </div>
        {page.description && (
          <p className="text-muted-foreground">{page.description}</p>
        )}
      </div>
      
      <div className="flex-1 grid grid-cols-3 gap-4">
        {page.slots.map((slot) => (
          <StickerSlot key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
};
