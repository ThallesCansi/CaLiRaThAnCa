import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import type { Achievement } from "@/types/album";
import { sfx } from "@/utils/sfx";

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export const AchievementNotification = ({ achievement, onClose }: AchievementNotificationProps) => {
  // Disabled globally per user request: do not render or conclude achievements
  return null;
};
