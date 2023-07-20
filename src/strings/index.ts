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
export namespace StringUtils {
  export const capitalize = capitalizeFirstLetter;
  export const extract = extractSubstringsByPattern;
  export const frequency = getWordFrequency;
  export const reverse = reverseString;
  export const title = titleCase;
  export const tokenize = tokenizeSentence;
  export const truncate = truncateString;
  export const containsWhitespace = _containsWhitespace
  export const hexToRgba = _hexToRgba;
  export const rgbaToHex = _rgbaToHex;
  export const hasSequential = hasSequentialCharacters;
  export const isRepeating = hasRepeatedCharacters;
}