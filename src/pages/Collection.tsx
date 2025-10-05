import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { StickerSlot } from "@/components/album/StickerSlot";
import { StickerModal } from "@/components/album/StickerModal";
import { AchievementNotification } from "@/components/album/AchievementNotification";
import type { Sticker } from "@/types/album";

const Collection = () => {
  const pages = useAlbumStore((state) => state.pages);
  const unplacedStickers = useAlbumStore((state) => state.unplacedStickers);
  const initializeAlbum = useAlbumStore((state) => state.initializeAlbum);
  const lastUnlockedAchievement = useAlbumStore((state) => state.lastUnlockedAchievement);
  const clearLastUnlockedAchievement = useAlbumStore((state) => state.clearLastUnlockedAchievement);
  const [selectedSticker, setSelectedSticker] = useState<Sticker | null>(null);
  
  // Initialize album on mount
  useEffect(() => {
    if (pages.length === 0) {
      initializeAlbum();
    }
  }, [pages.length, initializeAlbum]);

  const progress = useMemo(() => {
    const totalSlots = pages.reduce((acc, page) => acc + page.slots.length, 0);
    const filledSlots = pages.reduce(
      (acc, page) => acc + page.slots.filter((slot) => slot.sticker !== null).length,
      0
    );
    
    return {
      totalStickers: totalSlots,
      collectedStickers: filledSlots,
      completionPercentage: totalSlots > 0 ? (filledSlots / totalSlots) * 100 : 0,
    };
  }, [pages]);

  const allCollectedStickers = useMemo(
    () => {
      const placed = pages.flatMap((page) => page.slots).filter((slot) => slot.sticker !== null);
      return placed;
    },
    [pages]
  );

  const totalStickers = allCollectedStickers.length + unplacedStickers.length;

  return (
    <div className="p-8">
      <StickerModal 
        sticker={selectedSticker}
        open={!!selectedSticker}
        onClose={() => setSelectedSticker(null)} 
      />
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">My Collection</h1>
        <p className="text-muted-foreground">
          {totalStickers} sticker(s) total: {progress.collectedStickers} placed in album, {unplacedStickers.length} unplaced
          ({Math.round(progress.completionPercentage)}% album complete)
        </p>
      </div>

      {totalStickers === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold mb-2">No stickers yet</h2>
          <p className="text-muted-foreground">
            Complete games to earn packs and start your collection!
          </p>
        </div>
      ) : (
        <>
          {allCollectedStickers.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Placed in Album</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
                {allCollectedStickers.map((slot, index) => (
                  <motion.div
                    key={`placed-${slot.id}-${index}`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      delay: index * 0.03,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="cursor-pointer"
                    onClick={() => setSelectedSticker(slot.sticker)}
                  >
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                      {typeof slot.sticker!.image === "string" ? (
                        <img
                          src={slot.sticker!.image}
                          alt={slot.sticker!.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-background to-muted">
                          {slot.sticker!.image}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {unplacedStickers.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Unplaced (Waiting)</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
                {unplacedStickers.map((sticker, index) => (
                  <motion.div
                    key={`unplaced-${sticker.id}`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      delay: index * 0.03,
                      type: "spring",
                      stiffness: 200
                    }}
                    onClick={() => setSelectedSticker(sticker)}
                    className="cursor-pointer relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    {typeof sticker.image === "string" && /^(\/|https?:)/.test(sticker.image) ? (
                      <img
                        src={sticker.image}
                        alt={sticker.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-background to-muted">
                        <span>{sticker.image as any}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Achievement notification */}
      <AchievementNotification
        achievement={lastUnlockedAchievement}
        onClose={clearLastUnlockedAchievement}
      />
    </div>
  );
};

export default Collection;
