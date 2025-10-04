import { motion } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Games = () => {
  const games = useAlbumStore((state) => state.games);
  const completeGame = useAlbumStore((state) => state.completeGame);

  const handlePlayGame = (gameId: string) => {
    // Simulate game completion for demo
    toast.success("Jogo concluído!", {
      description: "Você ganhou um pacote de figurinhas!",
    });
    completeGame(gameId);
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
                onClick={() => handlePlayGame(game.id)}
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
