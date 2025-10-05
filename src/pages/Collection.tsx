import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { StickerSlot } from "@/components/album/StickerSlot";

const Collection = () => {
  const pages = useAlbumStore((state) => state.pages);
  const unplacedStickers = useAlbumStore((state) => state.unplacedStickers);
  const initializeAlbum = useAlbumStore((state) => state.initializeAlbum);
  
  // Inicializar o álbum no mount
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
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Minha Coleção</h1>
        <p className="text-muted-foreground">
          {totalStickers} figurinha(s) no total: {progress.collectedStickers} coladas no álbum, {unplacedStickers.length} não coladas
          ({Math.round(progress.completionPercentage)}% do álbum completo)
        </p>
      </div>

      {totalStickers === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold mb-2">Nenhuma figurinha ainda</h2>
          <p className="text-muted-foreground">
            Complete jogos para ganhar pacotes e começar sua coleção!
          </p>
        </div>
      ) : (
        <>
          {allCollectedStickers.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Coladas no Álbum</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
                {allCollectedStickers.map((slot, index) => (
                  <motion.div
                    key={`placed-${slot.id}-${index}`}
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
                    className="cursor-pointer"
                  >
                    <div className="relative group">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                      >
                        <StickerSlot slot={slot} />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {unplacedStickers.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Não Coladas (Aguardando)</h2>
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
    </div>
  );
};

export default Collection;
