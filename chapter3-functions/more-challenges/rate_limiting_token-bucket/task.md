##### Challenge: Rate Limiting & Token Bucket Throttle

In backend infrastructure and microservices, rate limiters protect APIs from being overwhelmed. A classic pattern is a **Token Bucket** algorithm where a client is allowed a certain number of operations within an allowance window, consuming units over time.

Implement a function factory called `createRateLimiter` using closures, function scope, and optional/default arguments.

**Requirements**

1. `createRateLimiter(limit, refillRate)`
* Accepts two parameters:
* `limit` (the maximum burst tokens available in the bucket, default: `5`).


* `refillRate` (the number of tokens regenerated per replenishment cycle, default: `1`).




* Returns an inner function (`consume`) that manages bucket state encapsulated in private scope.




2. The returned `consume` function:
* Accepts two optional parameters:
* `cost` (number of tokens required to perform the action, default: `1`).


* `replenish` (a boolean flag indicating whether the bucket should receive a replenishment cycle before attempting consumption, default: `false`).




* If `replenish` is `true`, add `refillRate` tokens to the bucket *before* attempting the transaction, without exceeding `limit`.
* Evaluates if enough tokens remain in the bucket:
* If available tokens $\ge$ `cost`: Deduct `cost` from the bucket and return `true`.
* If available tokens $<$ `cost`: Do not deduct any tokens; return `false`.


* Each instance created by `createRateLimiter` must maintain its own completely isolated state.





**Expected Usage**

```javascript
const limiter = createRateLimiter(3, 1);

console.log(limiter(2)); // true  (tokens left: 1)
console.log(limiter(2)); // false (tokens left: 1, not enough)
console.log(limiter(2, true)); // true  (replenishes 1 -> tokens: 2, consumes 2 -> tokens left: 0)
console.log(limiter()); // false (tokens left: 0, cannot consume default 1)

```

**Constraints & Scope**

* Use only language features covered up through **Chapter 3** (functions, closures, default parameters, variable scoping, arithmetic/comparisons).


* Do not use external libraries, objects, arrays, or modern timers/asynchronous primitives.



Submit your solution when ready.