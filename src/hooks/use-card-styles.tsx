
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export const useCardStyles = () => {
  const { theme } = useTheme();
  
  const cardSurfaceClass = "card-surface";
  
  const applyCardSurface = (additionalClasses?: string) => {
    return cn(cardSurfaceClass, additionalClasses);
  };

  return {
    cardSurfaceClass,
    applyCardSurface,
    isDarkMode: theme === "dark",
    isLightMode: theme === "light" || theme === "system",
  };
};
