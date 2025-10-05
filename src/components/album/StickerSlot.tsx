import { motion } from "framer-motion";
import type { StickerSlot as StickerSlotType } from "@/types/album";
import { cn } from "@/lib/utils";
import type { Sticker } from "@/types/album";
import { useState, useEffect } from "react";
import { StickerModal } from "./StickerModal";

interface StickerSlotProps {
  slot: StickerSlotType;
  onClick?: () => void;
  onDropSticker?: (slot: StickerSlotType, sticker: Sticker) => void;
  draggedSticker?: Sticker;
}

export const StickerSlot = ({ slot, onClick, onDropSticker, draggedSticker }: StickerSlotProps) => {
  const hasSticker = slot.sticker !== null;
  const [modalOpen, setModalOpen] = useState(false);
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

  // Event listener global ultra-agressivo
  useEffect(() => {
    if (!hasSticker) return;

    const handleAnyClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-sticker-slot]')) {
        // Se é um slot com figurinha, prevenir QUALQUER propagação
        e.stopPropagation();
        e.preventDefault();
        e.stopImmediatePropagation();

        if (e.cancelBubble !== undefined) {
          e.cancelBubble = true;
        }

        if (e as any) {
          (e as any).returnValue = false;
        }

        // Não deixar o evento continuar de forma alguma
        return false;
      }
    };

    // Capturar em todas as fases possíveis
    document.addEventListener('click', handleAnyClick, true);
    document.addEventListener('mousedown', handleAnyClick, true);
    document.addEventListener('mouseup', handleAnyClick, true);

    return () => {
      document.removeEventListener('click', handleAnyClick, true);
      document.removeEventListener('mousedown', handleAnyClick, true);
      document.removeEventListener('mouseup', handleAnyClick, true);
    };
  }, [hasSticker]);

  const handleInteraction = (e: React.MouseEvent) => {
    if (hasSticker) {
      // Abordagem FINAL: Usar um evento customizado
      e.stopPropagation();
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();

      // Disparar evento customizado para máxima prioridade
      const customEvent = new CustomEvent('openStickerModal', {
        bubbles: false,
        cancelable: false,
        detail: { sticker: slot.sticker, slotId: slot.id }
      });

      // Disparar no document para que possa ser capturado globalmente
      document.dispatchEvent(customEvent);

      // Também definir o estado local como backup
      setTimeout(() => {
        setModalOpen(true);
      }, 0);

      return false;
    }
  };

  return (
    <>
      <motion.div
        className={cn(
          "relative aspect-[3/4] rounded-lg transition-all cursor-pointer",
          hasSticker ? "z-50" : "z-10"
        )}
        onMouseDown={handleInteraction}
        onClick={handleInteraction}
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
          <div className="w-full h-full bg-background overflow-hidden">
            {typeof slot.sticker!.image === "string" ? (
              <img
                src={slot.sticker!.image}
                alt={slot.sticker!.name}
                className="w-full h-full object-cover"
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
              "relative w-full h-full border-2 rounded-lg flex items-center justify-center transition-colors",
              isOver && willAccept
                ? "border-green-400 bg-green-400/10 border-solid"
                : "border-dashed border-muted-foreground/30",
              isOver && !willAccept && "border-red-400 bg-red-400/10 border-solid"
            )}
            animate={isOver && !willAccept ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.span
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl text-muted-foreground/30"
            >
              ?
            </motion.span>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};
