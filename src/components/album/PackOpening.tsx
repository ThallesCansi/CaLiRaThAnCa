import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Pack, Sticker } from "@/types/album";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Confetti } from "./Confetti";
import { DraggableSticker } from "./DraggableSticker";
import packImage from "@/assets/pack.png";
import { sfx } from "@/utils/sfx";

interface PackOpeningProps {
  pack: Pack;
  onComplete: (stickers: Sticker[]) => void;
  onClose: () => void;
}

const mockStickers = (count: number, packRarity: string): Sticker[] => {
  const emojis = ["⚽", "🏀", "🎮", "🎸", "🎨", "🎭", "🎪", "🎬", "📚", "🔬"];
  return Array.from({ length: count }, (_, i) => ({
    id: `sticker-${Date.now()}-${i}`,
    name: `Figurinha #${i + 1}`,
    image: emojis[Math.floor(Math.random() * emojis.length)],
    rarity: packRarity as any,
    category: "Diversos",
  }));
};

export const PackOpening = ({ pack, onComplete, onClose }: PackOpeningProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isTearing, setIsTearing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [stickersToReveal, setStickersToReveal] = useState<Sticker[]>([]);
  const [revealedStickers, setRevealedStickers] = useState<Sticker[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = () => {
    setIsTearing(true);
    sfx.packOpen();

    // Packet tear/open animation then reveal
    setTimeout(() => {
      setIsTearing(false);
      setIsOpening(true);
      setShowConfetti(true);
      sfx.confetti();

      const source: Sticker[] = (pack.stickers && pack.stickers.length > 0)
        ? pack.stickers
        : mockStickers(5, pack.rarity);

      const finalList = source.filter(Boolean).slice(0, 5);
      setStickersToReveal(finalList);
      setRevealedStickers([]);

      // Reveal stickers one by one
      let index = 0;
      const total = finalList.length;
      const interval = setInterval(() => {
        if (index < total) {
          setRevealedStickers((prev) => [...prev, finalList[index]]);
          setCurrentIndex(index);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete(finalList);
          }, 1500);
        }
      }, 600);
    }, 800);
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="w-full max-w-4xl p-8">
          <AnimatePresence mode="wait">
            {!isOpening ? (
            <motion.div
              key="pack"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ 
                scale: isTearing ? 1.2 : 1.5, 
                opacity: 0, 
                rotateZ: isTearing ? 15 : 360,
                rotateY: isTearing ? 180 : 0,
              }}
              transition={{ duration: isTearing ? 0.8 : 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.div
                animate={
                  isTearing 
                    ? { 
                        y: [0, -20, 0], 
                        rotateZ: [0, -10, 10, -5, 0],
                        scale: [1, 1.05, 1.1, 1.05, 1]
                      }
                    : { y: [0, -10, 0] }
                }
                  transition={{ 
                  duration: isTearing ? 0.6 : 2, 
                  repeat: isTearing ? 1 : Infinity 
                }}
                className="w-64 h-80 rounded-xl shadow-pack flex items-center justify-center relative overflow-hidden"
              >
                <img 
                  src={packImage} 
                  alt="Sticker Pack" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-shine" />
                {isTearing && (
                  <>
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      className="absolute inset-y-0 left-1/4 w-1 bg-white/50 origin-top"
                    />
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute inset-y-0 right-1/4 w-1 bg-white/50 origin-top"
                    />
                  </>
                )}
              </motion.div>
              
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-white">{pack.name}</h2>
                <p className="text-white/70">5 surprise stickers!</p>
              </div>
              
              <Button
                onClick={handleOpen}
                disabled={isTearing}
                size="lg"
                className="bg-gradient-album hover:shadow-glow transition-all"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {isTearing ? "Opening..." : "Open Pack"}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="stickers"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center text-white">
                Your New Stickers!
              </h2>
              
              <div className="grid grid-cols-5 gap-4">
                {Array.from({ length: stickersToReveal.length || 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotateY: -180 }}
                    animate={
                      revealedStickers[i]
                        ? { scale: 1, rotateY: 0 }
                        : { scale: 0.8, rotateY: -180 }
                    }
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative"
                  >
                    {revealedStickers[i] ? (
                      <DraggableSticker sticker={revealedStickers[i]} />
                    ) : (
                      <div className="aspect-[3/4] bg-gradient-to-br from-primary to-primary-glow rounded-lg shadow-pack flex items-center justify-center text-6xl">
                        <span className="text-white/30">?</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {stickersToReveal.length > 0 && revealedStickers.length === stickersToReveal.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <Button onClick={onClose} size="lg" variant="secondary">
                    Back to Album
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
