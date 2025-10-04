import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAlbumStore } from "@/store/albumStore";
import { toast } from "sonner";

/*
How to use:
- Put your GDevelop export under public/gdevelop/<gameName>/index.html
- Navigate to: /games/play?src=/gdevelop/<gameName>/index.html&gameId=<game-id>
- Inside the GDevelop game, post completion with:
  window.parent.postMessage({ type: 'GDEVELOP_EVENT', action: 'COMPLETED', gameId: '<game-id>' }, '*')
*/

const GameEmbed = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const completeGame = useAlbumStore((s) => s.completeGame);

  const src = params.get("src") || "/gdevelop/sample/index.html"; // placeholder
  const gameId = params.get("gameId") || "game-1";
  // Somente jogos locais (mesma origem) em public/gdevelop

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      // Aceitar mensagens apenas da mesma origem (ou "" em dev file://)
      const sameOrigin = event.origin === window.location.origin || event.origin === "";
      if (!event.data || !sameOrigin) return;

      const data = event.data as any;
      if (data.type === "GDEVELOP_EVENT" && data.action === "COMPLETED") {
        const id = data.gameId || gameId;
        completeGame(id);
        toast.success("Jogo concluído! Pacote adicionado.");
        // Voltar ao álbum após concluir
        navigate("/", { replace: true });
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [completeGame, gameId, navigate]);

  return (
    <div className="w-full h-full p-2 md:p-4">
      <iframe
        title="GDevelop Game"
        src={src}
        className="w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-4rem)] border-0 rounded-lg bg-black"
        allowFullScreen
      />
    </div>
  );
};

export default GameEmbed;
