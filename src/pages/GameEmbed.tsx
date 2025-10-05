import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAlbumStore } from "@/store/albumStore";
import { toast } from "sonner";

/*
How to use:
- Put your GDevelop export under public/gdevelop/<gameName>/index.html
- Navigate to: /games/play?src=/gdevelop/<gameName>/index.html&gameId=<game-id>
- Inside the GDevelop game, post completion with:
  window.parent.postMessage({ type: 'GDEVELOP_EVENT', action: 'COMPLETED' }, '*')
  (gameId will be taken from URL parameter)
*/

const GameEmbed = () => {
  const [params] = useSearchParams();
  const completeGame = useAlbumStore((s) => s.completeGame);

  const rawSrc = params.get("src") || "/gdevelop/sample/index.html"; // placeholder
  const gameId = params.get("gameId") || "game-1";
  // Somente jogos locais (mesma origem) em public/gdevelop

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      // Aceitar mensagens apenas da mesma origem (ou "" em dev file://)
      const sameOrigin = event.origin === window.location.origin || event.origin === "";
      if (!event.data || !sameOrigin) return;

      const data = event.data as any;
      if (data.type === "GDEVELOP_EVENT" && data.action === "COMPLETED") {
        // Sempre usar o gameId da URL para evitar confusão entre jogos
        // O gameId da URL é confiável pois vem do store via Games.tsx
        completeGame(gameId);
        toast.success("Jogo concluído! Pacote adicionado.");
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [completeGame, gameId]);

  const finalSrc = useMemo(() => {
    // Se for absoluto (http/https), passa direto
    const isAbsolute = /^https?:\/\//i.test(rawSrc);
    if (isAbsolute) return rawSrc;

    // Normaliza caminho público considerando BASE_URL (ex.: deploy em subpasta)
    const base = (import.meta as any).env?.BASE_URL || "/";
    const baseClean = String(base).endsWith("/") ? String(base).slice(0, -1) : String(base);
    const pathClean = rawSrc.startsWith("/") ? rawSrc : `/${rawSrc}`;
    return `${baseClean}${pathClean}`;
  }, [rawSrc]);

  return (
    <div className="w-full h-full p-2 md:p-4">
      <iframe
        title="GDevelop Game"
        src={finalSrc}
        className="w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-4rem)] border-0 rounded-lg bg-black"
        allowFullScreen
      />
    </div>
  );
};

export default GameEmbed;
