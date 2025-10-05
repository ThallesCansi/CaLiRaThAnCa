import { motion } from "framer-motion";
import { Book, Gamepad2, Package, Trophy } from "lucide-react";

const Tutorial = () => {
  const steps = [
    {
      icon: Gamepad2,
      title: "Play and Have Fun",
      description: "Complete the available minigames to unlock sticker packs.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Package,
      title: "Open Your Packs",
      description: "Tear open the virtual pack and discover which stickers you won!",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Book,
      title: "Complete the Album",
      description: "Stickers are automatically placed in the album. Browse through the pages and watch your collection grow!",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Trophy,
      title: "Unlock Achievements",
      description: "Complete special challenges and earn exclusive achievements!",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-muted-foreground">
            Learn to use the digital sticker album in 4 simple steps!
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-lg p-8 border border-border"
            >
              <div className="flex items-start gap-6">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-muted-foreground">
                      STEP {index + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-br from-primary/10 to-transparent rounded-xl p-8 border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-3">💡 Pro Tip</h3>
          <p className="text-muted-foreground text-lg">
            The more you play, the more packs you earn! Each game has its own unique reward.
            Complete all games to unlock the "Game Master" achievement!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Tutorial;
