import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Sticker } from "@/types/album";
import { X } from "lucide-react";

interface StickerModalProps {
  sticker: Sticker | null;
  open?: boolean;
  onClose: () => void;
}

export const StickerModal = ({ sticker, open = false, onClose }: StickerModalProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    let rafId: number | null = null;
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = cardRef.current!.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setMousePosition({ x: clamp(x), y: clamp(y) });
      });
    };

    const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave as any);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave as any);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!sticker) return null;

  const tiltX = mousePosition.y * 10;
  const tiltY = mousePosition.x * -10;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={onClose}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
          {/* Backdrop com blur */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-black/70"
          />

          {/* Botão de fechar */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-8 right-8 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          {/* Card da figurinha com efeitos */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotateX: tiltX,
              rotateY: tiltY,
            }}
            exit={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              rotateX: { duration: 0.1 },
              rotateY: { duration: 0.1 }
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[400px] max-w-[90vw] aspect-[3/4] cursor-pointer"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Efeito holográfico de fundo */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-50"
              style={{
                background: `
                  radial-gradient(
                    circle at ${50 + mousePosition.x * 50}% ${50 + mousePosition.y * 50}%,
                    rgba(255, 0, 255, 0.3),
                    rgba(0, 255, 255, 0.3),
                    rgba(255, 255, 0, 0.3)
                  )
                `,
                filter: "blur(40px)",
                transform: "translateZ(-50px)"
              }}
            />

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.1)",
                  "0 0 40px rgba(255, 255, 255, 0.3)",
                  "0 0 20px rgba(255, 255, 255, 0.1)",
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Card principal */}
            <div 
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-background to-muted"
              style={{
                transform: "translateZ(50px)"
              }}
            >
              {/* Shimmer holográfico overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(
                      ${45 + mousePosition.x * 45}deg,
                      transparent 30%,
                      rgba(255, 255, 255, 0.1) 50%,
                      transparent 70%
                    )
                  `,
                  mixBlendMode: "overlay"
                }}
              />

              {/* Reflexo arco-íris */}
              <motion.div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: `
                    repeating-linear-gradient(
                      ${90 + mousePosition.x * 180}deg,
                      rgba(255, 0, 0, 0.1) 0px,
                      rgba(255, 255, 0, 0.1) 2px,
                      rgba(0, 255, 0, 0.1) 4px,
                      rgba(0, 255, 255, 0.1) 6px,
                      rgba(0, 0, 255, 0.1) 8px,
                      rgba(255, 0, 255, 0.1) 10px
                    )
                  `,
                  mixBlendMode: "color-dodge"
                }}
              />

              {/* Imagem da figurinha */}
              {typeof sticker.image === "string" ? (
                <img
                  src={sticker.image}
                  alt={sticker.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[120px]">
                  {sticker.image}
                </div>
              )}

              {/* Brilho nos cantos */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/40 to-transparent rounded-full blur-2xl" />
            </div>

            {/* Nome da figurinha */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-16 left-0 right-0 text-center"
            >
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                {sticker.name}
              </h3>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
