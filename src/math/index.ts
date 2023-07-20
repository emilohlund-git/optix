import { clamp as _clamp } from "./clamp";
import { degToRad as _degToRad } from "./degToRad";
import { lerp as _lerp } from "./lerp";
import { radToDeg as _radToDeg } from "./radToDeg";

/**
 * @namespace MathUtils
 * 
 * Math utilities for TypeScript
 * 
 * A collection of math utility functions to simplify common tasks and improve code quality in TypeScript projects.
 */
export namespace MathUtils {
  export const clamp = _clamp;
  export const degToRad = _degToRad;
  export const lerp = _lerp;
  export const radToDeg = _radToDeg;
}