import { motion } from "framer-motion";
import type { Sticker } from "@/types/album";
import { useState } from "react";

interface DraggableStickerProps {
  sticker: Sticker;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

const rarityColors = {
  common: "from-gray-400 to-gray-500",
  rare: "from-blue-400 to-blue-600",
  epic: "from-purple-400 to-purple-600",
  legendary: "from-yellow-400 to-yellow-600",
};

const rarityGlow = {
  common: "drop-shadow-[0_0_8px_rgba(156,163,175,0.6)]",
  rare: "drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]",
  epic: "drop-shadow-[0_0_16px_rgba(168,85,247,0.8)]",
  legendary: "drop-shadow-[0_0_20px_rgba(234,179,8,0.9)]",
};

export const DraggableSticker = ({ sticker, onDragStart, onDragEnd }: DraggableStickerProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    const data = JSON.stringify(sticker);
    e.dataTransfer.setData("application/json", data);
    e.dataTransfer.effectAllowed = "copy";
    
    // Criar elemento customizado para o arraste
    const dragImage = document.createElement("div");
    dragImage.style.width = "120px";
    dragImage.style.height = "160px";
    dragImage.style.position = "absolute";
    dragImage.style.top = "-1000px";
    dragImage.className = "pointer-events-none";
    
    if (typeof sticker.image === "string" && /^(\/|https?:)/.test(sticker.image)) {
      const img = document.createElement("img");
      img.src = sticker.image;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "contain";
      img.style.borderRadius = "8px";
      img.style.transform = "rotate(5deg)";
      dragImage.appendChild(img);
    }
    
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 60, 80);
    
    setTimeout(() => document.body.removeChild(dragImage), 0);
    onDragStart?.();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    onDragEnd?.();
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="relative cursor-grab active:cursor-grabbing touch-none"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        animate={isDragging ? {
          scale: 1.1,
          rotate: 8,
        } : {
          scale: 1,
          rotate: 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className={`relative aspect-[3/4] rounded-lg overflow-hidden border-2 bg-gradient-to-br ${rarityColors[sticker.rarity]} p-[2px] shadow-lg transition-all ${isDragging ? rarityGlow[sticker.rarity] : ''}`}>
          <div className="w-full h-full bg-background rounded-md overflow-hidden">
            {typeof sticker.image === "string" && /^(\/|https?:)/.test(sticker.image) ? (
              <img
                src={sticker.image}
                alt={sticker.name}
                className="w-full h-full object-contain pointer-events-none select-none"
                draggable={false}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl">
                <span>{sticker.image as any}</span>
              </div>
            )}
          </div>
        </div>

        {/* Efeito de brilho quando arrastando */}
        {isDragging && (
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{
              background: `radial-gradient(circle, ${
                sticker.rarity === "legendary" ? "rgba(234,179,8,0.4)" :
                sticker.rarity === "epic" ? "rgba(168,85,247,0.4)" :
                sticker.rarity === "rare" ? "rgba(59,130,246,0.4)" :
                "rgba(156,163,175,0.4)"
              } 0%, transparent 70%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};
