"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeNumericArray = exports.analyzeNumericObjectArray = void 0;
const __1 = require("..");
/**
 * @namespace ArrayUtils
 *
 * Analyze an array of objects with numeric attributes and provide various statistical measures and transformations.
 *
 * This utility function takes an input array of objects with numeric attributes and performs a comprehensive analysis
 * to calculate various statistical measures and transformations on each attribute. The function calculates
 * the average, maximum, minimum, median, range, normalized values, standard deviation, sum, sorted data,
 * and shuffled data of each attribute in the input objects. Additionally, it identifies any outliers present in the data.
 *
 * @param {T[]} data - The input array of objects with numeric attributes to be analyzed.
 *
 * @returns {Record<string, AnalyzeDataResult>} An object containing the analysis results for each attribute.
 *
 * @example
 * const salesData = [
 *   { product: 'Widget', sales: 1200, revenue: 24000 },
 *   { product: 'Gadget', sales: 800, revenue: 32000 },
 *   { product: 'Doodad', sales: 1600, revenue: 12800 },
 *   // ... and more data entries
 * ];
 *
 * const analysisResults = ArrayUtils.analyze(salesData);
 *
 * console.log('Sales Data Analysis:', analysisResults.sales);
 * console.log('Revenue Data Analysis:', analysisResults.revenue);
 * // Output for sales data:
 * // {
 * //   mean: 1200,
 * //   max: 1600,
 * //   min: 800,
 * //   median: 1200,
 * //   range: 800,
 * //   normalized: [0, 0.5, 1],
 * //   standardDeviation: 328.02,
 * //   sum: 3600,
 * //   sorted: [800, 1200, 1600],
 * //   shuffled: [1200, 1600, 800],
 * //   outliers: []
 * // }
 *
 * // Output for revenue data:
 * // {
 * //   mean: 22933.33,
 * //   max: 32000,
 * //   min: 12800,
 * //   median: 24000,
 * //   range: 19200,
 * //   normalized: [0, 1],
 * //   standardDeviation: 9375.57,
 * //   sum: 68800,
 * //   sorted: [12800, 24000, 32000],
 * //   shuffled: [32000, 24000, 12800],
 * //   outliers: []
 * // }
 */
function analyzeNumericObjectArray(data) {
    const result = {};
    for (const key in data[0]) {
        if (typeof data[0][key] === 'number') {
            const attributeData = data.map((item) => item[key]);
            result[key] = (0, exports.analyzeNumericArray)(attributeData);
        }
    }
    return result;
}
exports.analyzeNumericObjectArray = analyzeNumericObjectArray;
/**
 * Analyze an array of numeric data and provide various statistical measures and transformations.
 *
 * This utility function takes an input array of numerical data and performs a comprehensive analysis
 * to calculate various statistical measures and transformations on the data. The function calculates
 * the average, maximum, minimum, median, range, normalized values, standard deviation, sum, sorted data,
 * and shuffled data of the input array. Additionally, it identifies any outliers present in the data.
 *
 * @param {number[]} attributeData - The input array of numerical data to be analyzed.
 *
 * @returns {AnalyzeDataResult} An object containing the analysis results.
 *
 * @example
 * const temperatureData = [25.6, 26.2, 24.8, 23.5, 27.3, 26.8, 27.9, 24.5, 25.2, 26.1];
 * const analysisResults = analyzeNumericArray(temperatureData);
 *
 * console.log('Average Temperature:', analysisResults.mean);
 * console.log('Max Temperature:', analysisResults.max);
 * console.log('Min Temperature:', analysisResults.min);
 * console.log('Median Temperature:', analysisResults.median);
 * console.log('Temperature Range:', analysisResults.range);
 * console.log('Normalized Temperatures:', analysisResults.normalized);
 * console.log('Temperature Standard Deviation:', analysisResults.standardDeviation);
 * console.log('Total Temperature Sum:', analysisResults.sum);
 * console.log('Sorted Temperatures:', analysisResults.sorted);
 * console.log('Shuffled Temperatures:', analysisResults.shuffled);
 * console.log('Outliers:', analysisResults.outliers);
 */
const analyzeNumericArray = (attributeData) => {
    const mean = __1.ArrayUtils.mean(attributeData);
    const max = __1.ArrayUtils.max(attributeData);
    const min = __1.ArrayUtils.min(attributeData);
    const median = __1.ArrayUtils.median(attributeData);
    const normalized = __1.ArrayUtils.normalize(attributeData, 0, 1);
    const standardDeviation = __1.ArrayUtils.deviation(attributeData);
    const sum = __1.ArrayUtils.sum(attributeData);
    const sorted = __1.ArrayUtils.sort(attributeData);
    const shuffled = __1.ArrayUtils.shuffle(attributeData);
    const outliers = __1.ArrayUtils.outliers(attributeData);
    return {
        mean,
        max,
        min,
        median,
        normalized,
        standardDeviation,
        sum,
        sorted,
        shuffled,
        outliers,
    };
};
exports.analyzeNumericArray = analyzeNumericArray;
//# sourceMappingURL=analyzeData.js.map