import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { containsWhitespace as _containsWhitespace } from "./containsWhitespace";
import { extractSubstringsByPattern } from "./extractSubstringsByPattern";
import { getWordFrequency } from "./getWordFrequency";
import { hasSequentialCharacters } from "./hasSequential";
import { hexToRgba as _hexToRgba } from "./hexToRgba";
import { hasRepeatedCharacters } from "./isRepeating";
import { reverseString } from "./reverse";
import { rgbaToHex as _rgbaToHex } from "./rgbaToHex";
import { titleCase } from "./titleCase";
import { tokenizeSentence } from "./tokenize";
import { truncateString } from "./truncate";
/**
 * @namespace StringUtils
 *
 * String utilities for TypeScript
 *
 * A collection of string utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
export declare namespace StringUtils {
    const capitalize: typeof capitalizeFirstLetter;
    const extract: typeof extractSubstringsByPattern;
    const frequency: typeof getWordFrequency;
    const reverse: typeof reverseString;
    const title: typeof titleCase;
    const tokenize: typeof tokenizeSentence;
    const truncate: typeof truncateString;
    const containsWhitespace: typeof _containsWhitespace;
    const hexToRgba: typeof _hexToRgba;
    const rgbaToHex: typeof _rgbaToHex;
    const hasSequential: typeof hasSequentialCharacters;
    const isRepeating: typeof hasRepeatedCharacters;
}
