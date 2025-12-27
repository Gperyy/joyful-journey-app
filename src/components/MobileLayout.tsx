import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Users, Ticket } from "lucide-react";

interface MobileLayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: "/", icon: Home, label: "Ana Sayfa" },
  { path: "/program", icon: Calendar, label: "Gösteri Programı" },
  { path: "/katilimcilar", icon: Users, label: "Katılımcılar" },
  { path: "/biletler", icon: Ticket, label: "Biletler" },
];

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 pb-20 overflow-y-auto">{children}</main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border safe-area-bottom">
        <div className="flex justify-around items-center py-2 px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[10px] font-medium ${isActive ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MobileLayout;
