"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = void 0;
function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
exports.sumArray = sumArray;
