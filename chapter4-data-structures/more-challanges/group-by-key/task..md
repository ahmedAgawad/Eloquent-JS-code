### Exercise : Group By Key

In Chapter 4, objects are used to store maps or dictionaries of data, and arrays hold sequences of items. A common data manipulation task is categorizing an array of elements based on a specific attribute or computed property.

Write a function `groupBy(array, keyOrFunction)` that takes an array and a criterion, and returns an object where the keys are the distinct group names, and the values are arrays containing the items that belong to each group.

#### Requirements

* **Criterion Support**: The second argument can be either:
* A string representing a property name to extract from each object in the array.
* A function that takes an item and returns the group key name for that item.


* **Grouping**:
* Each distinct key produced must correspond to an array in the returned object.
* Items must appear in their respective group arrays in the order they appeared in the original array.


* **Non-existent Properties**: If the criterion is a property name and an item does not have that property (or it is `undefined`), group that item under the key `"undefined"`.
* **Immutability**: Do not mutate the original input array or its objects.

#### Examples

```javascript
// Grouping by a property key
const students = [
  { name: "Sara", grade: "A" },
  { name: "Ali", grade: "B" },
  { name: "Mona", grade: "A" },
  { name: "Ziad", grade: "C" }
];

console.log(groupBy(students, "grade"));
// Output:
// {
//   A: [ { name: "Sara", grade: "A" }, { name: "Mona", grade: "A" } ],
//   B: [ { name: "Ali", grade: "B" } ],
//   C: [ { name: "Ziad", grade: "C" } ]
// }

// Grouping by a function
const words = ["one", "two", "three", "four", "five"];

console.log(groupBy(words, word => word.length));
// Output:
// {
//   3: ["one", "two"],
//   4: ["four", "five"],
//   5: ["three"]
// }

```