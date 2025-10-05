import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { StickerSlot } from "@/components/album/StickerSlot";

const Collection = () => {
  const pages = useAlbumStore((state) => state.pages);
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
    () => pages.flatMap((page) => page.slots).filter((slot) => slot.sticker !== null),
    [pages]
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Minha Coleção</h1>
        <p className="text-muted-foreground">
          {progress.collectedStickers} de {progress.totalStickers} figurinhas coletadas
          ({Math.round(progress.completionPercentage)}%)
        </p>
      </div>

      {allCollectedStickers.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold mb-2">Nenhuma figurinha ainda</h2>
          <p className="text-muted-foreground">
            Complete jogos para ganhar pacotes e começar sua coleção!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
          {allCollectedStickers.map((slot, index) => (
            <motion.div
              key={`${slot.id}-${index}`}
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
      )}
    </div>
  );
};

export default Collection;
