import { motion } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Pack, Sticker } from "@/types/album";


const Games = () => {
  const games = useAlbumStore((state) => state.games);
  const addPack = useAlbumStore((state) => state.addPack);
  const navigate = useNavigate();

  const handlePlayGame = (gameId: string, url: string) => {
    // 1) Concede um pacote imediatamente para testes
    const game = games.find((g) => g.id === gameId);
    if (game) {
      const baseRarity = game.packReward.rarity;
      const now = Date.now();
      const stickers: Sticker[] = [
        {
          id: "sticker-0001", // garante compat com slot-1-1
          name: "Sticker 0001",
          image: "/stickers/sticker-0001.jpg",
          rarity: baseRarity as any,
          category: "clima",
        },
        { id: `sticker-${now}-1`, name: "Bônus 1", image: "🌍" as any, rarity: baseRarity as any, category: "diversos" },
        { id: `sticker-${now}-2`, name: "Bônus 2", image: "☀️" as any, rarity: baseRarity as any, category: "diversos" },
        { id: `sticker-${now}-3`, name: "Bônus 3", image: "🌧️" as any, rarity: baseRarity as any, category: "diversos" },
        { id: `sticker-${now}-4`, name: "Bônus 4", image: "🌪️" as any, rarity: baseRarity as any, category: "diversos" },
      ];
      const testPack: Pack = {
        id: `test-pack-${gameId}-${now}`,
        name: `${game.packReward.name} (Teste)`,
        rarity: baseRarity,
        stickers,
      } as any;
      addPack(testPack);
    }

    // 2) Segue para o jogo
    // Usa game.url como src; suporta absoluto (https://gd.games/...) ou relativo (/gdevelop/...) 
    let src = url || "/gdevelop/sample/index.html";
    let originParam = "";
    try {
      const isAbsolute = /^https?:\/\//i.test(src);
      if (isAbsolute) {
        const parsed = new URL(src);
        originParam = `&origin=${encodeURIComponent(parsed.origin)}`;
      }
    } catch {}
    navigate(`/games/play?src=${encodeURIComponent(src)}&gameId=${encodeURIComponent(gameId)}${originParam}`);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Jogos Disponíveis</h1>
        <p className="text-muted-foreground">
          Complete os jogos para desbloquear pacotes de figurinhas!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl shadow-lg overflow-hidden border border-border"
          >
            <div className="aspect-video bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-8xl">
              {game.thumbnail}
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{game.name}</h3>
                  <p className="text-muted-foreground">{game.description}</p>
                </div>
                {game.completed && (
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                )}
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold mb-1">Recompensa:</p>
                <p className="text-sm text-muted-foreground">{game.packReward.name}</p>
              </div>

              <Button
                onClick={() => handlePlayGame(game.id, game.url)}
                disabled={game.completed}
                className="w-full"
                variant={game.completed ? "secondary" : "default"}
              >
                {game.completed ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Concluído
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Jogar Agora
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Games;
