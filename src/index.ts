/**
 * @namespace smoothie.ts
 * 
 * Utility Library for TypeScript
 * 
 * A collection of utility functions to simplify common tasks and improve code quality in TypeScript projects.
 * 
 * @version 1.0.0
 * @license ISC
 * @author Emil Ölund
 * @see {@link https://github.com/emilohlund-git/smoothie-ts}
 */

import { analyzeDataArray, averageArray, chunkArray, findOutliers, maxArray, medianArray, minArray, normalizeArray, rangeArray, shuffleArray, sortArray, standardDeviationArray, sumArray } from "./arrays";
import { capitalizeFirstLetter, extractSubstringsByPattern, getWordFrequency, reverseString, titleCase, tokenizeSentence, truncateString } from "./strings";
import { compareValues } from "./utils";

export { analyzeDataArray, averageArray, capitalizeFirstLetter, chunkArray, compareValues, extractSubstringsByPattern, findOutliers, getWordFrequency, maxArray, medianArray, minArray, normalizeArray, rangeArray, reverseString, shuffleArray, sortArray, standardDeviationArray, sumArray, titleCase, tokenizeSentence, truncateString };

