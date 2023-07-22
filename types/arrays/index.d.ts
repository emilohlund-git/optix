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
export declare namespace ArrayUtils {
    const sort: typeof sortArray;
    const median: typeof medianArray;
    const deviation: typeof standardDeviationArray;
    const sum: typeof sumArray;
    const shuffle: typeof shuffleArray;
    const range: typeof rangeArray;
    const normalize: typeof normalizeArray;
    const min: typeof minArray;
    const max: typeof maxArray;
    const analyze: typeof analyzeNumericObjectArray;
    const mean: typeof averageArray;
    const chunk: typeof chunkArray;
    const outliers: typeof findOutliers;
}
