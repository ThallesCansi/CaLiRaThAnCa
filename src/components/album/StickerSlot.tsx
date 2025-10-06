import { motion } from "framer-motion";
import type { StickerSlot as StickerSlotType } from "@/types/album";
import { cn } from "@/lib/utils";
import type { Sticker } from "@/types/album";
import { useState } from "react";

interface StickerSlotProps {
  slot: StickerSlotType;
  onClick?: () => void;
  onDropSticker?: (slot: StickerSlotType, sticker: Sticker) => void;
  draggedSticker?: Sticker;
  onPlayGame?: (gameId: string) => void;
}

export const StickerSlot = ({ slot, onClick, onDropSticker, draggedSticker, onPlayGame }: StickerSlotProps) => {
  const hasSticker = slot.sticker !== null;
  const [isOver, setIsOver] = useState(false);
  const [rejectKey, setRejectKey] = useState(0);

  const accepts = (sticker: Sticker) => {
    const hasIdRule = slot.acceptsStickerIds !== undefined;
    const hasCatRule = slot.acceptsCategories !== undefined;
    if (!hasIdRule && !hasCatRule) return false; // sem regra => rejeita por padrão
    if (hasIdRule && !slot.acceptsStickerIds!.includes(sticker.id)) return false;
    if (hasCatRule && !slot.acceptsCategories!.includes(sticker.category)) return false;
    return true;
  };

  const willAccept = !!draggedSticker && accepts(draggedSticker);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (hasSticker) {
      // Disparar evento customizado para o modal global
      const customEvent = new CustomEvent('openStickerModal', {
        bubbles: false,
        cancelable: false,
        detail: { sticker: slot.sticker, slotId: slot.id }
      });
      document.dispatchEvent(customEvent);
    } else if (slot.gameId && onPlayGame) {
      // Slot vazio com jogo associado - prevenir virar página completamente
      e.nativeEvent.stopImmediatePropagation();
      e.nativeEvent.stopPropagation();
      onPlayGame(slot.gameId);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (slot.gameId && !hasSticker) {
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (slot.gameId && !hasSticker) {
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  return (
    <>
      <motion.div
        className={cn(
          "relative aspect-[3/4] rounded-lg transition-all cursor-pointer",
          hasSticker ? "z-50" : "z-10"
        )}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onPointerDown={handlePointerDown}
        onTouchStart={(e) => { 
          e.stopPropagation(); 
          e.preventDefault();
          if (slot.gameId && !hasSticker) {
            e.nativeEvent.stopImmediatePropagation();
          }
        }}
        data-sticker-slot
        style={{
          ...(slot.x !== undefined && slot.y !== undefined
            ? {
                position: "absolute",
                left: `${slot.x}%`,
                top: `${slot.y}%`,
                width: slot.width ? `${slot.width}%` : undefined,
                height: slot.height ? `${slot.height}%` : undefined,
              }
            : {}),
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: hasSticker ? 1.05 : 1.02 }}
        onDragOver={(e) => {
          if (!onDropSticker || hasSticker) return;

          if (draggedSticker && accepts(draggedSticker)) {
            e.preventDefault();
            setIsOver(true);
          } else {
            setIsOver(false);
          }
        }}
        onDragLeave={() => {
          setIsOver(false);
        }}
        onDrop={(e) => {
          if (!onDropSticker || hasSticker) return;

          e.preventDefault();
          setIsOver(false);

          const data = e.dataTransfer.getData("application/json");
          if (!data) return;

          try {
            const sticker: Sticker = JSON.parse(data);
            if (!accepts(sticker)) {
              setRejectKey((k) => k + 1);
              return;
            }
            onDropSticker(slot, sticker);
          } catch (error) {
            console.error("Erro ao processar drop:", error);
          }
        }}
      >
        {hasSticker ? (
          <div className="w-full h-full bg-background overflow-hidden rounded-lg">
            {typeof slot.sticker!.image === "string" ? (
              <img
                src={slot.sticker!.image}
                alt={slot.sticker!.name}
                className="w-full h-full object-cover"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl">
                {slot.sticker!.image}
              </div>
            )}
          </div>
        ) : (
          <motion.div
            key={`reject-${rejectKey}`}
            className={cn(
              "relative w-full h-full border-2 rounded-lg flex flex-col items-center justify-center transition-colors",
              isOver && willAccept
                ? "border-green-400 bg-green-400/10 border-solid"
                : "border-dashed border-muted-foreground/30",
              isOver && !willAccept && "border-red-400 bg-red-400/10 border-solid",
              slot.gameId && "hover:border-primary/50 hover:bg-primary/5"
            )}
            animate={isOver && !willAccept ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
            transition={{ duration: 0.35 }}
          >
            {!slot.gameId && (
              <motion.span
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl text-muted-foreground/30"
              >
                ?
              </motion.span>
            )}
            {slot.gameId && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  scale: [0.98, 1.02, 0.98]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center p-2"
              >
                <div className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-lg px-3 py-2 shadow-lg text-center backdrop-blur-sm border-2 border-primary-foreground/20 w-[80%]">
                  <p className="text-xs sm:text-sm md:text-base font-bold leading-tight">
                    Click to Play<br />& Win!
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </>
  );
};
