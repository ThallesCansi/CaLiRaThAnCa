import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import type { Sticker } from "@/types/album";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface StickerModalProps {
  sticker: Sticker | null;
  onClose: () => void;
}

const rarityColors = {
  common: "from-gray-400 to-gray-500",
  rare: "from-blue-400 to-blue-600",
  epic: "from-purple-400 to-purple-600",
  legendary: "from-yellow-400 to-yellow-600",
};

const rarityGlow = {
  common: "shadow-[0_0_30px_rgba(156,163,175,0.5)]",
  rare: "shadow-[0_0_40px_rgba(59,130,246,0.6)]",
  epic: "shadow-[0_0_50px_rgba(168,85,247,0.7)]",
  legendary: "shadow-[0_0_60px_rgba(234,179,8,0.8)]",
};

export const StickerModal = ({ sticker, onClose }: StickerModalProps) => {
  if (!sticker) return null;

  return (
    <Dialog open={!!sticker} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-xl border-2">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </motion.div>
            {sticker.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-4">
          <motion.div
            initial={{ scale: 0.8, rotateY: -90, opacity: 0 }}
            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              delay: 0.1 
            }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`relative rounded-xl overflow-hidden ${rarityGlow[sticker.rarity]}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${rarityColors[sticker.rarity]} opacity-20`} />
              
              {typeof sticker.image === "string" && /^(\/|https?:)/.test(sticker.image) ? (
                <img
                  src={sticker.image}
                  alt={sticker.name}
                  className="w-full aspect-[3/4] object-cover"
                />
              ) : (
                <div className="w-full aspect-[3/4] flex items-center justify-center text-9xl bg-gradient-to-br from-background to-muted">
                  <span>{sticker.image as any}</span>
                </div>
              )}

              {/* Efeito de brilho animado */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-200, 400] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
                style={{ width: '200px' }}
              />
            </motion.div>
          </motion.div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Raridade</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className={`px-4 py-1 rounded-full bg-gradient-to-r ${rarityColors[sticker.rarity]} text-white font-semibold text-sm uppercase tracking-wider`}
              >
                {sticker.rarity}
              </motion.span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Categoria</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="px-4 py-1 rounded-full bg-muted font-medium text-sm"
              >
                {sticker.category}
              </motion.span>
            </div>

            {sticker.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t"
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sticker.description}
                </p>
              </motion.div>
            )}
          </div>

          {/* Partículas decorativas */}
          <AnimatePresence>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-yellow-400"
                initial={{ 
                  x: "50%", 
                  y: "50%",
                  scale: 0,
                  opacity: 1
                }}
                animate={{ 
                  x: `${50 + (Math.cos(i * Math.PI / 3) * 100)}%`,
                  y: `${50 + (Math.sin(i * Math.PI / 3) * 100)}%`,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};
