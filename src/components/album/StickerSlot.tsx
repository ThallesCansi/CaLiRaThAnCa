import { motion } from "framer-motion";
import type { StickerSlot as StickerSlotType } from "@/types/album";
import { cn } from "@/lib/utils";
import type { Sticker } from "@/types/album";
import { useState } from "react";
import { StickerModal } from "./StickerModal";

interface StickerSlotProps {
  slot: StickerSlotType;
  onClick?: () => void;
  onDropSticker?: (slot: StickerSlotType, sticker: Sticker) => void;
  draggedSticker?: Sticker;
}

const rarityColors = {
  common: "from-gray-400 to-gray-500",
  rare: "from-blue-400 to-blue-600",
  epic: "from-purple-400 to-purple-600",
  legendary: "from-yellow-400 to-yellow-600",
};

export const StickerSlot = ({ slot, onClick, onDropSticker, draggedSticker }: StickerSlotProps) => {
  const hasSticker = slot.sticker !== null;
  const isPolygon = slot.shape === "polygon" && slot.points && slot.points.length >= 3;
  const clipPath = isPolygon
    ? `polygon(${slot.points!.map((p) => `${p.x}% ${p.y}%`).join(", ")})`
    : undefined;
  const canDrop = Boolean(onDropSticker) && !hasSticker;
  const [isOver, setIsOver] = useState(false);
  const [rejectKey, setRejectKey] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const accepts = (sticker: Sticker) => {
    const hasIdRule = slot.acceptsStickerIds !== undefined;
    const hasCatRule = slot.acceptsCategories !== undefined;
    if (!hasIdRule && !hasCatRule) return false; // sem regra => rejeita por padrão
    if (hasIdRule && !slot.acceptsStickerIds!.includes(sticker.id)) return false;
    if (hasCatRule && !slot.acceptsCategories!.includes(sticker.category)) return false;
    return true;
  };

  // Deterministic slight angle (-3 to 3 deg) based on slot id when no angle provided
  const computeAngle = () => {
    if (typeof slot.angle === "number") return slot.angle;
    let hash = 0;
    for (let i = 0; i < slot.id.length; i++) hash = (hash * 31 + slot.id.charCodeAt(i)) | 0;
    return ((hash % 7) - 3); // -3..3
  };

  const willAccept = !!draggedSticker && accepts(draggedSticker);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
  };

  const handleStickerClick = (e: React.MouseEvent) => {
    if (hasSticker) {
      e.stopPropagation();
      setModalOpen(true);
    }
  };

  return (
    <>
      <StickerModal 
        sticker={slot.sticker} 
        onClose={() => setModalOpen(false)} 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: hasSticker ? 1.05 : 1.03 }}
        transition={{ delay: slot.position * 0.05 }}
        onClick={handleClick}
      className={cn(
        "relative aspect-[3/4] rounded-lg transition-all",
        hasSticker
          ? "border-0 shadow-none"
          : cn(
              "border border-dashed border-muted-foreground/30",
              // removemos mudanças de cor; mantemos apenas leve feedback de over
              isOver && "border-muted-foreground/50"
            ),
        draggedSticker ? (willAccept ? "cursor-copy" : "cursor-not-allowed") : "cursor-pointer"
      )}
      style={{
        ...(slot.x !== undefined && slot.y !== undefined
          ? {
              position: "absolute" as const,
              left: `${slot.x}%`,
              top: `${slot.y}%`,
              width: slot.width ? `${slot.width}%` : undefined,
              height: slot.height ? `${slot.height}%` : undefined,
            }
          : {}),
        clipPath,
        WebkitClipPath: clipPath,
      }}
      onDragOver={(e) => {
        if (!canDrop) return;
        // Só impedir o default (permitir drop) se a figurinha atual for aceita
        if (draggedSticker && accepts(draggedSticker)) {
          e.preventDefault();
          setIsOver(true);
        } else {
          setIsOver(false);
        }
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={(e) => {
        if (!canDrop) return;
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
          onDropSticker?.(slot, sticker);
        } catch {}
      }}
    >
      {/* Overlay temporário para visualizar o contorno/área do slot */}
      <div
        className="pointer-events-none absolute inset-0 rounded-md"
        style={{
          background: "rgba(37, 99, 235, 0.22)", // azul com transparência
          clipPath,
          WebkitClipPath: clipPath,
        }}
      />
      {hasSticker ? (
        <motion.div
          initial={{ rotateY: -180, opacity: 0, scale: 0.8 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="relative z-10 w-full h-full cursor-pointer"
          onClick={handleStickerClick}
        >
          <motion.div 
            className="w-full h-full"
            animate={{
              rotateZ: [0, computeAngle(), computeAngle()],
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {typeof slot.sticker!.image === "string" && /^(\/|https?:)/.test(slot.sticker!.image as string) ? (
              <motion.img
                src={slot.sticker!.image as string}
                alt={slot.sticker!.name || "sticker"}
                className="w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
                initial={{ filter: "brightness(1.2)" }}
                animate={{ filter: "brightness(1)" }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl">
                <span>{slot.sticker!.image as any}</span>
              </div>
            )}
          </motion.div>
          
          {/* Efeito de brilho ao colar */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-200/40 via-transparent to-transparent pointer-events-none"
            initial={{ opacity: 0.8, scale: 1.2 }}
            animate={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      ) : (
        <motion.div
          key={`reject-${rejectKey}`}
          className="relative z-10 w-full h-full flex items-center justify-center"
          animate={rejectKey > 0 ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.span
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl text-muted-foreground/30"
          >
            ?
          </motion.span>
          {isPolygon && (
            <div
              className="pointer-events-none absolute inset-0 rounded-md"
              style={{
                outline: "2px dashed rgba(150, 150, 150, 0.95)",
                outlineOffset: "-2px",
                clipPath,
                WebkitClipPath: clipPath,
              }}
            />
          )}
        </motion.div>
      )}
      </motion.div>
    </>
  );
};
