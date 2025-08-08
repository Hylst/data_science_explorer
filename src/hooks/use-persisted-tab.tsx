
import { useState, useEffect } from "react";

export const usePersistedTab = (key: string, defaultValue: string) => {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(key);
      return stored || defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, activeTab);
  }, [key, activeTab]);

  return [activeTab, setActiveTab] as const;
};
