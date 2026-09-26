### Exercise 4: Deep Flatten and Unflatten

Arrays can contain arbitrary nesting of other arrays. While Chapter 4 covers arrays and basic collection methods, transforming nested structures into flat lists (and vice versa) tests recursion and array manipulation.

Write two functions: `flatten(arr)` and `unflatten(arr, shape)`.

#### Requirements

1. **`flatten(arr)`**:
* Accepts an array that may contain deeply nested arrays to any depth.
* Returns a new single-dimensional array with all values in their original sequence.
* Must not mutate the original array.
* *(Do not use the built-in `Array.prototype.flat`)*.


2. **`unflatten(arr, shape)`**:
* Accepts a flat array of values and a template array `shape` defining the desired nested structure (where elements in `shape` indicate slot positions).
* Returns a new nested array matching the structure of `shape`, populated with values from `arr` consumed in order from left to right.
* If there are more slots in `shape` than values in `arr`, fill the remaining slots with `undefined`.



#### Examples

```javascript
// Flattening
const nested = [1, [2, [3, 4], 5], [6, 7], 8];
console.log(flatten(nested));
// -> [1, 2, 3, 4, 5, 6, 7, 8]

// Unflattening
const flatList = ["a", "b", "c", "d", "e", "f"];
const template = [0, [0, [0, 0]], 0, 0];

console.log(unflatten(flatList, template));
// -> ["a", ["b", ["c", "d"]], "e", "f"]

```