import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { Achievement } from "@/types/album";
import { sfx } from "@/utils/sfx";

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export const AchievementNotification = ({ achievement, onClose }: AchievementNotificationProps) => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState<Achievement | null>(null);

  useEffect(() => {
    if (!achievement) return;

    // Capture the achievement locally so it persists even if the prop changes.
    setCurrent(achievement);
    setShow(true);

    // Play achievement sound (customizável via /audios/achievement.*)
    sfx.confetti();

    // Auto close after 5 seconds
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        onClose();
        setCurrent(null);
      }, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [achievement, onClose]);

  return (
    <AnimatePresence>
      {show && current && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
        >
          <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-1 rounded-2xl shadow-2xl">
            <div className="bg-gradient-to-br from-yellow-950 to-yellow-900 rounded-xl p-6 min-w-[400px] relative overflow-hidden">
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              
              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center shadow-lg"
                >
                  <Trophy className="w-8 h-8 text-yellow-950" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <p className="text-yellow-300 text-sm font-bold uppercase tracking-wider">
                      Achievement Unlocked!
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {current?.name}
                  </h3>
                  <p className="text-yellow-200 text-sm">
                    {current?.description}
                  </p>
                </div>

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-6xl opacity-20 absolute -right-4 -bottom-4"
                >
                  {current?.icon}
                </motion.div>
              </div>

              {/* Sparkle effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                  initial={{
                    x: "50%",
                    y: "50%",
                    scale: 0,
                  }}
                  animate={{
                    x: `${50 + Math.cos((i * Math.PI * 2) / 6) * 100}%`,
                    y: `${50 + Math.sin((i * Math.PI * 2) / 6) * 100}%`,
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
