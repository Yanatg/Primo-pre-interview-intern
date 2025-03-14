# Merge Three Sorted Arrays (TypeScript)

## Installation and Setup
1. Clone the Repository:

```
git clone https://github.com/Yanatg/Primo-pre-interview-intern.git
cd primo-pre-test
```

2. Install Dependencies
```
npm install
```

## Running Unit Tests
```
npm test
```

## Example Usage
```
// Example usage in merge.ts or as a separate example.ts file
import { merge } from './src/merge';

const collection1 = [1, 3, 5];
const collection2 = [2, 4, 6];
const collection3 = [9, 8, 7];

const mergedArray = merge(collection1, collection2, collection3);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Project Structure
```
primo-pre-test/
├── src/
│   ├── merge.test.ts
│   └── merge.ts
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```


