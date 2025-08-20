/**
 * Utility functions to migrate from old to new glossary format
 */
import { GlossaryTermDefinition } from '@/components/ui/glossary-term';
import { GlossaryEntry, GlossaryCategory } from './types';

/**
 * Convert old GlossaryTermDefinition to new GlossaryEntry format
 */
export function migrateDefinitionToEntry(
  definition: GlossaryTermDefinition,
  category: GlossaryCategory,
  icon: string = 'BookOpen'
): GlossaryEntry {
  return {
    term: definition.term,
    description: definition.longDefinition || definition.shortDefinition,
    shortDefinition: definition.shortDefinition,
    longDefinition: definition.longDefinition,
    category,
    icon,
    examples: definition.examples,
    relatedTerms: definition.relatedTerms,
    source: definition.source,
    sourceUrl: definition.sourceUrl,
    domain: definition.domain,
    level: definition.level,
    synonyms: definition.synonyms,
    englishTerm: definition.englishTerm
  };
}

/**
 * Convert new GlossaryEntry to old GlossaryTermDefinition format for backward compatibility
 */
export function convertEntryToDefinition(entry: GlossaryEntry): GlossaryTermDefinition {
  return {
    term: entry.term,
    shortDefinition: entry.shortDefinition || entry.description.substring(0, 150) + "...",
    longDefinition: entry.longDefinition || entry.description,
    examples: entry.examples,
    relatedTerms: entry.relatedTerms,
    source: entry.source,
    sourceUrl: entry.sourceUrl,
    domain: entry.domain as "statistics" | "programming" | "dataviz" | "dataprocessing" | "machinelearning" | "general",
    level: entry.level,
    synonyms: entry.synonyms,
    englishTerm: entry.englishTerm
  };
}

/**
 * Migrate entire definition collection to new format
 */
export function migrateDefinitionCollection(
  definitions: Record<string, GlossaryTermDefinition>,
  category: GlossaryCategory,
  icon: string = 'BookOpen'
): GlossaryEntry[] {
  return Object.values(definitions).map(def => 
    migrateDefinitionToEntry(def, category, icon)
  );
}

/**
 * Convert array of GlossaryEntry to legacy format for components that still need it
 */
export function convertEntriesToDefinitions(entries: GlossaryEntry[]): Record<string, GlossaryTermDefinition> {
  const definitions: Record<string, GlossaryTermDefinition> = {};
  
  entries.forEach(entry => {
    const key = entry.term.toLowerCase().replace(/\s+/g, '-');
    definitions[key] = convertEntryToDefinition(entry);
  });
  
  return definitions;
}