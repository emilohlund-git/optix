import { analyzeNumericObjectArray } from "./analyzeData";
import { averageArray } from "./average";
import { chunkArray } from "./chunk";
import { findOutliers } from "./findOutliers";
import { maxArray } from "./max";
import { medianArray } from "./median";
import { minArray } from "./min";
import { normalizeArray } from "./normalize";
import { rangeArray } from "./range";
import { shuffleArray } from "./shuffle";
import { sortArray } from "./sort";
import { standardDeviationArray } from "./standardDeviation";
import { sumArray } from "./sum";

/**
 * @namespace ArrayUtils
 * 
 * Array utilities for TypeScript
 * 
 * A collection of array utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
export namespace ArrayUtils {
  export const sort = sortArray;
  export const median = medianArray;
  export const deviation = standardDeviationArray;
  export const sum = sumArray;
  export const shuffle = shuffleArray;
  export const range = rangeArray;
  export const normalize = normalizeArray;
  export const min = minArray;
  export const max = maxArray;
  export const analyze = analyzeNumericObjectArray;
  export const mean = averageArray;
  export const chunk = chunkArray;
  export const outliers = findOutliers;
}
