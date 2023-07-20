<div align="center" style="background-color: white; color: #333; padding-bottom: 2em; border-radius: 1em;">
  <img src="smoothie-logo.png" alt="Your Library Logo" width="200">

# smoothie.ts 🔥

![Build Status](https://img.shields.io/github/actions/workflow/status/emilohlund-git/smoothie-ts/build.yml?label=build&labelColor=%23800080&color=%23FFF)
[![License](https://img.shields.io/github/license/emilohlund-git/smoothie-ts.svg?style=flat-square)](LICENSE)
[![codecov](https://codecov.io/gh/emilohlund-git/smoothie-ts/branch/main/graph/badge.svg?token=09SD0O77RV)](https://codecov.io/gh/emilohlund-git/smoothie-ts)

A comprehensive and modular utility library for all your programming needs. ✨

[![NPM Version](https://img.shields.io/npm/v/smoothie-ts.svg?style=flat-square)](https://www.npmjs.com/package/your_library)
[![Downloads](https://img.shields.io/npm/dm/smoothie-ts.svg?style=flat-square)](https://www.npmjs.com/package/smoothie-ts)

</div>

## Installation 💻

```bash
npm install smoothie-ts
```

## Features 🚀

- Powerful array utilities for sorting, filtering, and more. 📚
- Advanced string manipulation functions for easy text processing. 🔤
- Handy math methods to simplify complex calculations. ➗
- Pathfinding algorithms for graph-based problems. 🗺️

## Usage 🛠️

```TypeScript
import { ArrayUtils, StringUtils, PathfindingUtils, MathUtils } = from 'smoothie-ts';

// Basic data analysis on arrays

const temperatureData = [25.6, 26.2, 24.8, 23.5, 27.3, 26.8, 27.9, 24.5, 25.2, 26.1];
const analysisResults = ArrayUtils.analyze(temperatureData);

// String manipulations

console.log(StringUtils.title("hello, world!"));
// Output: "Hello, World!" 🌍
console.log(sum(2, 3, 4, 5)); // Output: 14 ➕

// Path finding algorithm

const connections: [string, string][] = [
  ["0,0", "1,0"],
  ["1,0", "1,1"],
  ["1,1", "2,1"],
  ["0,1", "0,2"],
  ["1,2", "2,2"],
  ["0,2", "1,2"],
];

const startingPoint: Point = { x: 0, y: 0 };
const goal: Point = { x: 2, y: 2 };

const path = findShortestPath(startingPoint, goal, connections);

console.log(path);
// Output: [
//   { x: 0, y: 0 },
//   { x: 1, y: 0 },
//   { x: 1, y: 1 },
//   { x: 2, y: 2 }
// ]

// Math utilities

// Value, min, max
const clampedValue = MathUtils.clamp(100, 90, 95);

console.log(clampedvalue); // Output: 95
```

## Documentation 📖

For detailed usage and API documentation, please check out the Documentation. <b>(WIP)</b>

## Contributing 🤝

Contributions are welcome! If you'd like to contribute to the library, please follow the guidelines outlined in CONTRIBUTING.md. <b>(WIP)</b>

## License 📝

This project is licensed under the MIT License. 📜
