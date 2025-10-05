import { Book, Trophy, Users, Gamepad2, HelpCircle, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { useAlbumStore } from "@/store/albumStore";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export const AlbumSidebar = () => {
  const { open } = useSidebar();
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
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center justify-between">
          {open && <span className="font-bold text-lg">Arena do Clima</span>}
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {/* User Profile */}
        <SidebarGroup>
          <div className="p-4 border-b">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-sidebar-accent-foreground" />
              </div>
              {open && (
                <div className="min-w-0">
                  <h3 className="font-bold text-sm truncate">Colecionador</h3>
                  <p className="text-xs text-sidebar-foreground/70">Nível 1</p>
                </div>
              )}
            </div>
            
            {open && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Progresso</span>
                  <span className="font-semibold">{Math.round(completionPercentage)}%</span>
                </div>
                <Progress value={completionPercentage} className="h-2" />
                <p className="text-xs text-sidebar-foreground/60">
                  {collectedStickers} / {totalStickers} figurinhas
                </p>
              </div>
            )}
          </div>
        </SidebarGroup>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.to}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 ${
                        isActive ? "font-semibold" : ""
                      }`
                    }
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    {open && <span>{item.label}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Quick Stats */}
      <SidebarFooter className="border-t p-4">
        {open ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-sidebar-foreground/70">Pacotes</span>
              <span className="font-semibold bg-sidebar-accent px-2 py-1 rounded">
                {availablePacks.length}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-sidebar-foreground/70">Conquistas</span>
              <span className="font-semibold bg-sidebar-accent px-2 py-1 rounded">
                {unlockedAchievements}/{achievements.length}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-sidebar-foreground/70">Jogos</span>
              <span className="font-semibold bg-sidebar-accent px-2 py-1 rounded">
                {games.filter(g => g.completed).length}/{games.length}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="text-center text-xs font-semibold">{availablePacks.length}</div>
            <div className="text-center text-xs font-semibold">{unlockedAchievements}</div>
            <div className="text-center text-xs font-semibold">{games.filter(g => g.completed).length}</div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};
