import { motion } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
// No immediate pack grant here; rewards come from GameEmbed completion event


const Games = () => {
  const games = useAlbumStore((state) => state.games);
  const addPack = useAlbumStore((state) => state.addPack);
  const navigate = useNavigate();

  const handlePlayGame = (gameId: string, url: string) => {
    // Segue para o jogo; recompensa virá do evento de conclusão em GameEmbed
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

  // Helper: resolve path in public/ with BASE_URL
  const resolvePublicUrl = (p: string) => {
    let path = p || "";
    // Normalize leading slash
    if (path && !/^https?:\/\//i.test(path)) {
      if (!path.startsWith("/")) path = "/" + path;
      const base = (import.meta as any).env?.BASE_URL || "/";
      const baseClean = String(base).endsWith("/") ? String(base).slice(0, -1) : String(base);
      return `${baseClean}${path}`;
    }
    return path;
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
            <div className="aspect-video bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              {typeof game.thumbnail === "string" && /(\/|\.png|\.jpg|\.jpeg|\.gif|\.webp|\.svg)$/i.test(game.thumbnail) ? (
                <img
                  src={resolvePublicUrl(game.thumbnail)}
                  alt={game.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback: remove image and render emoji-like placeholder
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              ) : (
                <span className="text-8xl">{game.thumbnail}</span>
              )}
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
                {game.completed && (
                  <p className="text-xs text-green-600 mt-1">✓ Concluído - Pode jogar novamente</p>
                )}
              </div>

              <Button
                onClick={() => handlePlayGame(game.id, game.url)}
                className="w-full"
                variant={game.completed ? "secondary" : "default"}
              >
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Jogar Agora
                </>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Games;
