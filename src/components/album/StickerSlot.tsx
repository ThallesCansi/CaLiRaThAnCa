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
      whileHover={hasSticker ? { scale: 1.05, rotate: [0, -2, 2, 0] } : { scale: 1 }}
      transition={{ delay: slot.position * 0.05 }}
      onClick={onClick}
      className={cn(
        "relative aspect-[3/4] rounded-lg border-2 transition-all cursor-pointer",
        hasSticker
          ? "border-primary bg-card shadow-sticker"
          : "border-dashed border-muted-foreground/30 bg-muted/50 hover:border-primary/50"
      )}
      style={
        slot.x !== undefined && slot.y !== undefined
          ? {
              position: "absolute",
              left: `${slot.x}%`,
              top: `${slot.y}%`,
              width: slot.width ? `${slot.width}%` : undefined,
              height: slot.height ? `${slot.height}%` : undefined,
            }
          : undefined
      }
    >
      {hasSticker ? (
        <motion.div
          initial={{ rotateY: -180, opacity: 0, scale: 0.8 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="w-full h-full p-2"
        >
          <motion.div
            className={cn(
              "w-full h-full rounded-md bg-gradient-to-br flex items-center justify-center text-4xl relative overflow-hidden",
              rarityColors[slot.sticker.rarity]
            )}
            whileHover={{ scale: 1.1 }}
          >
            {/* Efeito holográfico para legendary */}
            {slot.sticker.rarity === "legendary" && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            )}
            <span className="relative z-10">{slot.sticker.image}</span>
          </motion.div>
          <div className="absolute bottom-1 left-1 right-1 bg-black/70 rounded px-2 py-1">
            <p className="text-[10px] text-white font-semibold truncate">
              {slot.sticker.name}
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <motion.span
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl text-muted-foreground/30"
          >
            ?
          </motion.span>
        </div>
      )}
    </motion.div>
  );
};
