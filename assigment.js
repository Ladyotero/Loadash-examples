//1. _.chunk-Splits an array into groups of a specified size and returns an array of these chunks.

const _ = require('lodash');

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank"];
const chunkedNames = _.chunk(names, 3);

console.log(chunkedNames);

//2. _.debounce Creates a debounced function that delays invoking the provided function until after a specified wait time has elapsed since the last time it was called. 
const _ = require('lodash');

const searchAnimals = _.debounce((query) => {
    console.log(`Searching for animals: ${query}`);
}, 1000);

// Simulating user typing quickly
searchAnimals("Lion");
searchAnimals("Tiger");
searchAnimals("Cheetah");

// Only the last call (Cheetah) will execute after 1 second.


//3._.merge  Deeply merges two or more objects,recursively merges nested objects, preserving and updating properties where needed.
const _ = require('lodash');

const fruits1 = {
    apples: { red: 5, green: 3 },
    bananas: { ripe: 4 },
    berries: { strawberries: 6 }
};

const fruits2 = {
    apples: { green: 7, yellow: 2 },
    bananas: { ripe: 2, unripe: 3 },
    citrus: { oranges: 5, lemons: 2 }
};

const mergedFruits = _.merge(fruits1, fruits2);

console.log(mergedFruits);


