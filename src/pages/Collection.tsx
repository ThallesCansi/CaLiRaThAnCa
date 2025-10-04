import { motion } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { StickerSlot } from "@/components/album/StickerSlot";

const Collection = () => {
  const pages = useAlbumStore((state) => state.pages);
  const initializeAlbum = useAlbumStore((state) => state.initializeAlbum);
  
  // Inicializar o álbum caso não tenha sido inicializado
  if (pages.length === 0) {
    initializeAlbum();
  }

  const progress = useAlbumStore((state) => state.getProgress());

  const allCollectedStickers = pages
    .flatMap((page) => page.slots)
    .filter((slot) => slot.sticker !== null);

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {allCollectedStickers.map((slot, index) => (
            <motion.div
              key={`${slot.id}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
            >
              <StickerSlot slot={slot} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
