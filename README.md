<div align="center" style="background-color: white; color: #333; padding-bottom: 2em; border-radius: 1em;">
  <img style="margin-top: 2em;" src="https://i.ibb.co/sWfcNyt/Opti-X-logo.png" alt="Smoothie.ts logo" width="400" />

# optix 🔥

![Build Status](https://img.shields.io/github/actions/workflow/status/emilohlund-git/optix/build.yml?label=build&labelColor=%23800080&color=%23FFF)
[![License](https://img.shields.io/github/license/emilohlund-git/optix.svg?style=flat-square)](LICENSE)
[![codecov](https://codecov.io/gh/emilohlund-git/optix/branch/main/graph/badge.svg?token=09SD0O77RV)](https://codecov.io/gh/emilohlund-git/optix.)

A comprehensive and modular utility library for all your programming needs. ✨

[![NPM Version](https://img.shields.io/npm/v/optix.ts.svg?style=flat-square)](https://www.npmjs.com/package/optix.ts)
[![Downloads](https://img.shields.io/npm/dm/optix.ts.svg?style=flat-square)](https://www.npmjs.com/package/optix.ts)

</div>

## Installation 💻

```bash
npm install optix.ts
```

## Features 🚀

Optix is a powerful utility library designed to simplify your programming tasks and boost productivity. It offers a wide range of features to handle various common tasks efficiently:

### Array Utilities 📚

Optimize your data analysis, sorting, and filtering tasks with our comprehensive array manipulation functions. Whether you're working with numerical data, objects, or strings, Optix provides intuitive and performant methods to handle arrays of any size.

- **Array Analysis**: Gain valuable insights into your data with statistical analysis functions, including mean, median, mode, and range calculations.

- **Sorting**: Quickly sort arrays in ascending or descending order based on different criteria, making it easier to organize and visualize your data.

- **Filtering and Searching**: Easily filter arrays to extract specific elements that meet certain conditions or search for specific values.

- **Grouping and Aggregation**: Group array elements based on common properties and perform aggregation operations, such as sum, average, and counting.

### String Manipulation 🔤

Easily process and transform text data with a suite of convenient string utilities. Optix empowers you to manipulate strings efficiently, enabling tasks like formatting, validation, and search operations.

- **Title Case and Formatting**: Convert text to title case or apply custom formatting rules to ensure consistent and visually appealing output.

- **String Validation**: Validate email addresses, URLs, and other common patterns to ensure data integrity.

- **Text Search and Replacement**: Perform efficient search and replacement operations to modify strings as needed.

- **String Concatenation and Interpolation**: Seamlessly concatenate or interpolate strings with variables to create dynamic content.

### Handy Math Methods ➗

Simplify complex calculations with our math utilities, designed to handle common mathematical operations in a straightforward and reliable manner.

- **Value Clamping**: Limit numeric values to specified ranges, ensuring they stay within desired bounds.

- **Interpolation**: Smoothly interpolate between values, useful for creating animations or generating gradual transitions.

- **Unit Conversions**: Convert between various units, such as length, temperature, and time, with ease.

- **Geometric Calculations**: Perform geometric calculations, including distance, angles, and area computations.

### Theta* or A* Algorithm for Pathfinding 🗺️

Solve graph-based problems and find the shortest path using our efficient pathfinding algorithms. Optix provides the powerful Theta\* Algorithm for optimizing pathfinding in grid-based environments, making it ideal for games, robotics, and route planning.

- **Theta\* Algorithm**: Find an optimal path between two nodes in a grid with reduced node expansions compared to Dijkstra's Algorithm, leading to faster pathfinding in dense grids.

- **Adaptive Heuristics**: Benefit from more accurate and adaptive heuristics that consider obstacles, resulting in improved pathfinding performance.

- **Smooth Paths**: Theta\* produces smoother paths that efficiently navigate around obstacles, making it suitable for realistic and visually appealing route planning.

### And More! 🎁

Optix is an ever-growing library, and we're constantly adding new features and utilities to meet the diverse needs of developers. Expect ongoing updates and enhancements to keep your codebase efficient and up-to-date.

## Usage 🚀

Discover the full potential of Optix's powerful utilities with these advanced examples. Unlock the true capabilities of your projects and see how Optix can simplify complex tasks.

### Advanced Array Analysis 📚

```TypeScript
import { ArrayUtils } from 'optix.ts';

const salesData = [
  { product: 'Widget', sales: 1200, revenue: 24000 },
  { product: 'Gadget', sales: 800, revenue: 32000 },
  { product: 'Doodad', sales: 1600, revenue: 12800 },
  // ... and more data entries
];

const analysisResults = ArrayUtils.analyze(salesData);

console.log(analysisResults.mean('sales')); // Output: 1200
console.log(analysisResults.median('revenue')); // Output: 24000
console.log(analysisResults.mode('sales')); // Output: 1600
console.log(analysisResults.range('revenue')); // Output: 19200
```

### Advanced String Manipulation 🔤

```TypeScript
import { StringUtils } from 'optix.ts';

const rawText = 'lorem ipsum dolor sit amet';
const formattedText = StringUtils.title(rawText);

console.log(formattedText);
// Output: "Lorem Ipsum Dolor Sit Amet" 🌍

const complexEmail = '    user@   example.com  ';
const isValidEmail = StringUtils.validateEmail(complexEmail.trim());

console.log(isValidEmail); // Output: true
```

### Advanced Pathfinding with Theta\* Algorithm 🗺️

```TypeScript
import { PathfindingUtils, Point } from 'optix.ts';

// Define a grid-based environment with obstacles
const connections: [string, string][] = [
  ["0,0", "1,0"],
  ["1,0", "1,1"],
  ["1,1", "2,1"],
  ["0,1", "0,2"],
  ["1,2", "2,2"],
  ["0,2", "1,2"],
];

// Define starting and goal points
const startingPoint: Point = { x: 0, y: 0 };
const goal: Point = { x: 2, y: 2 };

// Find the shortest path using Theta* Algorithm
const path = PathfindingUtils.thetaStar(startingPoint, goal, connections);

console.log(path);
// Output: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }]
```

### Advanced Math Operations ➗

```TypeScript
import { MathUtils } from 'optix.ts';

const angleInDegrees = 45;
const angleInRadians = MathUtils.degreesToRadians(angleInDegrees);

console.log(angleInRadians); // Output: 0.7853981633974483

const interpolatedValue = MathUtils.lerp(0, 100, 0.5);

console.log(interpolatedValue); // Output: 50
```

## Dive Deeper with Optix Documentation 📖

To explore the full range of Optix's capabilities and dive deeper into each utility, head over to our comprehensive [Documentation](https://emilohlund-git.github.io/optix/). There, you'll find detailed API references, usage examples, and tips to maximize your productivity.

## Contribute and Shape the Future 🤝

Ready to level up your coding experience? Join our community and contribute to Optix. We welcome new ideas, bug fixes, and feature enhancements. Check out our [Contribution Guidelines](CONTRIBUTE.md) to get started.

## License 📝

This project is licensed under the [MIT License](LICENSE). 📜
