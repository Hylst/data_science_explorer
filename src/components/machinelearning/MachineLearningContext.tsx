
import React, { createContext, useState, useContext, ReactNode } from "react";

interface MachineLearningContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MachineLearningContext = createContext<MachineLearningContextType | undefined>(undefined);

export const MachineLearningContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <MachineLearningContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </MachineLearningContext.Provider>
  );
};

export const useMachineLearning = () => {
  const context = useContext(MachineLearningContext);
  if (context === undefined) {
    throw new Error("useMachineLearning must be used within a MachineLearningContextProvider");
  }
  return context;
};
