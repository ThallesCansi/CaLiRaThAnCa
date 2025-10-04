import { motion } from "framer-motion";
import { Book, Gamepad2, Package, Trophy } from "lucide-react";

const Tutorial = () => {
  const steps = [
    {
      icon: Gamepad2,
      title: "Jogue e Divirta-se",
      description: "Complete os minigames disponíveis para desbloquear pacotes de figurinhas.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Package,
      title: "Abra seus Pacotes",
      description: "Rasque o pacote virtual e descubra quais figurinhas você ganhou!",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Book,
      title: "Complete o Álbum",
      description: "As figurinhas são coladas automaticamente no álbum. Navegue pelas páginas e veja sua coleção crescer!",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Trophy,
      title: "Desbloqueie Conquistas",
      description: "Complete desafios especiais e ganhe conquistas exclusivas!",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Como Funciona</h1>
          <p className="text-xl text-muted-foreground">
            Aprenda a usar o álbum de figurinhas digital em 4 passos simples!
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
                      PASSO {index + 1}
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
          <h3 className="text-2xl font-bold mb-3">💡 Dica Pro</h3>
          <p className="text-muted-foreground text-lg">
            Quanto mais você joga, mais pacotes você ganha! Cada jogo tem sua própria recompensa única.
            Complete todos os jogos para desbloquear a conquista "Mestre dos Jogos"!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Tutorial;
