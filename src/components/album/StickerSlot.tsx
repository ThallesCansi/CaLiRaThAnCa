import { motion } from "framer-motion";
import type { StickerSlot as StickerSlotType } from "@/types/album";
import { cn } from "@/lib/utils";

interface StickerSlotProps {
  slot: StickerSlotType;
  onClick?: () => void;
}

const rarityColors = {
  common: "from-gray-400 to-gray-500",
  rare: "from-blue-400 to-blue-600",
  epic: "from-purple-400 to-purple-600",
  legendary: "from-yellow-400 to-yellow-600",
};

export const StickerSlot = ({ slot, onClick }: StickerSlotProps) => {
  const hasSticker = slot.sticker !== null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: slot.position * 0.05 }}
      onClick={onClick}
      className={cn(
        "relative aspect-[3/4] rounded-lg border-2 transition-all cursor-pointer",
        hasSticker
          ? "border-primary bg-card shadow-sticker"
          : "border-dashed border-muted-foreground/30 bg-muted/50 hover:border-primary/50"
      )}
    >
      {hasSticker ? (
        <motion.div
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-full h-full p-2"
        >
          <div
            className={cn(
              "w-full h-full rounded-md bg-gradient-to-br flex items-center justify-center text-4xl",
              rarityColors[slot.sticker.rarity]
            )}
          >
            {slot.sticker.image}
          </div>
          <div className="absolute bottom-1 left-1 right-1 bg-black/70 rounded px-2 py-1">
            <p className="text-[10px] text-white font-semibold truncate">
              {slot.sticker.name}
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-3xl text-muted-foreground/30">?</span>
        </div>
      )}
    </motion.div>
  );
};
