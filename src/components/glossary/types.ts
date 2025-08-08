
import { ReactNode } from "react";

export interface GlossaryEntry {
  term: string;
  description: string;
  icon: ReactNode;
  category?: string;
}
