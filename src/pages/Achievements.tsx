import { motion } from "framer-motion";
import { useAlbumStore } from "@/store/albumStore";
import { Lock } from "lucide-react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const Achievements = () => {
  const achievements = useAlbumStore((state) => state.achievements);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Achievements</h1>
        <p className="text-muted-foreground">
          Unlock achievements by completing challenges in the album!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className={`bg-card rounded-xl shadow-lg p-6 border-2 transition-all ${
              achievement.unlocked
                ? "border-success bg-gradient-to-br from-success/10 to-transparent"
                : "border-border opacity-60"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${
                  achievement.unlocked
                    ? "bg-gradient-success"
                    : "bg-muted"
                }`}
              >
                {achievement.unlocked ? achievement.icon : <Lock className="w-6 h-6" />}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{achievement.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {achievement.description}
                </p>
                
                {achievement.unlocked && achievement.unlockedAt && (
                  <p className="text-xs text-success font-semibold">
                    Unlocked on {format(new Date(achievement.unlockedAt), "MM/dd/yyyy", { locale: enUS })}
                  </p>
                )}
                
                {!achievement.unlocked && (
                  <p className="text-xs text-muted-foreground font-semibold">
                    🔒 Locked
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
