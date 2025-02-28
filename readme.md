# Install Required Packages

Before running the script, install the necessary packages.

## Required Packages

- **inquirer** → Handles user interactions in the terminal.
- **lodash** → Helps in data grouping & manipulation.

## Why Lodash?

Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

## Lodash’s modular methods are great for:

1. Iterating over arrays, objects, and strings.
2. Manipulating and testing values.
3. Creating composite functions.

---

## Installation Steps:

Open a new terminal and run the following commands in a Node.js environment:

```sh
npm init -y       # Initializes a new Node.js project
npm install       # Installs dependencies from package.json
npm i lodash      # Installs lodash package
---

## Lodash Method Examples

# 1️⃣ `_.chunk()`

## 📌 Description  
Splits an array into groups of a specified size and returns an array of these chunks.

### 🖥 Example Usage:
```js
const _ = require('lodash');

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank"];
const chunkedNames = _.chunk(names, 3);

console.log(chunkedNames);
// Output: [["Alice", "Bob", "Charlie"], ["David", "Eve", "Frank"], ["Grace", "Hank"]]

# 2️⃣ _.debounce()

📌 Description
Creates a debounced function that delays invoking the provided function until after a specified wait time has elapsed since the last call.

##🖥 Example Usage:

const _ = require('lodash');

const searchAnimals = _.debounce((query) => {
    console.log(`Searching for: ${query}`);
}, 1000);

searchAnimals("Lion");
searchAnimals("Tiger");
searchAnimals("Cheetah");

// Only "Cheetah" will be logged after 1 second.

### Summary:

_.debounce(searchAnimals, 1000) ensures that the search function executes only after 1 second since the last time it was called.
If a user types "Lion" → "Tiger" → "Cheetah" quickly, only "Cheetah" will be logged. This prevents unnecessary API calls or heavy computations while users are typing.

# 3️⃣ _.merge()

📌 Description
Recursively merges nested objects, preserving and updating properties where needed.

## 🖥 Example Usage:
const _ = require('lodash');

const fruits A = {
    apples: { green: 3, red: 5 },
    bananas: { ripe: 4 },
    berries: { strawberries: 8 }
};

const fruits B = {
    apples: { green: 7, yellow: 2 },
    bananas: { ripe: 2, unripe: 3 },
    citrus: { oranges: 4, lemons: 6 }
};

const mergedFruits = _.merge(fruitsA, fruitsB);

console.log(mergedFruits);

### 🔍 Explanation:

apples.green is updated from 3 → 7 (merged instead of replaced).
apples.yellow is added.
bananas.ripe is updated from 4 → 2.
bananas.unripe is added.
berries.strawberries remains unchanged.
citrus.oranges and citrus.lemons are new properties added.