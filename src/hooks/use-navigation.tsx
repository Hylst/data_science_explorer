
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useNavigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  const closeSearch = () => setIsSearchOpen(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return {
    isSearchOpen,
    toggleSearch,
    closeSearch,
    isActiveRoute,
    currentPath: location.pathname
  };
};
