/**
 * Test import file to verify module resolution
 * This file tests the import of data-preparation-enhanced-definitions
 */

import { dataPreparationEnhancedDefinitions } from '@/data/data-preparation-enhanced-definitions';

// Test that the import works correctly
console.log('Data preparation definitions loaded:', Object.keys(dataPreparationEnhancedDefinitions).length, 'definitions');

// Export for potential testing use
export { dataPreparationEnhancedDefinitions };