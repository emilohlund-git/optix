"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareValues = void 0;
const SortOrder_1 = require("./interfaces/SortOrder");
/**
 * @namespace InternalUtils
 *
 * Helper function to compare two values based on the given sort order.
 * @param a The first value to compare.
 * @param b The second value to compare.
 * @param sortOrder The sorting order, either 'ASC' for ascending or 'DESC' for descending.
 * @returns -1 if 'a' should come before 'b', 1 if 'a' should come after 'b', or 0 if they are equal.
 */
function compareValues(a, b, sortOrder = SortOrder_1.SortOrder.ASC) {
    if (a === b)
        return 0;
    if (sortOrder === SortOrder_1.SortOrder.ASC) {
        return a < b ? -1 : 1;
    }
    else {
        return a > b ? -1 : 1;
    }
}
exports.compareValues = compareValues;
//# sourceMappingURL=index.js.map