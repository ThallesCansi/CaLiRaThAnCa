import type { Sticker } from "@/types/album";

interface StickerModalProps {
  sticker: Sticker | null;
  open?: boolean;
  onClose: () => void;
}

export const StickerModal = ({ sticker, open = false, onClose }: StickerModalProps) => {
  if (!sticker || !open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{sticker.name}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            ✕
          </button>
        </div>

        <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
          {typeof sticker.image === "string" ? (
            <img src={sticker.image} alt={sticker.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">
              {sticker.image}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
