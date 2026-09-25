### Exercise 1: Deep Object Difference

Chapter 4 introduced objects, arrays, mutation, and deep equality comparison. For this challenge, you will implement a function that finds the semantic differences between two objects.

Write a function `deepDiff(obj1, obj2)` that compares two values and returns an object detailing only the properties where `obj1` and `obj2` differ.

#### Requirements

* **Property Missing**: If a property exists in `obj1` but is missing in `obj2`, record the difference. Likewise, if a property exists in `obj2` but is missing in `obj1`, record the difference.
* **Primitive Mismatch**: If a property exists in both objects but holds different primitive values (or different non-object types), record both the old value (`from`) and the new value (`to`).
* **Nested Objects**: If a property in both `obj1` and `obj2` points to another object, recursively compute the difference. If there are no differences in the nested structure, that key should not appear in the result.
* **Arrays**: Treat arrays as values to be compared element-by-element (or by their index keys and length), or treat them as nested structures.
* **Return Value**: The function should return:
* `null` (or an empty object `{}`) if both values are deeply identical.
* A structured object describing the differences when changes exist.



#### Example

```javascript
const objA = {
  name: "Alice",
  age: 30,
  address: {
    city: "Cairo",
    zip: 12345
  },
  hobbies: ["reading", "chess"]
};

const objB = {
  name: "Alice",
  age: 31,
  address: {
    city: "Cairo",
    zip: 54321
  },
  hobbies: ["reading", "coding"],
  active: true
};

console.log(deepDiff(objA, objB));
// Example output format:
// {
//   age: { from: 30, to: 31 },
//   address: {
//     zip: { from: 12345, to: 54321 }
//   },
//   hobbies: {
//     1: { from: "chess", to: "coding" }
//   },
//   active: { from: undefined, to: true }
// }

```

