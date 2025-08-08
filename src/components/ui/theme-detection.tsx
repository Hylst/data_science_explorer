
import React from "react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

interface ThemeDetectionProps {
  children: React.ReactNode;
  className?: string;
  lightClassName?: string;
  darkClassName?: string;
}

export const ThemeAwareContainer = ({
  children,
  className,
  lightClassName = "",
  darkClassName = "",
}: ThemeDetectionProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={cn(className, isDark ? darkClassName : lightClassName)}>
      {children}
    </div>
  );
};

export const CardSurfaceContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ThemeAwareContainer 
      className={cn("card-surface p-4 rounded-lg", className)}
    >
      {children}
    </ThemeAwareContainer>
  );
};
