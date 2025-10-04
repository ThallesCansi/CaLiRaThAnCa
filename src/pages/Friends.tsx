import { Users } from "lucide-react";

const Friends = () => {
  return (
    <div className="p-8 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Users className="w-12 h-12 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Amigos</h1>
        <p className="text-muted-foreground text-lg mb-6">
          O sistema de amigos estará disponível em breve! Em breve você poderá:
        </p>
        <ul className="text-left space-y-3 text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="text-primary">✓</span> Adicionar amigos e ver suas coleções
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">✓</span> Trocar figurinhas repetidas
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">✓</span> Competir em rankings
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">✓</span> Enviar presentes e desafios
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Friends;
