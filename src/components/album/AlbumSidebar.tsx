import { Book, Trophy, Users, Gamepad2, HelpCircle, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { useAlbumStore } from "@/store/albumStore";
import { Progress } from "@/components/ui/progress";

export const AlbumSidebar = () => {
  const pages = useAlbumStore((state) => state.pages);
  const availablePacks = useAlbumStore((state) => state.availablePacks);
  const games = useAlbumStore((state) => state.games);
  const achievements = useAlbumStore((state) => state.achievements);

  const { totalStickers, collectedStickers, completionPercentage } = useMemo(() => {
    const total = pages.reduce((acc, page) => acc + page.slots.length, 0);
    const filled = pages.reduce(
      (acc, page) => acc + page.slots.filter((slot) => slot.sticker !== null).length,
      0
    );
    return {
      totalStickers: total,
      collectedStickers: filled,
      completionPercentage: total ? (filled / total) * 100 : 0,
    };
  }, [pages]);

  const navItems = [
    { to: "/", icon: Book, label: "Álbum" },
    { to: "/games", icon: Gamepad2, label: "Jogos" },
    { to: "/collection", icon: Trophy, label: "Coleção" },
    { to: "/achievements", icon: Trophy, label: "Conquistas" },
    { to: "/friends", icon: Users, label: "Amigos" },
    { to: "/tutorial", icon: HelpCircle, label: "Tutorial" },
  ];

  const unlockedAchievements = achievements.filter(a => a.unlocked).length;

  return (
    <aside className="w-72 bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col">
      {/* User Profile */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-sidebar-accent flex items-center justify-center">
            <User className="w-6 h-6 text-sidebar-accent-foreground" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Colecionador</h3>
            <p className="text-sm text-sidebar-foreground/70">Nível 1</p>
          </div>
        </div>
        
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progresso</span>
            <span className="font-semibold">{Math.round(completionPercentage)}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
          <p className="text-xs text-sidebar-foreground/60">
            {collectedStickers} / {totalStickers} figurinhas
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground font-semibold"
                  : "hover:bg-sidebar-accent text-sidebar-foreground/80 hover:text-sidebar-foreground"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t border-sidebar-border space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-sidebar-foreground/70">Pacotes</span>
          <span className="font-semibold bg-sidebar-accent px-2 py-1 rounded">
            {availablePacks.length}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-sidebar-foreground/70">Conquistas</span>
          <span className="font-semibold bg-sidebar-accent px-2 py-1 rounded">
            {unlockedAchievements}/{achievements.length}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-sidebar-foreground/70">Jogos</span>
          <span className="font-semibold bg-sidebar-accent px-2 py-1 rounded">
            {games.filter(g => g.completed).length}/{games.length}
          </span>
        </div>
      </div>
    </aside>
  );
};
