
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  href: string;
  title: string;
  isActive?: boolean;
  icon?: React.ReactNode;
}

interface SidebarProps {
  items: SidebarItemProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <nav className="flex flex-col space-y-1">
      {items.map((item, i) => (
        <Link
          key={i}
          to={item.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            item.isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground"
          )}
        >
          {item.icon && <span className="w-4 h-4">{item.icon}</span>}
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
